---
slug: "composition-over-inheritance"
date: "2025-05-02"
title: "Composition over inheritance"
tagline: "Building flexible systems by favoring object composition over class inheritance"
authorSlug: "andrew-bliss"

image: "https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/development.jpg"
published: true

tags: ["software engineering", "discussion"]
---

## Programming is Hard

Software development is inherently complex. We're constantly trying to model real-world problems and translate them into code that computers can understand and execute. This translation process involves numerous decisions about architecture, data structures, algorithms, and how different components interact with each other.

What makes programming particularly challenging is that we're not just solving technical problems—we're building systems that need to evolve over time, accommodate changing requirements, and be maintained by different people. The code we write today might be read, modified, and extended by someone else years from now.

## Understanding Design of Systems

Good system design is crucial for creating maintainable, scalable, and robust software. A well-designed system:

- Is easy to understand and reason about
- Can be extended without major rewrites
- Has components that can be reused in different contexts
- Minimizes dependencies between unrelated parts
- Adapts well to changing requirements

When designing systems, we often need to model relationships between different entities. Two primary approaches for modeling these relationships are inheritance and composition.

## Choose Wisely What to Abstract

Abstraction is a powerful tool in programming, allowing us to hide implementation details and focus on what's important. However, choosing the right abstractions is critical:

- **Too little abstraction**: Code becomes repetitive and difficult to maintain
- **Too much abstraction**: Systems become overly complex and hard to understand
- **Wrong abstractions**: Can lead to inflexible designs that resist change

The abstractions we choose directly impact how we structure our code, including whether we use inheritance or composition.

## Composition

Composition is a design principle where complex objects are built by combining simpler objects or components. Instead of inheriting functionality, a class contains instances of other classes that implement the desired functionality.

### Benefits of Composition

- **Flexibility**: Components can be swapped at runtime
- **Decoupling**: Components have well-defined interfaces and minimal dependencies
- **Reusability**: Components can be used in multiple contexts
- **Testability**: Components can be tested in isolation

### Example of Composition

Let's look at a simple example of composition in a game development context:

```typescript
// Instead of using inheritance:
class Character {
  health: number;
  position: Vector2;

  move(direction: Vector2) {
    this.position.add(direction);
  }

  takeDamage(amount: number) {
    this.health -= amount;
  }
}

class Player extends Character {
  inventory: Item[];
  experience: number;

  levelUp() {
    this.experience += 100;
  }
}

// We can use composition:
interface Health {
  current: number;
  max: number;
  takeDamage(amount: number): void;
  heal(amount: number): void;
}

interface Position {
  x: number;
  y: number;
  move(direction: Vector2): void;
}

interface Inventory {
  items: Item[];
  addItem(item: Item): void;
  removeItem(item: Item): void;
}

class Player {
  private health: Health;
  private position: Position;
  private inventory: Inventory;
  private experience: number;

  constructor(health: Health, position: Position, inventory: Inventory) {
    this.health = health;
    this.position = position;
    this.inventory = inventory;
    this.experience = 0;
  }

  levelUp() {
    this.experience += 100;
  }
}
```

In this example, instead of inheriting from a base `Character` class, we compose our `Player` class from smaller, focused components. Each component has a single responsibility and can be tested, modified, or replaced independently.

## Inheritance

Inheritance is a mechanism where a class (child) can inherit properties and methods from another class (parent). While inheritance can be useful, it often leads to tight coupling and inflexible designs.

### Problems with Inheritance

- **Fragile Base Class Problem**: Changes to the parent class can break child classes
- **Tight Coupling**: Child classes are tightly coupled to their parent classes
- **Inflexibility**: Inheritance hierarchies are difficult to modify once established
- **Multiple Inheritance Issues**: Some languages don't support multiple inheritance, and even when they do, it can lead to complexity

## When to Use Each

While composition is generally preferred, there are cases where inheritance makes sense:

- **Use inheritance when**:

  - You have a true "is-a" relationship
  - The child class is a specialized version of the parent
  - You need to override behavior while maintaining the same interface
  - You're working with a framework that requires inheritance

- **Use composition when**:
  - You have a "has-a" relationship
  - You need flexibility to change behavior at runtime
  - You want to reuse functionality across different contexts
  - You need to test components in isolation

## Conclusion

The principle of "favor composition over inheritance" is more than just a design guideline—it's a mindset that encourages building flexible, maintainable systems. By breaking down complex objects into smaller, focused components, we create code that is:

- Easier to understand and maintain
- More flexible and adaptable to change
- More testable and reusable
- Less prone to bugs and side effects

Remember that inheritance isn't inherently bad—it's a tool that has its place. The key is to use it judiciously and be aware of its limitations. When in doubt, start with composition and only use inheritance when it truly makes sense for your design.

By embracing composition, we can build systems that are more resilient to change and easier to maintain over time. This approach aligns well with modern software development practices and helps us create code that stands the test of time.
