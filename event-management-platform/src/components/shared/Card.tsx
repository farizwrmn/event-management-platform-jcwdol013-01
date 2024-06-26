import { IEvent } from "@/lib/database/models/event.model";
import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DeleteConfirmation } from "./DeleteConfirmation";
type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const isEventCreator = userId === event.organizer._id.toString();
  return (
    <>
      <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-2xl sm:min-h-[438px] m-5">
        <Link
          href={`/events/${event._id}`}
          style={{ backgroundImage: `url(${event.imageUrl})` }}
          className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
        />
        {/* {IS EVENT CREATOR ...} */}
        {isEventCreator && !hidePrice && (
          <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
            <Link href={`/events/${event._id}/update`}>
              <Image
                src="/assets/icons/edit.svg"
                alt="edit"
                width={20}
                height={20}
              />
            </Link>
            <DeleteConfirmation eventId={event._id} />
          </div>
        )}
        <div className="flex min-h-[230px] flex-col gap-3 p-5 sm:gap-4">
          {!hidePrice && (
            <div className="flex gap-2">
              <span className="p-semibold-14 w-fit rounded-full bg-green-100 px-4 py-1 text-green-600 line-clamp-1">
                {event.isFree ? "FREE" : `Rp. ${event.price}`}
              </span>
              <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1">
                {event.category.name}
              </p>
            </div>
          )}
          <p className="p-medium-16 p-medium-18 text-grey-500">
            {formatDateTime(event.startDateTime).dateTime}
          </p>
          <Link href={`/events/${event._id}`}>
            <p className="p-medium-16 sm:p-medium-20 line-clamp-2 flex-1 text-black pb-10">
              {event.title}
            </p>
          </Link>
          <div className="flex-between w-full border-t pt-5">
            <p className="m-auto text-grey-600 text-center">
              {event.organizer.firstName} {event.organizer.lastName}
            </p>
            {hasOrderLink && (
              <Link
                href={`/orders?eventId=${event._id}`}
                className="flex rounded-2xl p-2 bg-gradient-to-l from-cyan-500 to-blue-500 hover:scale-105 hover:text-white duration-200"
              >
                <p className="text-white">Order Details</p>
                <Image
                  src="/assets/icons/arrow.svg"
                  alt="search"
                  width={10}
                  height={10}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
