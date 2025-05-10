import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";
import { userRoleEnum } from "../shared/enums/users.enum";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom().unique().notNull(),
  name: varchar("name", { length: 100 }),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  role: userRoleEnum("role").default("customer"),
  created_at: timestamp("created_at").defaultNow(),
});
