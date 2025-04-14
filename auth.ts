import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log("credentials", credentials);

        try {
          const response = await fetch(
            `${process.env.BASE_URL_SERVER}/user/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            }
          );

          const data = await response.json();

          console.log(data);

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("Backend error:", {
              status: response.status,
              statusText: response.statusText,
              errorData,
            });
            throw new Error(errorData.message || "Authentication failed");
          }

          return {
            // id: data.user._id,
            name: `${data.user.firstName} ${data.user.lastName}`,
            email: data.user.email,
            token: data.token,
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
    signIn: "/sign-in",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.accessToken = user.token; // خزن التوكن القادم من backend هنا
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        // session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
      }

      // نضيف التوكن إلى session
      session.accessToken = token.accessToken as string;

      return session;
    },
  },
});
