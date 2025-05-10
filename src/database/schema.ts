import {
  boolean,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const ROLE = pgEnum("role", ["client", "vendor", "admin"]);

export const notificationTypeEnum = pgEnum("notification_type", [
  "booking_update",
  "review",
  "admin_message",
]);

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom().unique().notNull(),
  firstName: varchar("first_name", { length: 10 }).notNull(),
  lastName: varchar("last_name", { length: 10 }).notNull(),
  email: varchar("email", { length: 50 }).notNull().unique(),
  password: text("password").notNull(),
  role: ROLE("role").notNull().default("client"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const notifications = pgTable("notifications", {
  id: uuid("id").primaryKey().defaultRandom(),
  user_id: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  type: notificationTypeEnum("type").notNull(),
  title: varchar("title", { length: 255 }),
  message: text("message").notNull(),
  is_read: boolean("is_read").default(false),
  created_at: timestamp("created_at").defaultNow(),
});
