"use server";

import { signIn, signOut } from "../../../auth";

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
        error instanceof Error ? error.message : "خطاء غير متوقع يرجئ اعاده المحاوله"
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
    const response = await fetch(
      `${process.env.BASE_URL_SERVER}/user/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return { success: false, error: data.message || "حدث خطأ أثناء التسجيل" };
    }

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
