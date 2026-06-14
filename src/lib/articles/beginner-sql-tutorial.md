---
slug: "beginner-sql-tutorial"
date: "2019-04-01"
title: "Beginner SQL Tutorial"
tagline: "In this article we will go over how to use SQL."
authorSlug: "andrew-bliss"
image: "https://storage.googleapis.com/blisscoder-0-public/blisscodedev/img/desk-top.webp"
published: true
tags: ["sql", "docker"]
---

SQL (pronounced “ess-que-el”) stands for Structured Query Language.
SQL commands are used to communicate with a database.

Databases are a collection of tables that store client information. A client could
have data stored about their account, users, transactions, and we
could write SQL queries to ask certain questions about their data.
Such as, how many new users do I have this month, what is my burn,
churn rate versus my new growth?

So let’s lay the groundwork so that we can start asking these queries.

- Plan out our queries
- Install the database service
- Create the database and schema
- Seed the database with test accounts
- Learn basic SQL commands
- Write our first query

## Plan out our queries

For our database we want accounts, users, and a transactions table.

- Basic-Show me all accounts
- Advanced-Show me users by month per account

## Install the database service

We will be using docker to create our database service so we can build
our data structures and start storing the data needed to ask our
questions.

Go to this link to install docker for windows.

[Install Docker Desktop for Windows](https://docs.docker.com/docker-for-windows/install/)

[https://docs.docker.com/docker-for-windows/install/](https://docs.docker.com/docker-for-windows/install/)

Create a docker-compose.yml file.

```yaml
version: ‘3’
services:
 postgres:
 image: postgres
 ports:
 — “5432:5432”
 env_file:
 — .env
 volumes:
 — ./sql:/sql
 — postgres-data:/var/lib/postgresql/data
 restart: always
volumes:
 postgres-data:
```

Create an environment file .env

```
POSTGRES_HOST=postgres
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_PORT=5432
```

Start the services by running the following command:

```
docker-compose up
```

## Create the database and schema

Create a file called ./sql/init.sql. We will define our tables to
store our data.

```sql
CREATE TABLE IF NOT EXISTS accounts (
 id SERIAL,
 name VARCHAR(255),
 “createdAt” DATE,
 “updatedAt” DATE,
 “deletedAt” DATE,
 PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS users (
 id SERIAL,
 “accountId” INTEGER REFERENCES accounts(id) ON DELETE CASCADE ON
UPDATE CASCADE,
 “firstName” VARCHAR(255),
 “lastName” VARCHAR(255),
 “createdAt” TIMESTAMP,
 “updatedAt” TIMESTAMP,
 “deletedAt” TIMESTAMP,
 PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS transactions (
 id SERIAL,
 “accountId” INTEGER REFERENCES accounts(id) ON DELETE CASCADE ON
UPDATE CASCADE,
 “userId” INTEGER REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
 “amount” FLOAT,
 “createdAt” TIMESTAMP,
 “updatedAt” TIMESTAMP,
 “deletedAt” TIMESTAMP,
 PRIMARY KEY (id)
);
```

Now run the command through docker

```
docker exec -it sql_postgres_1 psql -U postgres -f ./sql/init.sql
```

## Seed the database with test accounts

Create a file called ./sql/seed.sql

```sql
INSERT INTO accounts (name, “createdAt”, “updatedAt”) VALUES
(‘NodeJs’, ‘2019–01–01’, ‘2019–01–01’),
(‘Postgres’, ‘2019–02–01’, ‘2019–01–01’),
(‘MySQL’, ‘2019–03–01’, ‘2019–01–01’),
(‘Oracle’, ‘2019–03–01’, ‘2019–01–01’),
(‘Jave’, ‘2019–04–01’, ‘2019–01–01’),
(‘PHP’, ‘2019–05–01’, ‘2019–01–01’),
(‘Docker’, ‘2019–05–01’, ‘2019–01–01’),
(‘Gitlab’, ‘2019–05–01’, ‘2019–01–01’),
(‘Zoho’, ‘2019–05–01’, ‘2019–01–01’),
(‘Quickbooks’, ‘2019–06–01’, ‘2019–01–01’);
INSERT INTO users (“accountId”, “firstName”, “lastName”, “createdAt”,
“updatedAt”) VALUES
(1, ‘John’, ‘Johnson’, ‘2019–01–01’, ‘2019–11–01’),
(1, ‘Jack’, ‘Johnson’, ‘2019–02–01’, ‘2019–10–01’),
(2, ‘Rob’, ‘Johnson’, ‘2019–02–01’, ‘2019–05–01’),
(2, ‘Robby’, ‘Johnson’, ‘2019–02–01’, ‘2019–06–01’),
(2, ‘Mac’, ‘Johnson’, ‘2019–03–01’, ‘2019–05–01’),
(3, ‘Michael’, ‘Johnson’, ‘2019–03–01’, ‘2019–04–01’),
(4, ‘Mock’, ‘Johnson’, ‘2019–04–01’, ‘2019–02–01’),
(4, ‘Fib’, ‘Johnson’, ‘2019–04–01’, ‘2019–10–01’),
(5, ‘Kal’, ‘Johnson’, ‘2019–04–01’, ‘2019–12–01’),
(6, ‘Mil’, ‘Johnson’, ‘2019–05–01’, ‘2019–11–01’),
(7, ‘Stohn’, ‘Johnson’, ‘2019–06–01’, ‘2019–04–01’),
(8, ‘Jock’, ‘Johnson’, ‘2019–07–01’, ‘2019–02–01’),
(9, ‘Sack’, ‘Johnson’, ‘2019–08–01’, ‘2019–03–01’),(9, ‘Pack’,
‘Johnson’, ‘2019–09–01’, ‘2019–04–01’);
INSERT INTO transactions (“accountId”, “userId”, “amount”,
“createdAt”, “updatedAt”) VALUES
(1, 1, 106.01, ‘2019–01–01’, ‘2019–11–01’),
(1, 2, 98.01, ‘2019–02–01’, ‘2019–10–01’),
(2, 3, 56.01, ‘2019–02–01’, ‘2019–05–01’),
(2, 4, 10.01, ‘2019–02–01’, ‘2019–06–01’),
(2, 4, 23.01, ‘2019–03–01’, ‘2019–05–01’),
(3, 6, 78.01, ‘2019–03–01’, ‘2019–04–01’),
(4, 7, 10.01, ‘2019–04–01’, ‘2019–02–01’),
(4, 8, 45.01, ‘2019–04–01’, ‘2019–10–01’),
(5, 9, 56.01, ‘2019–04–01’, ‘2019–12–01’),
(6, 10, 78.01, ‘2019–05–01’, ‘2019–11–01’),
(7, 11, 45.01, ‘2019–06–01’, ‘2019–04–01’),
(8, 12, 456.01, ‘2019–07–01’, ‘2019–02–01’),
(9, 13, 67.01, ‘2019–08–01’, ‘2019–03–01’),
(9, 13, 45.01, ‘2019–09–01’, ‘2019–04–01’);
```

Now run the command through docker

```
docker exec -it sql_postgres_1 psql -U postgres -f ./sql/seed.sql
```

## Learn basic SQL commands

Now that we have laid the groundwork for our database we can start
asking it some basic questions.

To be able to retrieve that data we want back out of the database we
can give the database commands known as SQL.

To begin we will start with our first question. Show me all the accounts.

```sql
SELECT * FROM accounts;
```

The keyword SELECT is telling the database what columns we want to
return. The \* says that we want all the columns. The keyword FROM says
that whatever comes after is the table we will pull data from. The
identifier accounts is saying what table we want to pull from.

Create a file called ./sql/all-accounts.sql

```sql
SELECT * FROM accounts;
```

To run this command run the following docker command

```
docker exec -it sql_postgres_1 psql -U postgres -f ./sql/all-accounts.sql
```

Let’s modify this example to include an aggregation function.

```sql
SELECT COUNT(*) FROM accounts;
```

Now instead of all the data returning back we just get a number of how
many rows it counted.

Now let’s create a file called ./sql/new-users-by-month.sql

```sql
SELECT
 a.name as “accountName”,
 to_char(u.”createdAt”, ‘YYYY-MM’) as “date”,
 COUNT(u.id) as “newUserCount”
FROM users u
 INNER JOIN accounts a ON a.id = u.”accountId”
GROUP BY a.id, to_char(u.”createdAt”, ‘YYYY-MM’);
```

We want to select the account name, the month / year when the user was
created, and a count of how many users were created in that month.

In order to get the account name we must write an INNER JOIN and join
the account “id” column to the users “accountId” column. This will
ensure the correct user is connected to the correct account.

Then we finally write a GROUP BY and group all the data by account id,
and year and month. Doing this is will correctly show in the COUNT
function how many new users were created.

To run this query run this command:

```
docker exec -it sql_postgres_1 psql -U postgres -f ./sql/new-users-by-month.sql
```

## Conclusion

We have created our database services, seeded with data and ready to
write queries.

We learned some basic SQL keywords such as SELECT, FROM, COUNT, GROUP BY.

We learned how to run our services with docker and how to run SQL files.

Next in the intermediate SQL tutorial we will learn more about
conditions and joins.
