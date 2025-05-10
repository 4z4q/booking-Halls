import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  boolean,
  text,
} from "drizzle-orm/pg-core";

export const vendors = pgTable("vendors", {
  id: uuid("id").primaryKey().defaultRandom().unique().notNull(),
  user_id: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  business_name: varchar("business_name", { length: 255 }).notNull(),
  description: text("description"),
  phone_number: varchar("phone_number", { length: 20 }).notNull(),
  city: varchar("city", { length: 100 }),
  national_id_image_url: varchar("national_id_image_url", {
    length: 255,
  }).notNull(),
  license_document_url: varchar("license_document_url", { length: 255 }),
  is_verified: boolean("is_verified").default(false),
  created_at: timestamp("created_at").defaultNow(),
});
