import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/pages/signin", // Redirect to this page if not authenticated
  },
});