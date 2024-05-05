import Hero from "./pages/Home/Hero";
import BannerPromo from "./pages/Home/BannerPromo";
import Collection from "@/components/shared/Collection";
import { getAllEvents } from "@/lib/actions/event.action";
import { SearchParamProps } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      <div className="p-5 text-center lg:text-start border-b">
        <h3 className="h3-bold">Now Showing</h3>
      </div>
      <Collection
        data={events?.data}
        emptyTitle="No Events Found."
        emptyStateSubtext="Come back later"
        collectionType="All_Events"
        limit={4}
        page={1}
        totalPages={1}
      />
      <div className="text-center p-10 border-b">
        <Button variant="outline" className=" rounded-full" size="lg">
          <Link href="/Events">Show more..</Link>
        </Button>
      </div>
      <BannerPromo />
    </>
  );
}
