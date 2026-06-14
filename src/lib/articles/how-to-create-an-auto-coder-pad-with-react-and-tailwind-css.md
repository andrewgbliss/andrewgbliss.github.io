---
slug: "how-to-create-an-auto-coder-pad-with-react-and-tailwind-css"
date: "2020-10-06"
title: "How to Create an Auto Coder Pad with React and Tailwind CSS"
tagline: "In this article we will go over how to create an auto coder pad with React and Tailwind CSS."
authorSlug: "andrew-bliss"
image: "https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/entrylevel.webp"
published: true
tags: ["react", "tailwind", "css"]
---

My story is as follows. I was on the Tailwind CSS website the other day, and I noticed they have an awesome auto coder pad on their main page. As the auto coder pad types it changes the css so you can see how to use Tailwind CSS to create styled components. So naturally I wanted to add it on my website.

When I first started to think about how to do this I first went to NPM to see what packages I could use to highlight the code for me.

I decided to use Highlight.js along with React Highlight.js which is a light wrapper around the library.

Highlight.js is easy to use out of the box and it comes with many stylings and languages.

[https://highlightjs.org/](https://highlightjs.org/)

Here is my attempt to create an auto coder pad in React using these libraries.

```tsx
import { useEffect, useState, useRef } from "react";
import useTriggerOnScroll from "@hooks/useTriggerOnScroll";
const introContent = `1 <html lang="en">
2  <head>
3   <title>Entry Level Developer</title>
4  </head>
5  <body>
6   <h1>Start your career today!</h1>
7  </body>
8 </html>
`;
let index = 0;
function CodeSample() {
  const el = useRef();
  const [content, setContent] = useState("");
  const [start, setStart] = useState(false);
  useTriggerOnScroll(el, () => {
    setStart(true);
  });
  useEffect(() => {
    if (!start) {
      return;
    }
    const type = () => {
      setContent(content + introContent[index++]);
    };
    if (index < introContent.length) {
      setTimeout(type, 100);
    }
  }, [start, content]);
  return (
    <div ref={el} className="highlight text-xs sm:text-sm md:text-md">
      <div className="flex pl-4 pt-4">
        <div className="rounded-full bg-red-500 w-3 h-3 mr-2" />
        <div className="rounded-full bg-yellow-500 w-3 h-3 mr-2" />
        <div className="rounded-full bg-green-500 w-3 h-3" />
      </div>
      <Highlight language={"html"}>{content}</Highlight>
    </div>
  );
}
```

Let’s talk about my approach and why I coded it the way that I did. First I start with the full content I want the auto coder pad to type out as a user first comes to the site. I call this variable introContent .

Now in my component I keep track of the state of the text inside the Highlight.js component with a React state variable.

```tsx
const [content, setContent] = useState("");
```

I wanted it to type pretty fast but not too fast, so in my useEffect I have a setTimeout function perform every 100 milliseconds.

```tsx
setContent(content + introContent[index++]);
```

I keep track of what index I am on in the character string with an integer called index . Every time I synthetically type a character in the setTimeout I increment to the next letter until there are no more characters to type and concatenate with the previously typed characters.

At first I thought I could write a setInterval and have the useEffect run only once, however doing that it would never update the content state since the useEffect wouldn’t have an update version every time it ran.

As for the last part, let’s talk about the useRef and useTriggerOnScroll hooks.

I noticed when I first added this to my website, it would start auto typing right on page load, then when I scrolled down to the element it would already be finished. I needed a way to trigger the start of the typing when the user scroll down and the auto coder pad comes into view.

I useRef to add a reference on the main div element, then I pass that into my custom hook called useTriggerOnScroll . This hook triggers a function when the element scroll into the users viewport.

Let’s look at the custom hook.

```tsx
import { useEffect } from "react";
function isInViewport(el, offset = 0) {
  if (!el) return false;
  const top = el.getBoundingClientRect().top;
  return top + offset >= 0 && top - offset <= window.innerHeight;
}
export default function useTriggerOnScroll(ref, onTrigger) {
  useEffect(() => {
    function onScroll() {
      if (isInViewport(ref.current)) {
        onTrigger();
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [ref, onTrigger]);
}
```

I setup an addEventListener so I can listen to scroll events. In my onScroll function I calculate to see if the element is in the viewport by using the isInViewport function.

Once the element scrolls into view in calls the onTrigger function and removes the scroll listener.

This is specific to my issue I was facing, so feel free to change this to meet your needs.

There might be a better way to do this, let me know in the comments.

Now let’s talk about some Tailwind CSS styling.

First I setup some component classes in my styles.css.

```css
.highlight {
  @apply rounded-lg shadow-2xl bg-background h-64;
}
.highlight code {
  @apply p-4 bg-background;
}
```

For my highlight class I wanted rounded corners, a box shadow and a fixed height. Then inside the Highlight.js code html tag I wanted some padding and the background to be my own colored background I setup.

In my tailwind.config.js file I added the background color like this:

```js
theme: {
  extend: {
    colors: {
      background: '#1E1E1E',
    },
  },
},
```

Let’s finish with the fun part, cloning the close, minimize, and maximize buttons on how it appears in MacOS.

```tsx
<div className="rounded-full bg-red-500 w-3 h-3 mr-2" />
<div className="rounded-full bg-yellow-500 w-3 h-3 mr-2" />
<div className="rounded-full bg-green-500 w-3 h-3" />
```

So rounded-full creates a circle, I set the appropriate color and a width and height of 3 and some margins.
