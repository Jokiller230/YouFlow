import { Hono } from "hono";
import { readdirSync } from "node:fs";

//==============================================
// Extension routing
//==============================================

// Create combined extension router
const extensionsRouter = new Hono();

// Load extensions and map routes
// const extensionDirs = readdirSync("src/extensions");

//==============================================
// Core routing
//==============================================

// Routers
import appRouter from "./app/routes";

//==============================================
// Hono configuration
//==============================================

// Hono App definition
const app = new Hono()
	.route("/api", appRouter)
	.route("/extensions", extensionsRouter);

// Exporting Hono instance
export default {
	fetch: app.fetch,
	port: process.env.PORT ?? 3000,
}
