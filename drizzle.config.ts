import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: './drizzle',
	schema: ['./src/app/models'],
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
});
