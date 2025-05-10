"use server";

import { db } from "@/database/drizzle";
import { signIn, signOut } from "../../auth";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { hash } from "bcryptjs";

const SALT_ROUNDS = 10;

/**
 * Signs in a user with their credentials (email and password).
 *
 * @param {Object} params - The credentials for the user.
 * @param {string} params.email - The user's email.
 * @param {string} params.password - The user's password.
 * @param {string} [params.callbackUrl] - Optional callback URL to redirect to after login.
 *
 * @returns {Promise<{ success: boolean; error?: string }>} The result of the sign-in attempt.
 */
export const signInWithCredentials = async (
  params: Pick<AuthCredentials, "email" | "password"> & { callbackUrl?: string }
) => {
  const { email, password, callbackUrl } = params;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: callbackUrl || "/",
    });

    if (result?.error) return { success: false, error: result.error };

    return { success: true };
  } catch (error: Error | unknown) {
    console.log(
      `Error creating user: ${
        error instanceof Error
          ? error.message
          : "Unexpected error, please try again"
      }`
    );
  }
  return { success: false, error: "Unexpected error, please try again" };
};

/**
 * Registers a new user by inserting their details into the database and signing them in.
 *
 * @param {AuthCredentials} params - The user's credentials including first name, last name, email, and password.
 *
 * @returns {Promise<{ success: boolean; error?: string }>} The result of the sign-up attempt.
 */
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
        error: "Email is already in use",
      };
    }

    const hashPassword = await hash(password, SALT_ROUNDS);

    await db.insert(users).values({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });

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
      error: "Server connection failed, please try again later",
    };
  }
};

/**
 * Logs out the currently authenticated user.
 *
 * @returns {Promise<void>} A promise indicating the completion of the sign-out operation.
 */
export const logoutUser = async () => {
  await signOut();
};
