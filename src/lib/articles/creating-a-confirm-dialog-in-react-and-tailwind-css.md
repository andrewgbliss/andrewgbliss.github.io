---
slug: "creating-a-confirm-dialog-in-react-and-tailwind-css"
date: "2020-09-14"
title: "Creating a Confirm Dialog in React and Tailwind CSS"
tagline: "In this article we will go over how to create a confirm dialog with React and Tailwind CSS."
authorSlug: "andrew-bliss"
image: "https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/tailwind.webp"
published: true
tags: ["react", "tailwind", "css"]
---

In this article we will go over how to create a confirm dialog using React and Tailwind CSS. This article will roughly go over the logic in my other article, Creating a Confirm Dialog in React and Material UI, however this article will use Tailwind CSS.

There comes a time in every application where you want to delete something. So like every developer, you add a button, that when clicked on, deletes the resource.

Wether it’s a blog post, a shopping cart item, or disabling an account, you want to protect against unwanted button clicks.

Enter the Confirm Dialog.

Sometimes you do want to execute an action without always prompting the user with a confirm dialog, and sometimes it can be annoying always prompting them.

Hey, do you want to do this?

No, really, do you want to do this?

Sometimes, I get annoyed and tell myself, and the application. Yes! Of course I want to do the action. Why else would I have clicked on it?

However, when it comes to deleting sensitive data, such as a blog post, I would suggest adding a confirm dialog, so the user can be alerted and can back out if they accidentally clicked on it by mistake.

Before we begin, let’s look at how to achieve this is native JavaScript.

```js
var shouldDelete = confirm(
  "Do you really want to delete this awesome Medium article?"
);
if (shouldDelete) {
  deleteArticle();
}
```

This will prompt a default confirm box, and prompt the user with the text, “Do you really want to delete this awesome article?”

If the user clicks Yes, then it will set the shouldDelete boolean to true and run the deleteArticle function. If they click No, or Cancel, it will close the dialog.

But the native browser implementation of the confirm dialog is kind of boring, so let’s make a version, that looks good, with React and Tailwind CSS.

Let’s begin by creating a reusable component. You can use this in any application that uses React and Tailwind.

I can also mention that I am using NextJs and Typescript to serve my React components.

First we need to build out a Dialog component. I will be using another article to help build the basic Dialog. You can follow this article or use the component I made.

## Basic Dialog

```tsx
import ExitIcon from "@components/Icons/Exit";
import IconButton from "@components/Button/IconButton";
interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: Function;
}
export default function Dialog(props: Props) {
  const { open, onClose } = props;
  if (!open) {
    return <></>;
  }
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
        <div>{props.children}</div>
        <span className="absolute top-0 right-0 p-4">
          <IconButton onClick={() => onClose()}>
            <ExitIcon />
          </IconButton>
        </span>
      </div>
    </div>
  );
}
```

I already had pre-made some other helper components such as an IconButton and ExitIcon.

## IconButton

```tsx
interface Props {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}
export default function IconButton(props: Props) {
  const {
    children,
    onClick = (event: React.MouseEvent<HTMLButtonElement>) => {},
    className = "",
  } = props;
  return (
    <button
      onClick={onClick}
      className={`focus:outline-none focus:border-none hover:bg-gray-400 hover:bg-opacity-25 p-2 rounded-full inline-flex items-center ${className}`}
    >
      {children}
    </button>
  );
}
```

## ExitIcon

```tsx
export default function ExitIcon() {
  return (
    <svg
      className="h-6 w-6 fill-current text-grey hover:text-grey-darkest"
      role="button"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
    </svg>
  );
}
```

## Button

```tsx
interface Props {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}
export default function Button(props: Props) {
  const { type = "button", children, onClick, className = "" } = props;
  return (
    <button
      className={`bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

## Confirm Dialog

```tsx
import Dialog from "./Dialog";
import Button from "@components/Button/Button";
interface Props {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClose: Function;
  onConfirm: Function;
}
export default function Confirm(props: Props) {
  const { open, onClose, title, children, onConfirm } = props;
  if (!open) {
    return <></>;
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <h2 className="text-xl">{title}</h2>
      <div className="py-5">{children}</div>
      <div className="flex justify-end">
        <div className="p-1">
          <Button
            onClick={() => onClose()}
            className="bg-secondary hover:bg-secondary-light"
          >
            No
          </Button>
        </div>
        <div className="p-1">
          <Button
            onClick={() => {
              onClose();
              onConfirm();
            }}
          >
            Yes
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
```

This component will take in these props:

- title — This is what will show as the dialog title
- children — This is what will show in the dialog content. This can be a string, or it can be another, more complex component.
- open — This is what tells the dialog to show.
- onClose — This is a state function that will set the state of the dialog to close.
- onConfirm — This is a callback function when the user clicks Yes.

This is just a basic confirm dialog, you can modify it to meet your needs, such as changing the Yes or No buttons.

Now let’s see how we can use this component in our application.

As an example, let’s say we have a table that lists blog posts. We want a function to run when we click a delete icon, that will show this confirm dialog, and when we click Yes, it will run a deletePost function.

```tsx
<div>
  <IconButton aria-label="delete" onClick={() => setConfirmOpen(true)}>
    <DeleteIcon />
  </IconButton>
  <ConfirmDialog
    title="Delete Post?"
    open={confirmOpen}
    onClose={() => setConfirmOpen(false)}
    onConfirm={deletePost}
  >
    Are you sure you want to delete this post?
  </ConfirmDialog>
</div>
```

In this component, we need to implement the ConfirmDialog with the props open, onClose, and onConfirm. Open and setOpen are controlled by using a React state, and onConfirm takes in a function called deletePost, which calls an API to delete this certain post. Implementing these are beyond the scope of this article. I will leave it up to to implement what those functions actually do.

There you have it! Pretty easy to create a reusable confirm dialog, and it looks a million times better than the default native browser dialog.

## Tailwind CSS notes

I have recently discovered Tailwind CSS and I am loving every minute of it. Tailwind CSS is a utility-first CSS framework that is easy to use and make something look great within seconds. The difference between Material UI and Tailwind CSS is that the former has a ton of prebuilt components that looks the same across apps, the latter uses utility classes that enable you to build components how you want them to look, which on different apps you can configure to each app to its own look and feel. Please check it out and leave me a comment.

Also quick shout out to this website that makes SVG icons so much easier to use in your React components that utilize Tailwind CSS.

[https://heroicons.dev/](https://heroicons.dev/)
