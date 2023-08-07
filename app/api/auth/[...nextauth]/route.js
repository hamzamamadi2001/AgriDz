import {authOptions} from "@/helper/authoption"

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };
