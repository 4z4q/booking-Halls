import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

export const getUserByEmail = async (email: string) => {
  const result = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  return result[0] || null;
};

function convertToSubcurrency(amount: number, factor = 100) {
  return Math.round(amount * factor);
}

export default convertToSubcurrency;

export const getCategoryNameInArabic = (category: string): string => {
  switch (category) {
    case "halls":
      return "قاعات المناسبات";
    case "decor":
      return "خدمات الديكور";
    case "artists":
      return "الفنانين والزفات";
    case "clothing":
      return "فساتين وأزياء المناسبات";
    case "photography":
      return "خدمات التصوير";
    default:
      return "خدمات المناسبات";
  }
};
