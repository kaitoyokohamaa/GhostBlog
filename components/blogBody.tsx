import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
export default function BlogBody({ content }) {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { url, fileName } = node.data.target.fields.file;
        return (
          <img
            src={url}
            alt={fileName}
            style={{
              width: "100%",
              margin: "2em 0",
              height: "500px",
            }}
          />
        );
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
          <h2 style={{ fontSize: "1.5rem", marginBottom: "0" }}>{value}</h2>
        );
      },
    },
  };

  return (
    <div className="w-auto m-auto py-10">
      <div className="w-4/6 m-auto">
        {documentToReactComponents(content, options)}
      </div>
    </div>
  );
}
