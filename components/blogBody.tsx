import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
export default function BlogBody({ content }) {
  return (
    <div className="w-auto m-auto py-10">
      <p className="w-4/6 m-auto ">{content}</p>
    </div>
  );
}
