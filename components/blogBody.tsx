import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
export default function BlogBody({ content }) {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { url, fileName } = node.data.target.fields.file;
        return <img src={url} alt={fileName} />;
      },
      [INLINES.HYPERLINK]: (node) => {
        const { uri } = node.data;
        const { value } = node.content[0];
        return (
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={uri}
            style={{ color: "blue" }}
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
      [BLOCKS.PARAGRAPH]: (node) => {
        const { value } = node.content[0];
        return <p className="leading-8 text-base">{value}</p>;
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
