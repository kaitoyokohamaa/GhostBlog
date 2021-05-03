import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
export default function BlogBody({ content }) {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { url, fileName } = node.data.target.fields?.file;
        return <img className="m-4" src={url} alt={fileName} />;
      },
      [INLINES.HYPERLINK]: (node) => {
        const { uri } = node.data;
        const { value } = node.content[0];
        return (
          <a
            target="_blank"
            className="leading-8 text-base text-blue-700"
            rel="noreferrer noopener"
            href={uri}
          >
            {value}
          </a>
        );
      },
      [BLOCKS.HEADING_1]: (node) => {
        const { value } = node.content[0];
        return (
          <h2 className="font-bold  my-10 text-2xl border-l-4 border-green-400 pl-2">
            {value}
          </h2>
        );
      },
      [BLOCKS.HEADING_3]: (node) => {
        const { value } = node.content[0];
        return (
          <h2 className="font-bold  my-10 text-xl bg-gray-400 border-4  p-2">
            {value}
          </h2>
        );
      },
    },
  };

  return (
    <div className="w-auto m-auto py-10 md:py-10">
      <div className="px-2 md:w-4/6 m-auto">
        {documentToReactComponents(content, options)}
      </div>
    </div>
  );
}
