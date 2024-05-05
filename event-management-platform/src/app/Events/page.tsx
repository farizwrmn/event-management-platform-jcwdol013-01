import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { getAllEvents } from "@/lib/actions/event.action";
import { SearchParamProps } from "@/types";

const Events = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 8,
  });
  return (
    <div>
      <div className="flex flex-col flex-center gap-5 md:flex-row p-10">
        <Search />
        {/* <CategoryFilter /> */}
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
    </div>
  );
};

export default Events;
