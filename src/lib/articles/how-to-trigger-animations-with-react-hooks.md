---
slug: "how-to-trigger-animations-with-react-hooks"
date: "2021-03-01"
title: "How to Trigger Animations with React Hooks"
tagline: "In this article let’s go over how to trigger animations using React Hooks. We want to be able to control when the user sees the animation. When the user scrolls to a certain section of the website we will slide the element in using CSS."
authorSlug: "andrew-bliss"
image: "https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/react.webp"
published: true
tags: ["react", "tailwind", "css"]
---

## Website Animations

In this day and age websites seem to require animations. I would say, depending on what type of website you are going for, animations may be appropriate. In this article let’s go over how to trigger animations using React Hooks. We want to be able to control when the user sees the animation. When the user scrolls to a certain section of the website we will slide the element in using CSS.

## Setup

For this article I will be using React and Tailwind CSS, however you can use whatever CSS you want to use. I will be using a component for Tailwind CSS called @headlessui/react. So let’s begin by installing this package.

```bash
npm install @headlessui/react
```

## Slide Component

So now we have that installed, let’s make a component to use Tailwind CSS classes that will animate the element so it will slide into the screen.

```tsx
import { Transition } from "@headlessui/react";
interface Props {
  show?: boolean;
  children: React.ReactNode;
}
export default function SlideUp(props: Props) {
  const { show, children } = props;
  return (
    <Transition
      show={show}
      enter="transform transition ease-out duration-500"
      enterFrom="opacity-0 translate-y-full"
      enterTo="opacity-100 translate-y-0"
      leave="transform transition ease-out duration-500"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-full"
    >
      {children}
    </Transition>
  );
}
```

With this component you can define what CSS runs when the boolean show is set to true. Then when it gets set to false it will undo or hide the element.

So when it wants to show it will run this from and to animations class

from

```css
opacity-0 translate-y-full
```

to

```css
opacity-100 translate-y-0
```

which will start with a opacity of 0 and slide the element into the view port animating the opacity to 100.

Now let’s create a container component to control the show boolean.

```tsx
import { useState, useRef } from "react";
import useTriggerOnScroll from "../../../hooks/useTriggerOnScroll";
import Slide from "../SlideUp";
interface Props {
  className?: string;
  children: React.ReactNode;
}
export default function ScrollSlideUp(props: Props) {
  const { className = "", children } = props;
  const el = useRef();
  const [show, setShow] = useState<boolean>(false);
  useTriggerOnScroll(el, (triggered) => {
    setShow(triggered);
  });
  return (
    <div className={className} ref={el}>
      <Slide show={show}>{children}</Slide>
    </div>
  );
}
```

This component will wrap around our Transition component. You can setup your own CSS classes, you don’t need to use Tailwind for this. This container component will setup a react reference to control the element and use our custom hook to calculate whether or not the element has been scrolled to. If it has then it will call the callback with a triggered boolean. Then with that triggered boolean we can set our Transition component to animate.

## useTriggerOnScroll

Now let’s create our custom hook.

```tsx
import { useEffect, useState } from "react";
function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}
function hasScrolledTo(el) {
  if (!el) return false;
  const top = getOffset(el).top;
  const offset = window.innerHeight / 2;
  return top - offset <= window.pageYOffset;
}
export default function useTriggerOnScroll(ref, onTrigger) {
  const [triggered, setTriggered] = useState<boolean>(false);
  useEffect(() => {
    function onScroll() {
      const viewed = hasScrolledTo(ref.current);
      if (viewed && !triggered) {
        window.removeEventListener("scroll", onScroll);
        setTriggered(true);
        onTrigger(true);
      } else if (!viewed && triggered) {
        window.removeEventListener("scroll", onScroll);
        setTriggered(false);
        onTrigger(false);
      }
    }
    setTimeout(() => {
      window.addEventListener("scroll", onScroll);
    }, 1000);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [ref, onTrigger, triggered]);
}
```

This will setup some helper functions to calculate whether or not the element has been scrolled to. Then we setup a useEffect which creates the window scroll event listener. Anytime the webpage is scrolled it will call our event handler and check if the element has been scrolled to. If it has we set our state to true and call the onTrigger call back, which will then call our container component and animate the element. When the user scrolls back up if will set the show boolean to false and re hide the element.

## Conclusion

There are many CSS animation libraries and packages out there. This is creating a custom hook to animate anything you want if you need any custom code written. If you have any comments or advice on how you run animations, please feel free to leave a comment.
