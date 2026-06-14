---
slug: "how-to-build-a-star-rating-component-in-react"
date: "2020-10-26"
title: "How to Build a Star Rating Component in React"
tagline: "This article will go over how to build a Star Rating component in React."
authorSlug: "andrew-bliss"
image: "https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/react.webp"
published: true
tags: ["react"]
---

Chances are if you are developing a blog or a CMS you want the user to be able to rate articles or products. This will give you the ability to recommend products based on how popular a products has become.

This article will go over how to build a Star Rating component in React.

So now let’s go step by step if you are new to React or like to see how to use functional components.

First let’s head on over to https://heroicons.dev and pick out a star icon.

```tsx
function StarIcon(props) {
  const { fill = "none" } = props;
  return (
    <svg
      class="w-6 h-6"
      fill={fill}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      ></path>
    </svg>
  );
}
```

Here is the StarIcon component that I will be using for the Star Rating. Nothing really too fancy except that I needed to pass in the fill property. Using an SVG we can pass in a fill color. This will make it possible when we hover the StarIcon to render the star with a yellow color, then when we are not hovering over we can render with no fill. I default the fill prop to none.

Now let’s go over the RatingIcon.

```tsx
function RatingIcon(props) {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;
  const fill = React.useMemo(() => {
    if (hoverRating >= index) {
      return "yellow";
    } else if (!hoverRating && rating >= index) {
      return "yellow";
    }
    return "none";
  }, [rating, hoverRating, index]);
  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      <StarIcon fill={fill} />
    </div>
  );
}
```

So this component will take an index from the props indicating what Star we are hovering over or clicking. It will take in the actual rating we have given it, and the hover rating, meaning the current index we are currently hovering over. Then we have some events to fire off when we hover over the star or click on the star, onMouseEnter, onMouseLeave, and onSaveRating.

To calculate whether or not the fill color will be yellow I take the hover rating and check if its greater or equal to the current index. For instance, if the hover rating is 3, then 1, 2, and 2 will become yellow. Then if there isn’t a hover rating and there is a set rating I run the same logic. So when you click and set the real rating it will keep it saved when you move your mouse off the component.

Now let’s look over the container component.

```tsx
const App = () => {
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
  };
  return (
    <div className="box flex">
      {[1, 2, 3, 4, 5].map((index) => {
        return (
          <RatingIcon
            index={index}
            rating={rating}
            hoverRating={hoverRating}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onSaveRating={onSaveRating}
          />
        );
      })}
    </div>
  );
};
```

So I have setup 2 states I need to keep track of, the real rating for when someone clicks on a star and rates the item, and the hover rating for when someone is hovering over wanting to rate an item. I then setup my events setting the hover rating when the onMouseEnter event is fired. When the onMouseLeave event is fired I reset the hover rating, and when the onSaveRating is fired I save the rating they clicked on.

I setup an array from 1 to 5 and create a RatingIcon component with the correct index, state and events.

This is for the front end but you can easily call out to an API and getting the current ratings based on an id, or create, update a rating when the user is logged in. The choices are limitless.
