import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
import * as schema from "../../../migrations/schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";

dotenv.config({ path: ".env" });

process.env.DATABASE_URL ? "" : console.log("Database URL Not Found ⚠️");

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });
const db = drizzle(client, { schema });
const migrateDb = async () => {
	try {
		console.log("Migrating Database 🔃");
		await migrate(db, { migrationsFolder: "migrations" });
		console.log("Database Migrated ✅");
	} catch (error) {
		console.log(error);
	}
};
migrateDb();
export default db;
