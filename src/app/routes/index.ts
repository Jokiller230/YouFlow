import { Hono } from "hono";
import authRouter from "./auth";

export default new Hono()
	.route("/auth", authRouter);
