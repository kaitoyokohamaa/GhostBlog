import React from "react";
import Date from "../components/date";
import Image from "next/image";
type Props = {
  authorImg: string;
  date: Date;
  authorName: string;
  contentImg: string;
  title: string;
};
export default function BlogHeader({
  authorName,
  authorImg,
  contentImg,
  title,
  date,
}: Props) {
  return (
    <div>
      <div>
        <div className="md:w-4/6 text-center m-auto h-3/6 py-1 mt-14 sticky">
          <h2 className={"font-black md:px-19 my-10 text-2xl md:text-4xl "}>
            {title}
          </h2>
        </div>
        <div className="px-2 md:w-4/6 flex bg-white rounded-b rounded-t-none overflow-hidden  m-auto pt-1 ">
          <div>
            <Image
              width="60"
              height="60"
              className="w-14 h-14 rounded-full mr-4 avatar"
              src={`http:${authorImg}`}
              alt={authorName}
            />
          </div>

          <div className="pt-2">
            <p className="text-gray-600 text-xs md:text-sm">{authorName}</p>
            <Date dateString={date} />
          </div>
        </div>
      </div>
      <div
        className={
          "text-center mt-10 px-2 tw-w-full lg_tw-w-2/3 tw-px-4 md:h-500"
        }
      >
        <Image
          width="950"
          height="500"
          className={"m-auto  md:w-4/6 py-5 md:h-500"}
          src={`http:${contentImg}`}
          alt={authorName}
        />
      </div>
    </div>
  );
}
