import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { reviews } from "./reviews";

export const reviewImages = pgTable("review_images", {
  id: uuid("id").primaryKey().defaultRandom(),
  review_id: uuid("review_id")
    .references(() => reviews.id, { onDelete: "cascade" })
    .notNull(),
  url: varchar("url", { length: 512 }).notNull(),
});
