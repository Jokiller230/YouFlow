import { Hono } from "hono";
import { auth } from "@/lib/auth";

//==============================================
// Core routing
//==============================================

// Routers
import appRouter from "./app/routes";

//==============================================
// Hono configuration
//==============================================

// Hono App definition
const app = new Hono<{
	Variables: {
		user: typeof auth.$Infer.Session.user | null;
		session: typeof auth.$Infer.Session.session | null;
	}
}>()
	.route("/api", appRouter);

// Configuring session/user management
app.use("*", async (c, next) => {
	const session = await auth.api.getSession({ headers: c.req.raw.headers });

	if (!session) {
		c.set("user", null);
		c.set("session", null);
		return next();
	}

	c.set("user", session.user);
	c.set("session", session.session);
	return next();
});

// Exporting Hono instance
export default {
	fetch: app.fetch,
	port: process.env.PORT ?? 3000,
}
