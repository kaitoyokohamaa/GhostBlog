import { useEffect, Fragment } from "react";
import { getAllPosts } from "../lib";
import Head from "next/head";
import Link from "next/link";
import { Post } from "../components/post";
import Layout from "../components/layout/layout";
export async function getStaticProps() {
  const posts = await getAllPosts();
  return { revalidate: 1, props: { posts } };
}
export default function Home({ posts }) {
  return (
    <Layout>
      <Head>
        {" "}
        <title>home</title>
      </Head>
      <div className="text-center">
        <div className="md:flex bg-white rounded-lg p-24 justify-center">
          <h1 className="font-bold text-black-1000 text-3xl">Kai Blog</h1>
        </div>
        <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
            <div className="flex flex-wrap justify-between pt-12 -mx-6">
              {posts?.map(({ fields }) => {
                return (
                  <Fragment key={fields.ids}>
                    <Post
                      title={fields.title}
                      subtitle={fields?.subtitle}
                      authorImg={fields.authorImg?.fields?.file?.url}
                      ids={fields.ids}
                      date={fields.opendAt}
                      coverImg={fields.image?.fields?.file?.url}
                    />
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
