import { pgTable, uuid, varchar, integer, boolean } from "drizzle-orm/pg-core";
import { services } from "./services";

export const serviceImages = pgTable("service_images", {
  id: uuid("id").primaryKey().defaultRandom(),
  service_id: uuid("service_id")
    .references(() => services.id, { onDelete: "cascade" })
    .notNull(),
  url: varchar("url", { length: 512 }).notNull(),
  is_primary: boolean("is_primary").default(false),
  order: integer("order"),
});
