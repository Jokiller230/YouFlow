//==============================================
// Imports
//==============================================
import { Hono } from "hono";
import { arktypeValidator } from "@hono/arktype-validator";
import { project, projectInsertSchema, projectSelectSchema } from "@/app/models/project";
import { db } from "@/lib/db";

//==============================================
// Route definitions
//==============================================
export default new Hono()
	.get("/", arktypeValidator("json", projectSelectSchema), (c) => {
		// @Todo: figure out why this doesn't work when supplying JSON body
		const data = c.req.valid("json");
		return c.json(data);
	})
	.get("/list", async (c) => {
		const result = await db.select().from(project);

		return c.json(result);
	})
	.post("/", arktypeValidator("json", projectInsertSchema), async (c) => {
		const data = c.req.valid("json");

		// Insert new project into database
		await db.insert(project).values(data);

		// Respond with data
		return c.json({ success: true, data });
	});
