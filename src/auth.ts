import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { useRaf } from "react-use";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        console.log("Credentdial called",credentials);
        let response = await fetch(`http://localhost:3000/api/users`,{
          method:"POST",
          headers:{
            "content-type":"application/json",
          },
          body:JSON.stringify({
            email:credentials.username,
            password:credentials.password
          })
        });
        const user = await response.json();
        console.log("USers from api",user);
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