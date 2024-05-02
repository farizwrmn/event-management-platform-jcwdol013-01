import CardBlog from "./pages/Home/EventCard";
import Hero from "./pages/Home/EventCard";
import BannerPromo from "./pages/Home/BannerPromo";
import Collection from "@/components/shared/Collection";
import { getAllEvents } from "@/lib/actions/event.action";

export default async function Home() {
  const events = await getAllEvents({
    query: "",
    category: "",
    page: 1,
    limit: 6,
  });

  return (
    <>
      <Hero />
      <Collection
        data={events?.data}
        emptyTitle="No Events Found."
        emptyStateSubtext="Come back later"
        collectionType="All_Events"
        limit={6}
        page={1}
        totalPages={2}
      />

      <CardBlog />
      <BannerPromo />
    </>
  );
}
