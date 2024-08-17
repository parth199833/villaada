// types.d.ts
import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    password?: string
  }

  interface Session {
    user: {
      email: string
      password?: string
    }
  }

  interface JWT {
    email?: string
    password?: string
  }
}
