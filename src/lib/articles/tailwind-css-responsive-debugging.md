---
slug: "tailwind-css-responsive-debugging"
date: "2021-04-27"
title: "Tailwind CSS Responsive Debugging"
tagline: "Responsive websites allow you to create one website that fits perfectly on all device resolutions, however figuring out what screen size you are on is sometimes a challenge."
authorSlug: "andrew-bliss"
image: "https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/tailwind.webp"
published: true
tags: ["tailwind", "css", "responsive web design", "html"]
---

Creating responsive websites in Tailwind CSS is a breeze, hence the logo. Responsive websites allow you to create one website that fits perfectly on all device resolutions, however figuring out what screen size you are on is sometimes a challenge.

Your best bet is to use developer tools to grow and shrink the screen according to the target device, however it can sometimes leave you to wonder what breakpoints you are hitting?

Here is a little HTML snippet you can use to show you what breakpoints you are hitting. Once you are done you can comment it out of your webpage.

```html
<div
  className="fixed bottom-0 right-0 p-6 w-8 h-8 bg-white border flex justify-center items-center opacity-75"
>
  <div className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
    XS
  </div>
  <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
    SM
  </div>
  <div className="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">
    MD
  </div>
  <div className="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">
    LG
  </div>
  <div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
    XL
  </div>
  <div className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
    2XL
  </div>
</div>
```

This will show a little box in the bottom right of the screen that shows what breakpoint you are on, and of course you can modify this if you have custom breakpoints.

Happy responsive coding!
