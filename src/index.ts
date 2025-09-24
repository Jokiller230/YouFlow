import { Hono } from "hono";

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
	.route("/api", appRouter);

// Exporting Hono instance
export default {
	fetch: app.fetch,
	port: process.env.PORT ?? 3000,
}
