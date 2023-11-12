import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

process.env.DATABASE_URL ? "" : console.log("Database URL Not Found ⚠️");

export default {
	schema: "./src/lib/supabase/schema.ts",
	out: "./migrations",
	driver: "pg",
	dbCredentials: {
		connectionString: process.env.DATABASE_URL || "",
	},
} satisfies Config;
