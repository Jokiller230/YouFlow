import { Hono } from "hono";
import { auth } from "@/lib/auth";

export default new Hono()
	.on(["POST", "GET"], "/*", (c) => auth.handler(c.req.raw));
