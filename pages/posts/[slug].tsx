import BlogHeader from "../../components/blogHeader";
import BlogBody from "../../components/blogBody";
import Layout from "../../components/layout/layout";
import Head from "../../components/head";
import React, { Fragment } from "react";
import { fetchEntries, fetchBlogEntries } from "../../lib/api";

export async function getStaticPaths() {
  const getPosts = await fetchEntries();

  const paths = getPosts?.map(({ fields }) => ({
    params: { slug: fields.ids },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const posts = await fetchBlogEntries(params.slug);
  return {
    props: {
      posts,
      revalidate: 60,
    },
  };
}
const Post = ({ posts }) => {
  return (
    <Layout>
      {posts.map((res) => {
        const url = `https://ogp-kaitoyokohamaa.vercel.app/${res.title}`;
        return (
          <Fragment>
            <Head
              title={res?.title}
              description={res?.subtitle}
              keyword={res?.ids}
              image={url}
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
