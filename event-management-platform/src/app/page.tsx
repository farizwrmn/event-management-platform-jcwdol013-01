import Hero from "./pages/Home/Hero";
import BannerPromo from "./pages/Home/BannerPromo";
import Collection from "@/components/shared/Collection";
import { getAllEvents } from "@/lib/actions/event.action";
import { SearchParamProps } from "@/types";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 4,
  });

  return (
    <>
      <Hero />
      <div className="text-center lg:text-start border-b wrapper mb-10">
        <h3 className="h3-bold">Now Showing</h3>
      </div>
      <Collection
        data={events?.data}
        emptyTitle="No Events Found."
        emptyStateSubtext="Come back later"
        collectionType="All_Events"
        limit={3}
        page={page}
        totalPages={events?.totalPages}
      />
      <BannerPromo />
    </>
  );
}
