"use server";

import { db } from "@/database/drizzle";
import { signIn, signOut } from "../../../auth";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { hash } from "bcryptjs";

const SALT_ROUNDS = 10;

export const signInWithCredentials = async (
  params: Pick<AuthCredentials, "email" | "password">
) => {
  const { email, password } = params;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) return { success: false, error: result.error };

    return { success: true };
  } catch (error: Error | unknown) {
    console.log(
      `Error creating user: ${
        error instanceof Error
          ? error.message
          : "خطاء غير متوقع يرجئ اعاده المحاوله"
      }`
    );
  }
  return { success: false, error: "خطاء غير متوقع يرجئ اعاده المحاوله" };
};

export const signUp = async ({
  firstName,
  lastName,
  email,
  password,
}: AuthCredentials): Promise<{ success: boolean; error?: string }> => {
  try {
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    if (existingUser.length) {
      return {
        success: false,
        error: "البريد الالكتروني مستخدم من قبل",
      };
    }

    const hashPassword = await hash(password, SALT_ROUNDS);

    await db.insert(users).values({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });

    // This will be called after the user is created and redirects to the home page page
    await signInWithCredentials({ email, password });

    return { success: true };
  } catch (error) {
    console.error(
      `Error creating user: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
    return {
      success: false,
      error: "فشل الاتصال بالخادم، حاول مرة أخرى لاحقاً",
    };
  }
};

export const logoutUser = async () => {
  await signOut();
};
