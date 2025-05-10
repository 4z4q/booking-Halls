import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  integer,
  boolean,
  text,
  decimal,
  date,
  time,
} from "drizzle-orm/pg-core";
import { vendors } from "../core/vendors";
import { serviceCategories } from "./categories";
import { statusEnum } from "../shared/enums/users.enum";

export const services = pgTable("services", {
  id: uuid("id").primaryKey().defaultRandom(),
  vendor_id: uuid("vendor_id")
    .references(() => vendors.id, { onDelete: "cascade" })
    .notNull(),
  category_id: uuid("category_id")
    .references(() => serviceCategories.id, { onDelete: "cascade" })
    .notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  location: varchar("location", { length: 100 }).notNull(),
  address: text("address"),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  min_booking_hours: integer("min_booking_hours").default(1),
  rating_avg: decimal("rating_avg", { precision: 3, scale: 2 }).default("0.0"),
  review_count: integer("review_count").default(0),
  status: statusEnum("status").default("pending"),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at"),
});

export const serviceAvailability = pgTable("service_availability", {
  id: uuid("id").primaryKey().defaultRandom(),
  service_id: uuid("service_id")
    .references(() => services.id, { onDelete: "cascade" })
    .notNull(),
  date: date("date").notNull(),
  start_time: time("start_time").notNull(),
  end_time: time("end_time").notNull(),
  is_available: boolean("is_available").default(true),
});
