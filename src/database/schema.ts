import {
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const ROLE = pgEnum("role", ["client", "vendor", "admin"]);

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom().unique().notNull(),
  firstName: varchar("first_name", { length: 10 }).notNull(),
  lastName: varchar("last_name", { length: 10 }).notNull(),
  email: varchar("email", { length: 50 }).notNull().unique(),
  password: text("password").notNull(),
  role: ROLE("role").notNull().default("client"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
