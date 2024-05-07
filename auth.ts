import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import dbConnect from "./lib/db";
import User from "./lib/models/user";
import { AdapterUser } from "next-auth/adapters";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {},

      authorize: async (credentials) => {
        await dbConnect();

        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        let user = null;
        try {
          user = await User.findOne({ email: email });

          if (!user) throw new Error("User not found.");

          const match = bcrypt.compare(password, user?.password);

          if (!match) {
            return null;
          }
        } catch (error) {
          console.log(error);
        }

        return user;
      },
    }),
  ],

  callbacks: {
    session: async ({ session }) => {
      const user = await User.findOne({
        email: session.user.email,
      });

      session.user = {
        userName: user.userName,
        email: user.email,
      } as AdapterUser & {
        userName: string;
        email: string;
      };
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
});
