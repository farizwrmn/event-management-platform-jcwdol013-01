import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import { getAllEvents } from "@/lib/actions/event.action";
import { SearchParamProps } from "@/types";

const Explore = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";
  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 20,
  });
  return (
    <>
      <div className="p-5 text-center lg:text-start border-b flex mb-10 lg:w-[260px] wrapper items-center">
        <h2 className="h2-bold">Explore</h2>
        <CategoryFilter />
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
    </>
  );
};

export default Explore;
