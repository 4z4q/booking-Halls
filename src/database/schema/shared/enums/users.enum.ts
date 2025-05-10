import { pgEnum } from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum("user_role", [
  "customer",
  "vendor",
  "admin",
]);

export const statusEnum = pgEnum("status", ["pending", "approved", "rejected"]); // use this in dashboard
