---
slug: "simplicity-over-abstraction"
date: "2025-05-02"
title: "Simplicity over abstraction"
tagline: "Keeping things simple is hard to do. Most go the abstraction route only to introduce unwanted complecity. Let's talk about it."
authorSlug: "andrew-bliss"

image: "https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/development.jpg"
published: true

tags: ["software engineering", "discussion"]
---

## Software Engineering is Hard

Software engineering is inherently complex. We're tasked with translating real-world problems into logical instructions that computers can understand and execute. This translation process is rarely straightforward, involving numerous decisions about architecture, data structures, algorithms, and interfaces.

What makes software engineering particularly challenging is that we're not just solving technical problems—we're building systems that need to evolve over time, accommodate changing requirements, and be maintained by different people. The code we write today might be read, modified, and extended by someone else years from now.

## Developers Love to Make Abstractions

When faced with complexity, developers often reach for a familiar tool: abstraction. Abstractions allow us to hide implementation details behind interfaces, making code more modular and theoretically easier to understand. They help us manage complexity by breaking systems into smaller, more digestible pieces.

Common abstractions include:

- **Design patterns**: Reusable solutions to common problems
- **Frameworks**: Pre-built structures that dictate application architecture
- **Libraries**: Collections of functions and classes that provide specific functionality
- **Interfaces**: Contracts that define how components interact

Abstractions, when used appropriately, can be powerful tools for managing complexity. They allow us to think at higher levels without getting bogged down in details.

## Bad Abstractions Lead to Hard-to-Work-With Code

However, not all abstractions are created equal. Poor abstractions can make code significantly more difficult to understand, modify, and debug. Some common issues with bad abstractions include:

### Premature Abstraction

Creating abstractions before fully understanding the problem domain often leads to designs that don't align with actual needs. As the famous quote goes: "Premature optimization is the root of all evil."

### Leaky Abstractions

As Joel Spolsky noted,

> "All non-trivial abstractions, to some degree, are leaky."

When abstractions fail to completely hide their implementation details, developers must understand both the abstraction and its implementation to work effectively.

https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/

### Abstraction Layers Upon Layers

Each layer of abstraction adds cognitive overhead. When systems have too many layers, developers spend more time navigating the abstraction hierarchy than solving actual problems.

### Over-engineering

Creating complex, general-purpose solutions for simple, specific problems adds unnecessary complexity. This often stems from trying to anticipate future requirements that may never materialize.

## Simple Solutions Are Hard

Despite the problems with excessive abstraction, creating simple solutions is surprisingly difficult. As Antoine de Saint-Exupéry famously said:

> "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."

https://www.goodreads.com/quotes/19905-perfection-is-achieved-not-when-there-is-nothing-more-to

Simple solutions require:

1. **Deep understanding** of the problem domain
2. **Restraint** to avoid adding unnecessary features
3. **Clarity** about what's truly essential
4. **Courage** to resist the urge to over-engineer
5. **Time** to iterate and refine

Simple doesn't mean simplistic. Creating truly simple solutions often requires more thought and effort than building complex ones.

## Simplicity Over Abstractions

Rather than defaulting to abstractions, we should strive for simplicity first. Here are some principles to guide this approach:

### Start Concrete, Then Abstract

Begin with concrete implementations that solve specific problems. Only introduce abstractions when you see clear, repeated patterns that would benefit from being generalized.

### Value Readability

Code is read far more often than it's written. Optimize for readability and understandability, even if it means writing more lines of code.

### Embrace YAGNI (You Aren't Gonna Need It)

Don't build features or abstractions based on speculation about future needs. Wait until you have concrete requirements before adding complexity.

### Prefer Composition Over Inheritance

Deep inheritance hierarchies are often difficult to understand and modify. Composition tends to create more flexible, understandable systems.

### Keep Functions and Classes Small and Focused

Each component should do one thing and do it well. This makes code easier to understand, test, and modify.

### Document the Why, Not Just the How

Good documentation explains the reasoning behind design decisions, not just how the code works.

## Conclusion

The tension between simplicity and abstraction is at the heart of software engineering. While abstractions are powerful tools for managing complexity, they come with costs and risks. By prioritizing simplicity and being thoughtful about when and how we introduce abstractions, we can create systems that are more maintainable, adaptable, and enjoyable to work with.

Remember that the goal isn't to eliminate abstractions entirely—it's to use them judiciously, in service of creating systems that solve real problems effectively. The best software strikes a balance: simple where possible, with carefully chosen abstractions where necessary.

As you develop your engineering skills, cultivate the ability to recognize when simplicity is being sacrificed on the altar of unnecessary abstraction. Your future self—and the developers who follow you—will thank you for it.
