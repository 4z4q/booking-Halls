import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const serviceCategories = pgTable("service_categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  type: varchar("type", { length: 100 }).notNull(),
});
