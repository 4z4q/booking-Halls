import { pgEnum } from "drizzle-orm/pg-core";

export const paymentMethodEnum = pgEnum("payment_method", ["card" , "cash"]);

export const paymentStatusEnum = pgEnum("payment_status", [
  "pending",
  "paid_online",
  "paid_onsite",
  "cancelled",
  "refunded",
]);