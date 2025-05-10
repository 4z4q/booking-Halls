import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  decimal,
  date,
  time,
} from "drizzle-orm/pg-core";
import { users } from "../core/users";
import { services } from "../services/services";
import { bookingStatusEnum } from "../shared/enums/booking.enums";
import { paymentMethodEnum, paymentStatusEnum } from "../shared/enums/service.enums";

export const bookings = pgTable("bookings", {
  id: uuid("id").primaryKey().defaultRandom(),
  customer_id: uuid("customer_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  service_id: uuid("service_id")
    .references(() => services.id, { onDelete: "cascade" })
    .notNull(),
  date: date("date").notNull(),
  start_time: time("start_time").notNull(),
  end_time: time("end_time").notNull(),
  status: bookingStatusEnum("status").default("pending"),
  total_price: decimal("total_price", { precision: 10, scale: 2 }).notNull(),
  payment_status: paymentStatusEnum("payment_status").default("pending"),
  payment_method: paymentMethodEnum("payment_method").notNull(),
  payment_date: timestamp("payment_date"),
  payment_receipt: varchar("payment_receipt", { length: 255 }),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at"),
});
