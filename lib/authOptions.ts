import { compare } from "bcryptjs";
import prismadb from "@/lib/prismadb";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const authOptions = {
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID || "",
        clientSecret: process.env.GITHUB_SECRET || "",
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      }),
      CredentialsProvider({
        id: "credentials",
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          if (!credentials?.email || !credentials?.password)
            throw new Error("Email and password required");
  
          const user = await prismadb.user.findUnique({
            where: {
              email: credentials.email,
            },
          });
  
          if (!user || !user.hashedPassword)
            throw new Error("Email does not exist");
  
          const isCorrectPassword = await compare(
            credentials.password,
            user.hashedPassword
          );
  
          if (!isCorrectPassword) throw new Error("Incorrect password");
  
          return user;
        },
      }),
    ],
    adapter: PrismaAdapter(prismadb),
  };

export default authOptions;