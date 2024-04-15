import { query as q } from "faunadb"
import { User } from "next-auth"

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import {fauna} from '../../../services/fauna'
import { signIn } from 'next-auth/react'


export const authOptions = {
  // Configure one or more authentication providers
  
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
      authorization: {
        params: { 
            scope: "read:user" 
        },
      },
    }),
    // ...add more providers here
  ],

  callbacks: {
   
    async signIn({ user }: { user: User }) {
      
      try {
        const { email } = user;
        q.Create(
              q.Collection('users'),
              {data: {email} }
            )

        return true;
      } catch (error) {
        return false;
      }
    }
  } 
}

// q.If(
//   q.Not(
//     q.Exists(
//       q.Ref(q.Collection('users'),user.email)),
//   ),
//   q.Create(
//     q.Collection('users'),
//     {data: {email} }
//   ), 
//   q.Get( // Senão
//     q.Match(
//       q.Index('user_by_email'),
//       q.Casefold(user.email)
//     )
//   )
// )


export default NextAuth(authOptions)