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
  image,
  lang,
}: Props): JSX.Element => {
  return (
    <>
      <html lang={lang} />
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="keywords" content={keyword} />
        <meta property="og:type" content="blog" />

        <meta property="og:image" content={image} />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@mj3PBy4ayqxfy14" />
        <meta name="twitter:url" content={image} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        <link rel="shortcut icon" href={image} />
        <link rel="apple-touch-icon" href={image} />
      </Head>
    </>
  );
};
export default HeadConfigurations;
