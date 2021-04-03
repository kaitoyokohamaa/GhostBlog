import BlogHeader from "../../components/blogHeader";
import BlogBody from "../../components/blogBody";
import Layout from "../../components/layout/layout";
import Head from "../../components/head";
import { useRouter } from "next/router";
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
    // const blogData = entries.items.filter(
    //   ({ fields }) => fields.ids === params
    // );
    entries.items
      .map((res) => res.fields)
      .filter((item) => item.ids === params);
    console.log(
      entries.items
        .map((res) => res.fields)
        .filter((item) => item.ids === params.slug)
    );

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
      {posts.map((res) => (
        <Fragment>
          <Head
            title={res?.title}
            description={res?.subtitle}
            keyword={res?.ids}
            image={
              "https://user-images.githubusercontent.com/55383786/104997457-f519ab00-5a6c-11eb-9210-f91c35228dc7.jpg"
            }
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
      ))}
      {/* <Head
        title={posts?.title}
        description={posts?.subtitle}
        keyword={posts?.ids}
        image={
          "https://user-images.githubusercontent.com/55383786/104997457-f519ab00-5a6c-11eb-9210-f91c35228dc7.jpg"
        }
        lang="ja"
      />
      <BlogHeader
        authorName={posts?.authorImg?.fields?.title}
        authorImg={posts?.authorImg?.fields?.file?.url}
        title={posts?.title}
        contentImg={posts?.image?.fields.file.url}
        date={posts?.opendAt}
      />
      <BlogBody content={posts?.content} /> */}
    </Layout>
  );
};

export default Post;
