import { query as q } from "faunadb"
import { User } from "next-auth"

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import {fauna} from '../../../services/fauna'



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
      console.log(user)

      try {

        const { email } = user;

        if (!user.email) {
          throw new Error("O email do usuário não está disponível.");
        }

        const userEmail = user.email.toLowerCase();

        const userExists = await fauna.query(
          q.Exists(
            q.Match(
              q.Index('user_by_email'),
              userEmail
            )
          )
        )

        if (!userExists) {
          await fauna.query(
            q.Create(
              q.Collection('users'),
              { data: { email: userEmail } }
            )
          );
        }

        return true
      } catch {
        return false
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