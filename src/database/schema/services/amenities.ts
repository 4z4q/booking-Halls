import { pgTable, uuid, varchar, primaryKey } from "drizzle-orm/pg-core";
import { services } from "./services";
export const serviceAmenities = pgTable("service_amenities", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 100 }).notNull(),
  icon: varchar("icon", { length: 50 }),
});

export const serviceAmenitiesToServices = pgTable(
  "service_amenities_to_services",
  {
    service_id: uuid("service_id")
      .references(() => services.id, { onDelete: "cascade" })
      .notNull(),
    amenity_id: uuid("amenity_id")
      .references(() => serviceAmenities.id, { onDelete: "cascade" })
      .notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.service_id, table.amenity_id] }),
  })
);
