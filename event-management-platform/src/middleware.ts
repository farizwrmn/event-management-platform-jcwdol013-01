import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/events/:id",
    "/api/webhook/clerk",
    "/api/webhook/stripe",
    "/api/uploadthing",
    "/assets/icons/calendar.svg",
    "/assets/images/dotted-pattern.png",
    "/assets/icons/location-grey.svg",
    "/assets/images/footer.png",
    "/assets/images/navbar.png",
    "/Events",
    "/About",
    "/Explore",
    "/Contact",
    "/assets/icons/search.svg",
    "/assets/images/memphis-mini.png",
    "/assets/images/serious.png",
  ],
  ignoredRoutes: [
    "/api/webhook/clerk",
    "/api/webhook/stripe",
    "/api/uploadthing",
  ],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
