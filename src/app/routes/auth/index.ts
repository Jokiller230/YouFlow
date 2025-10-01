//==============================================
// Imports
//==============================================
import { Hono } from "hono";
import { auth } from "@/lib/auth";

//==============================================
// Route definitions
//==============================================
export default new Hono()
	.on(["POST", "GET"], "/*", (c) => auth.handler(c.req.raw));
