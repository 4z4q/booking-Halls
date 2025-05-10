import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

/**
 * Authentication handler configuration using NextAuth for user authentication.
 *
 * @module Auth
 * @description This handler provides authentication functionality using credentials (email and password).
 * It includes user sign-in, sign-out, JWT session management, and custom callback handling.
 */
export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    /**
     * Session strategy using JWT for storing the session information.
     */
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      /**
       * Authorizes the user based on the provided credentials (email and password).
       *
       * @param {Object} credentials - The user's credentials for authentication.
       * @param {string} credentials.email - The user's email address.
       * @param {string} credentials.password - The user's password.
       * @returns {Promise<User | null>} The user object if authentication succeeds, or null if it fails.
       *
       * @throws {Error} Will throw an error if there's an issue during the authorization process.
       */
      async authorize(credentials) {
        console.log("credentials", credentials);

        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          const { email, password } = credentials;

          const user = await db
            .select()
            .from(users)
            .where(eq(users.email, email.toString()));

          if (!user.length) return null;

          const isPasswordValid = await compare(
            password.toString(),
            user[0].password
          );

          if (!isPasswordValid) {
            return null;
          }

          return {
            id: user[0].id,
            name: `${user[0].firstName} ${user[0].lastName}`,
            email: user[0].email,
            role: user[0].role,
          } as User;
        } catch (error) {
          console.error("Detailed error:", {
            message: error instanceof Error ? error.message : "Unknown error",
            stack: error instanceof Error ? error.stack : undefined,
          });
        }

        return null;
      },
    }),
  ],

  secret: process.env.AUTH_SECRET,

  pages: {
    /**
     * Custom sign-in page.
     */
    signIn: "/sign-in",
  },

  callbacks: {
    /**
     * JWT callback to persist user data in the JWT token.
     *
     * @param {Object} param - The parameter containing JWT and user data.
     * @param {Object} param.token - The JWT token object.
     * @param {User} param.user - The authenticated user object.
     * @returns {Object} The updated JWT token.
     */
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
      }

      return token;
    },

    /**
     * Session callback to map JWT token data to session object.
     *
     * @param {Object} param - The parameter containing session and token data.
     * @param {Object} param.session - The session object.
     * @param {Object} param.token - The JWT token.
     * @returns {Object} The updated session object with user data.
     */
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
});
