import BlogHeader from "../../components/blogHeader";
import BlogBody from "../../components/blogBody";
import Layout from "../../components/layout/layout";
import Head from "../../components/head";
import React, { Fragment } from "react";
export async function getStaticPaths() {
  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  async function fetchEntries() {
    const entries = await client.getEntries({ content_type: "post" });
    // console.log(entries.items?.find(params.ids));
    return entries.items;
  }

  const res = await fetchEntries();
  const getPosts = await res;

  const paths = getPosts?.map(({ fields }) => ({
    params: { slug: fields.ids },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  async function fetchEntries() {
    const entries = await client.getEntries({ content_type: "post" });

    return entries.items
      .map((res) => res.fields)
      .filter((item) => item.ids === params.slug);
  }

  const res = await fetchEntries();
  const posts = await res;
  return {
    props: {
      posts,
    },
  };
}
const Post = ({ posts }) => {
  return (
    <Layout>
      {posts.map((res) => {
        const url = `https://ogp-kaitoyokohamaa.vercel.app/${res.title}.png`;
        return (
          <Fragment>
            <Head
              title={res?.title}
              description={res?.subtitle}
              keyword={res?.ids}
              image={url}
              lang="ja"
            />
            <BlogHeader
              authorName={res?.authorImg?.fields?.title}
              authorImg={res?.authorImg?.fields?.file?.url}
              title={res?.title}
              contentImg={res?.image?.fields.file.url}
              date={res?.opendAt}
            />
            <BlogBody content={res?.content} />
          </Fragment>
        );
      })}
    </Layout>
  );
};

export default Post;
