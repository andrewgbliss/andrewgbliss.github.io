---
slug: use-uids-over-auto-increment
date: "2025-07-04"
title: Use UIDs Over Auto Increment
tagline: >-
  Auto-increment IDs expose your data and create security risks. Use UIDs like
  Cuid2 for better security, performance, and scalability.
authorSlug: andrew-bliss
image: >-
  https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/desk-top.webp
published: true
tags:
  - node
  - security
  - unique ids
featured: false
rant: false
---

Auto-increment IDs have been a staple in database design for decades, but they come with significant drawbacks that make them unsuitable for modern applications. In this article, we'll explore why you should use Unique Identifiers (UIDs) like Cuid2 instead of auto-increment IDs, and how this choice impacts security, performance, and scalability.

## The Problem with Auto-Increment IDs

### 1. **Security Vulnerabilities**

Auto-increment IDs create predictable patterns that attackers can exploit:

- **Enumeration attacks**: Attackers can easily guess valid IDs by incrementing numbers
- **Data exposure**: Sequential IDs reveal information about your data volume and growth
- **Resource enumeration**: Attackers can discover valid resources by trying sequential IDs
- **Business intelligence leakage**: Competitors can estimate your user base and growth

```javascript
// BAD: Predictable auto-increment IDs
const user = await db.users.findByPk(12345); // Easy to guess
const nextUser = await db.users.findByPk(12346); // Predictable pattern
```

### 2. **Scalability Issues**

Auto-increment IDs create bottlenecks in distributed systems:

- **Single point of failure**: All ID generation goes through one source
- **Replication conflicts**: Multiple databases can't generate unique sequential IDs
- **Sharding complexity**: Sequential IDs make horizontal scaling difficult
- **Performance bottlenecks**: ID generation becomes a contention point

### 3. **Data Migration Challenges**

When merging databases or migrating data:

- **ID conflicts**: Different systems may have overlapping auto-increment ranges
- **Foreign key issues**: Referential integrity breaks when IDs change
- **Complex migrations**: Requires careful coordination and downtime

## The Solution: Unique Identifiers (UIDs)

### What are UIDs?

UIDs are non-sequential, globally unique identifiers that solve the problems of auto-increment IDs. Popular options include:

- **Cuid2**: Modern, secure, and performant (recommended)
- **UUID v4**: Widely supported but longer
- **Nano ID**: Compact and URL-safe
- **ULID**: Time-ordered and sortable

### Why Cuid2 is the Best Choice

Cuid2 offers the best balance of security, performance, and usability:

```javascript
import { createId } from "@paralleldrive/cuid2";

const userId = createId(); // e.g., "clh3q8q8q8q8q8q8q8q8q8"
const postId = createId(); // e.g., "clh3q8q8q8q8q8q8q8q8q9"
```

**Benefits of Cuid2:**

- **Cryptographically secure**: Impossible to predict or enumerate
- **Collision resistant**: Extremely low probability of duplicates
- **URL-safe**: No special characters that need encoding
- **Sortable**: Can be sorted lexicographically
- **Compact**: Shorter than UUIDs while maintaining security

## Implementation Examples

### Database Schema with Cuid2

```sql
-- PostgreSQL example
CREATE TABLE users (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Or with a custom function for Cuid2
CREATE OR REPLACE FUNCTION generate_cuid2()
RETURNS TEXT AS $$
BEGIN
  RETURN 'clh' || substr(md5(random()::text || clock_timestamp()::text), 1, 25);
END;
$$ LANGUAGE plpgsql;

CREATE TABLE posts (
  id TEXT PRIMARY KEY DEFAULT generate_cuid2(),
  title TEXT NOT NULL,
  user_id TEXT REFERENCES users(id)
);
```

### Node.js/TypeScript Implementation

```typescript
import { createId } from "@paralleldrive/cuid2";
import { z } from "zod";

// Schema validation
const UserSchema = z.object({
  id: z.string().cuid2(),
  email: z.string().email(),
  name: z.string().min(1),
});

// Database model
interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

// Service layer
class UserService {
  async createUser(data: Omit<User, "id" | "createdAt">): Promise<User> {
    const user: User = {
      id: createId(),
      ...data,
      createdAt: new Date(),
    };

    // Save to database
    await db.users.create(user);
    return user;
  }

  async getUserById(id: string): Promise<User | null> {
    // Validate ID format
    if (!UserSchema.shape.id.safeParse(id).success) {
      return null;
    }

    return await db.users.findByPk(id);
  }
}
```

### API Endpoints

```typescript
// Express.js example
app.get("/api/users/:id", async (req, res) => {
  const { id } = req.params;

  // Validate ID format before database query
  if (!UserSchema.shape.id.safeParse(id).success) {
    return res.status(400).json({ error: "Invalid user ID format" });
  }

  const user = await userService.getUserById(id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});
```

## Security Benefits

### 1. **Prevents Enumeration Attacks**

```javascript
// Attackers can't enumerate your data
const validIds = ["clh3q8q8q8q8q8q8q8q8q8", "clh3q8q8q8q8q8q8q8q8q9"];
// No pattern to follow - each ID is cryptographically random
```

### 2. **Hides Business Intelligence**

```javascript
// No information about data volume or growth rate
const userId = createId(); // Could be user #1 or user #1,000,000
```

### 3. **Secure Resource Access**

```javascript
// Validate ID format before database queries
function isValidId(id: string): boolean {
  return /^[a-z][a-z0-9]{24}$/.test(id);
}

// Prevents SQL injection and reduces database load
if (!isValidId(userId)) {
  return res.status(400).json({ error: 'Invalid ID format' });
}
```

## Performance Benefits

### 1. **Distributed Generation**

```javascript
// Multiple servers can generate IDs without coordination
const server1Id = createId(); // Generated on server 1
const server2Id = createId(); // Generated on server 2
// No conflicts, no coordination needed
```

### 2. **Better Indexing**

```javascript
// Cuid2 IDs are sortable and work well with B-tree indexes
// No need for special indexing strategies
// Example: Using Cuid2 with indexing in a PostgreSQL table

-- Create a table with a Cuid2-based UID as the primary key and indexed
CREATE TABLE users (
  uid TEXT PRIMARY KEY, -- Cuid2 string, e.g. 'clh3q8q8q8q8q8q8q8q8q8'
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Add a B-tree index on the UID column (optional, since PRIMARY KEY is indexed)
CREATE INDEX idx_users_uid ON users(uid);

-- Insert a user with a Cuid2 UID
INSERT INTO users (uid, email) VALUES ('clh3q8q8q8q8q8q8q8q8q8', 'alice@example.com');

-- Query by UID (uses the index for fast lookup)
SELECT * FROM users WHERE uid = 'clh3q8q8q8q8q8q8q8q8q8';
```

### 3. **Reduced Contention**

```javascript
// UIDs can be generated independently
import { createId } from "@paralleldrive/cuid2";
const uid = createId(); // No coordination needed

// Multiple instances can generate IDs simultaneously
const [id1, id2, id3] = await Promise.all([
  createId(), // Instance 1
  createId(), // Instance 2
  createId(), // Instance 3
]);
// All IDs are unique and generated without blocking each other
```

## Migration Strategy

### 1. **Gradual Migration**

```sql
-- Add new UID column alongside existing auto-increment
ALTER TABLE users ADD COLUMN uid TEXT UNIQUE;

-- Generate UIDs for existing records
UPDATE users SET uid = generate_cuid2() WHERE uid IS NULL;

-- Update foreign key references gradually
ALTER TABLE posts ADD COLUMN user_uid TEXT REFERENCES users(uid);
```

### 2. **Dual-Write Strategy**

```typescript
// Write to both old and new ID systems during transition
async function createUser(data: UserData) {
  const user = {
    id: autoIncrementId, // Legacy ID
    uid: createId(), // New UID
    ...data,
  };

  await db.users.create(user);
  return user;
}
```

### 3. **API Versioning**

```typescript
// Support both ID formats during transition
app.get("/api/v1/users/:id", async (req, res) => {
  const { id } = req.params;

  // Try UID first, fall back to legacy ID
  let user = await db.users.findOne({ where: { uid: id } });
  if (!user) {
    user = await db.users.findByPk(id);
  }

  res.json(user);
});
```

## Best Practices

### 1. **Validate Early**

```typescript
// Validate ID format before any database operations
const validateId = (id: string) => {
  if (!/^[a-z][a-z0-9]{24}$/.test(id)) {
    throw new Error("Invalid ID format");
  }
};
```

### 2. **Use Type Safety**

```typescript
// Create branded types for different entities
type UserId = string & { readonly brand: unique symbol };
type PostId = string & { readonly brand: unique symbol };

const createUserId = (): UserId => createId() as UserId;
const createPostId = (): PostId => createId() as PostId;
```

### 3. **Consistent Naming**

```typescript
// Use consistent naming conventions
interface User {
  id: string; // UID
  email: string;
  createdAt: Date;
}

interface Post {
  id: string; // UID
  userId: string; // Reference to User.id
  title: string;
}
```

## Common Mistakes to Avoid

### 1. **Don't Mix ID Types**

```javascript
// BAD: Mixing auto-increment and UIDs
const user = { id: 12345, uid: "clh3q8q8q8q8q8q8q8q8q8" };

// GOOD: Use UIDs consistently
const user = { id: "clh3q8q8q8q8q8q8q8q8q8" };
```

### 2. **Don't Expose Internal IDs**

```javascript
// BAD: Exposing auto-increment IDs in URLs
app.get('/users/12345', ...);

// GOOD: Use UIDs in public interfaces
app.get('/users/clh3q8q8q8q8q8q8q8q8q8', ...);
```

### 3. **Don't Skip Validation**

```javascript
// BAD: No validation
const user = await db.users.findByPk(req.params.id);

// GOOD: Validate format first
if (!isValidId(req.params.id)) {
  return res.status(400).json({ error: "Invalid ID" });
}
const user = await db.users.findByPk(req.params.id);
```

## Conclusion

Auto-increment IDs are a relic of simpler times when security and scalability weren't primary concerns. Modern applications require the security, performance, and scalability benefits that UIDs provide.

By adopting Cuid2 or similar UID systems, you'll:

- **Enhance security** by preventing enumeration attacks
- **Improve scalability** with distributed ID generation
- **Simplify migrations** and data management
- **Future-proof** your application architecture

The small learning curve of switching to UIDs is far outweighed by the long-term benefits. Start your migration today and enjoy a more secure, scalable application architecture.

## Resources

- [Cuid2 Documentation](https://github.com/paralleldrive/cuid2)
- [UUID vs Cuid2 Comparison](https://github.com/paralleldrive/cuid2#comparison)
- [Security Best Practices](https://owasp.org/www-project-top-ten/)

Remember: The best time to migrate to UIDs was yesterday. The second best time is now.
