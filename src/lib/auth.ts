import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/db";

export const auth = betterAuth({
	// Configure the database adapter
	database: drizzleAdapter(db, {
		provider: "pg",
	}),

	// Enable email/password authentication
	emailAndPassword: {
		enabled: true,
	},
});
