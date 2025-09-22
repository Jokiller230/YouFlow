import { Hono } from "hono";
import apiRouter from "./routes/api";

const app = new Hono()
	.route("/api", apiRouter);

export default {
	fetch: app.fetch,
	port: process.env.PORT ?? 3000,
}
