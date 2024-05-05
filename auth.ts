import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import dbConnect from "./lib/db";
import User from "./lib/models/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {},

      authorize: async (credentials) => {
        dbConnect();

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
});
