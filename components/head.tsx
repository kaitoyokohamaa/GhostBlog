import * as React from "react";
import Head from "next/head";

interface Props {
  title: string;
  description: string;
  keyword: string;
  image: string;
  lang: string;
}

const HeadConfigurations = ({
  title,
  description,
  keyword,
}: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta property="og:title" content={title} />
        <meta
          name="Description"
          property="og:description"
          content={description}
        />
        <meta name="keywords" content={keyword} />
        <meta property="og:type" content="blog" />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mj3PBy4ayqxfy14" />
        <meta name="twitter:url" content={image} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link rel="shortcut icon" href={"/public/favicon.png"} />
        <link rel="apple-touch-icon" href={"/public/favicon.png"} />
      </Head>
    </>
  );
};
export default HeadConfigurations;
