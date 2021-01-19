import React from "react";
import Link from "next/link";
export const Post = ({
  authorImg,
  name,
  date,
  coverImg,
  text,
  slug,
  title,
}) => {
  return (
    <Link href="/posts/[slug]" as={`/posts/${slug}`}>
      <div className="md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
          <div className="flex flex-wrap no-underline hover:no-underline">
            <img src={coverImg} className="h-64 w-full rounded-t pb-6" />

            <div className=" font-bold text-xl text-gray-900 px-6">{title}</div>
            <p className="text-gray-800 font-serif text-base px-6 mb-5">
              {text.length > 170 ? text.substr(0, 170) + "..." : text}
            </p>
          </div>
        </div>
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
          <div className="flex items-center justify-between">
            <img src={coverImg} className="w-8 h-8 rounded-full mr-4 avatar" />
            <p className="text-gray-600 text-xs md:text-sm">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
