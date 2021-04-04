import * as React from "react";
import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  keyword: string;
  image?: string;
}

const HeadConfigurations = ({
  title,
  description,
  keyword,
  image,
}: Props): JSX.Element => {
  return (
    <>
      <Head>
        <head>
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <meta property="og:site_name" content="ブログ" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content={title ? title : "横浜海斗ブログ"}
          />
          <meta property="og:locale" content="ja" />

          <meta
            name="description"
            content={
              description
                ? description
                : "横浜海斗の日々に学びをブログにします。"
            }
          />
          <meta
            property="og:description"
            content={
              description
                ? description
                : "横浜海斗の日々に学びをブログにします。"
            }
          />
          <meta name="keywords" content={keyword ? keyword : "blog"}></meta>
          <meta name="twitter:image" content={image ? image : "/favicon.png"} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="og:url"
            content="https://ogp-kaitoyokohamaa.vercel.app"
          />
          <link rel="canonical" href="https://ogp-kaitoyokohamaa.vercel.app" />
          <meta property="og:image" content={image ? image : "/favicon.png"} />
          <title>{title}</title>
        </head>
      </Head>
    </>
  );
};
export default HeadConfigurations;
