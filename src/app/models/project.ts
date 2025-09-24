//==============================================
// Imports
//==============================================
import { pgTable, text, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema, createUpdateSchema } from "drizzle-arktype";

//==============================================
// Table definitions
//==============================================
export const project = pgTable("project", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: text("name").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at")
		.defaultNow()
		.$onUpdate(() => new Date())
		.notNull(),
})

//==============================================
// ArkType definitions
//==============================================
export const projectInsertSchema = createInsertSchema(project);
export const projectSelectSchema = createSelectSchema(project);
export const projectUpdateSchema = createUpdateSchema(project);
