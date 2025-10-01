//==============================================
// Imports
//==============================================
import { Hono } from "hono";
import { arktypeValidator } from "@hono/arktype-validator";
import { project, projectInsertSchema } from "@/app/models/project";
import { db } from "@/lib/db";
import { type } from "arktype";
import { eq } from "drizzle-orm";

//==============================================
// Route definitions
//==============================================
export default new Hono()
	.get("/:id", arktypeValidator("param", type({ id: "string" })), async (c) => {
		const data = c.req.valid("param");

		const result = await db.select().from(project).where(eq(project.id, parseInt(data.id)));

		if (!result[0]) return c.json({ success: false, message: "INFO::NO_RESULT" });

		return c.json({ success: true, data: result[0] });
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
