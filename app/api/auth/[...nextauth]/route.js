import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../../helper/mongo"



//  const client_id='586371651783-6emvrgpkcghil5kn99vafvtt2piraoeq.apps.googleusercontent.com'
// const client_secret='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'
export const authOptions = {
    
    secret: process.env.NEXTAUTH_SECRET,
    adapter:MongoDBAdapter(clientPromise,{databaseName:"HamzaTest"}),
    session: {
        strategy: "jwt",
        jwt: true,
        maxAge: 365 * 24 * 60 * 60 // the session will last 30 days
    },
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
        GoogleProvider({

            clientId: process.env.client_id,
            clientSecret: process.env.client_secret
        })


    ]






}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };
