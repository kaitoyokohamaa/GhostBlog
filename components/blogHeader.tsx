import React from "react";

export default function BlogHeader({
  authorName,
  authorImg,
  contentImg,
  title,
}) {
  return (
    <div>
      <div>
        <div className="w-4/6 m-auto h-3/6 py-1 mt-14 sticky">
          <h2 className={"font-black px-19 my-10 text-4xl "}>{title}</h2>
        </div>
        <div className=" w-4/6 flex bg-white rounded-b rounded-t-none overflow-hidden  m-auto pt-1 ">
          <div>
            <img
              className="w-14 h-14 rounded-full mr-4 avatar"
              src={authorImg}
            />
          </div>
          {/* <p> {authorName}</p> */}
          <div>
            <p className="text-gray-600 text-xs md:text-sm">海斗</p>{" "}
            <p className="text-gray-600 text-xs md:text-sm">2019/9</p>
          </div>
        </div>
      </div>
      <div className={"tw-w-full lg_tw-w-2/3 tw-px-4 h-500"}>
        <img className={"m-auto  w-4/6 py-5 h-500"} src={contentImg} />
      </div>
    </div>
  );
}
