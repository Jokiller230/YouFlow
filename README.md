<h1 align="center">
  <br>
  YouFlow! Backend
  <br>
</h1>

<h4 align="center">A fun and intuitive project management tool built on top of <a href="https://hono.dev" target="_blank">Hono</a> and <a href="https://bun.sh" target="_blank">Bun</a>.</h4>

<p align="center">
  <a href="#-requirements">Requirements</a> •
  <a href="#-getting-started">Getting started</a> •
  <a href="#-development-practices">Development practices</a>
</p>

## 📌 Requirements
- Docker
- Bun v1.2+

## 🚀 Getting started
Running the backend requires some database preparations.

### 🌱 Database setup
Our docker compose configuration conviniently provides a postgres database with adminer.

To launch it, simply execute:
```sh
docker compose up -d
```

Once the database is up, we can run our migrations:
```sh
bun run db:migrations:apply
```

### 🔨 Running in development
To start a development instance of YouFlow, simply execute the following:
```sh
bun run dev
```

## 🧑‍💻 Development practices
Learn how to use our stack and tools below.

### 🔥 Validation
Hono has first-class support for validation using its zod-validator package, in combination with zod.

This also plays in nicely with the `hc` client, which may be used in frontend implementations, for seamless interactions with the API.

Examples are available in the official docs: https://hono.dev/docs/concepts/stacks#validation-with-zod

### 🛂 Authentication
We handle authentication through the better-auth package.

Learn how to use it in the official docs:
- https://www.better-auth.com/docs/installation
- https://www.better-auth.com/docs/basic-usage
