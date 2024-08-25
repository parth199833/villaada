import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { MongoClient } from "mongodb";

const uri = "mongodb+srv://mustafamandviwala45:S0gq3CrUF3L7k7A8@cluster0.xhy61xa.mongodb.net/"; 
const client = new MongoClient(uri);
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = {
          email:"mustafamandviwala@gmail.com",
          password:"124"
        }
 
        // logic to salt and hash password
       // const pwHash = saltAndHashPassword(credentials.password)
 
        // logic to verify if the user exists
       // user = await getUserFromDb(credentials.email, pwHash)
 
        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.")
        }
 
        // return user object with their profile data
        return user
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        //token.password = user.password;
      }
      console.log("JWT method called", token);
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.email = token.email??"";
        //session.user.password = token.password;
      }
      console.log("Session method called", session);
      return session;
    },
    authorized:async({auth})=>{
      console.log("Authorized callback called");;
      return !!auth;
    }
    // async redirect({ url, baseUrl }) {
    //   console.log("Base url :::", baseUrl);
    //   return baseUrl + "/dashboard";
    // },
  },
})