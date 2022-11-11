import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProvider({
      type: "credentials",
      credentials: { email: "admin", password: "admin" },
      authorize(credentials, req) {
        const { email, password } = credentials;

        if (email !== "admin" && password !== "admin") {
          return null;
        }

        return "signovan";
      },
    }),
  ],
};
export default NextAuth(authOptions);
