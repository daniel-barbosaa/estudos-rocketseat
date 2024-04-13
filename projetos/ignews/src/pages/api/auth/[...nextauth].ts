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

      console.log(user)
      const {email} = user

      try {
        await fauna.query(
          q.Create(
            q.Collection('users'),
            {data: {email} }
          )
        )
        return true
      }catch {
        return false
      }
     
    }
  }
}


export default NextAuth(authOptions)