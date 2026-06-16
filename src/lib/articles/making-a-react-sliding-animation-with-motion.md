---
slug: "making-a-react-sliding-animation-with-motion"
date: "2026-06-16"
title: "Making a React sliding animation with motion"
tagline: "In this article we will build a react component around the package motion which is used for animations."
authorSlug: "andrew-bliss"
image: "https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/react.webp"
published: true
tags: ["react", "tailwind", "css"]
---

## Website Animations

Modern websites have come a long way in animation. While a static website is just fine, adding animations can make your website feel more professional. However adding too many animations can make it feel clunky and confuse people. This article will go over how to make a simple react component using the package motion to create a sublte sliding animation.

## Setup

For this article I will be using React, Tailwind CSS, and Motion.

[https://motion.dev/](https://motion.dev/)

Previously Framer Motion, Motion is a package that makes adding animations to your React components very easy.

```bash
npm install motion
```

## Slide Component

So now we have that installed, let’s make a component that will animate the element so it will slide into the screen.

```tsx
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import type { UseInViewOptions } from "motion/react";

type MarginType = UseInViewOptions["margin"];

export function SlideDiv({
  children,
  dir = "bottom",
  margin = "0px 0px -100px 0px",
  once = false,
}: {
  children: React.ReactNode;
  dir?: "top" | "left" | "bottom" | "right";
  margin?: MarginType;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin });
  let to = { y: 0, x: 0 };
  if (dir === "top") {
    to = { x: 0, y: -24 };
  } else if (dir === "left") {
    to = { x: -24, y: 0 };
  } else if (dir === "bottom") {
    to = { x: 0, y: 24 };
  } else if (dir === "right") {
    to = { x: 24, y: 0 };
  }
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...to }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...to }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin }}
    >
      {children}
    </motion.div>
  );
}
```

Let's go over the parts of this to understand what motion is doing.

```
<motion.div
```

To add animations to an element you can prefix any JSX / HTML element with "`<motion.`". This will make a motion component where you can add animation properties.

So if you wanted to animate a paragraph tag you can do something like this:

```
<motion.p>This is a paragraph</motion.p>
```

Now let's talk about when we want the animation to run.

```
const isInView = useInView(ref, { once, margin });
```

I use a hook to tell whether or not the element is in view in the browser. Because we only want the animations to run once you can actually see them. It uses a React Ref to keep track of what the element actually is.

```
let to = { y: 0, x: 0 };
if (dir === "top") {
  to = { x: 0, y: -24 };
} else if (dir === "left") {
  to = { x: -24, y: 0 };
} else if (dir === "bottom") {
  to = { x: 0, y: 24 };
} else if (dir === "right") {
  to = { x: 24, y: 0 };
}
```

Then I have some custom logic where I pass in a string called dir (Direction) to say where I want it to start animating from. So if I want to have it slide in from the left, I would say `dir="left"`.

## Code Example

Now we have our React component, let's use it in a simple example. I have an image I want to slide up on initial page load.

### Basic Example

```tsx
<SlideDiv>
  <img
    src="/img/zero-fall-logo.png"
    alt="Zero Fall Studios"
    width="830"
    height="80"
  />
</SlideDiv>
```

That's it. The deault props are just that. It's slides up on page load.

### Props Example

```tsx
<SlideDiv margin="0px 0px -200px 0px" dir="left">
  <h3 className="py-5 text-center text-2xl text-white">Blog</h3>
</SlideDiv>
```

This example is waiting until the person scrolls down another 200 pixels and will slide in from the left.

## Conclusion

Of course you can use CSS to have the most control when using animations for the web. However using libraries like Motion can help a lot. Combined with React you can create professional websites with not reinventing the wheel everytime.
