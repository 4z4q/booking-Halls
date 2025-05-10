import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  integer,
  text,
  check,
} from "drizzle-orm/pg-core";
import { services } from "../services/services";
import { users } from "../core/users";
import { bookings } from "../bookings/bookings";
import { sql } from "drizzle-orm";

export const reviews = pgTable(
  "reviews",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    service_id: uuid("service_id")
      .references(() => services.id, { onDelete: "cascade" })
      .notNull(),
    user_id: uuid("user_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    booking_id: uuid("booking_id").references(() => bookings.id, {
      onDelete: "cascade",
    }),

    rating: integer("rating").notNull(),
    title: varchar("title", { length: 100 }),
    comment: text("comment"),
    vendor_reply: text("vendor_reply"),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at"),
  },
  (table) => [check("rating", sql`${table.rating} BETWEEN 1 AND 5`)]
);
