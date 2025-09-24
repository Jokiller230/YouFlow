import { Hono } from "hono";
import authRouter from "./auth";
import projectRouter from "./project";

export default new Hono()
	.route("/auth", authRouter)
	.route("/project", projectRouter);
