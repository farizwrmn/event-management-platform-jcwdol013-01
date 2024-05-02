import Hero from "./pages/Home/Hero";
import BannerPromo from "./pages/Home/BannerPromo";
import Collection from "@/components/shared/Collection";
import { getAllEvents } from "@/lib/actions/event.action";
import EventCard from "./pages/Home/EventCard";

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

      <EventCard />
      <BannerPromo />
    </>
  );
}
