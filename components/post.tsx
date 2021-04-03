import React from "react";
import Link from "next/link";
import Date from "../components/date";
type Props = {
  authorImg: string;
  date: Date;
  coverImg: string;
  subtitle: string;
  ids: number;
  title: string;
};
export const Post = ({
  authorImg,
  date,
  coverImg,
  subtitle,
  ids,
  title,
}: Props) => {
  return (
    <Link href="/posts/[ids]" as={`/posts/${ids}`}>
      <div className="md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div className="flex-1  bg-white rounded-t cursor-pointer rounded-b-none overflow-hidden shadow-lg">
          <div className="flex flex-wrap">
            <img
              src={coverImg}
              className="h-64 w-full rounded-t pb-6 transition delay-150 duration-300 ease-in-out"
            />

            <div className=" font-bold text-xl text-gray-900 px-6">{title}</div>
            <p className="text-gray-800 font-serif text-base px-6 mb-5">
              {subtitle.length > 170
                ? subtitle.substr(0, 170) + "..."
                : subtitle}
            </p>
          </div>
        </div>
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
          <div className="flex items-center justify-between">
            <Link href="/about">
              <img
                src={authorImg}
                className="w-8 h-8 rounded-full mr-4 avatar"
              />
            </Link>
            <Date dateString={date} />
          </div>
        </div>
      </div>
    </Link>
  );
};
