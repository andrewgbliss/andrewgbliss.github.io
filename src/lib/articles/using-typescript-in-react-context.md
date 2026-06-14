---
slug: "using-typescript-in-react-context"
date: "2020-02-04"
title: "Using TypeScript in React Context"
tagline: "In this article we will go over how to use TypeScript in React Context."
authorSlug: "andrew-bliss"
image: "https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/desk-top.webp"
published: true
tags: ["typescript", "react", "context"]
---

TypeScript has taken the JavaScript community by storm. Once a typeless programming language, now, through careful thought, has types.

TypeScript can take normal JavaScript and define types, making it awesome for tooling, debugging, and readability.

We will take a React Context and add TypeScript so we know what is available to use throughout our application.

```tsx
interface ContextProps {
  darkMode: boolean;
  setDarkMode(darkMode: boolean): void;
}
const Context = React.createContext<ContextProps>({
  darkMode: false,
  setDarkMode: () => {},
});
```

First, let’s create a React Context that will take in a TypeScript interface called ContextProps. This interface will include a boolean darkMode and a setter function called setDarkMode.

Then by adding the ContextProps to the Context, it will enable us to know what variables are included on our Context.

```tsx
interface Props {
  children?: React.ReactNode;
}
const Provider: React.FC<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  return (
    <Context.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </Context.Provider>
  );
};
```

Now we will create the Context Provider with a TypeScript interface that just has the React children property.

Last, lets export our components:

```tsx
export const useStore = () => useContext(Context);
export function withProvider(Component: any) {
  return function WrapperComponent(props: any) {
    return (
      <Provider>
        <Component {...props} />
      </Provider>
    );
  };
}
export { Context, Provider };
```

The useStore export is just a helper function that we can use in any of our child components.

The withProvider is a helper function that can neatly wrap the Context Provider around any component.

By adding TypeScript to React we can easily read and understand what the context has available to the application.

If you need to brush up on your TypeScript you can check out this link:

Familiar With TypeScript already?

[www.typescriptlang.org](https://www.typescriptlang.org/)

Happy Typing !!!
