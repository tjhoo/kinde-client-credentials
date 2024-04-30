import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default middleware = (req) => withAuth(req);

export const config = {
  matcher: ["/api/payment/:path*"],
};
