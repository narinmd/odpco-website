import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import bcryptjs from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) throw new Error("User not found");

        const valid = await bcryptjs.compare(
          credentials.password,
          user.password,
        );
        if (!valid) throw new Error("Invalid password");

        return user;
      },
    }),
  ],
  session: { strategy: "jwt", maxAge: 7 * 24 * 60 * 60 },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      // token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (token) session.user.id = token.id;
      // session.user.role = token.role;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
