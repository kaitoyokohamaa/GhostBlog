import { Fragment, useState } from "react";
// import { getAllPosts } from "../lib";
import Head from "../components/head";

import { Post } from "../components/post";
import Layout from "../components/layout/layout";

export async function getStaticProps() {
  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  async function fetchEntries() {
    const entries = await client.getEntries({ content_type: "post" });
    return entries.items;
  }

  const res = await fetchEntries();
  const posts = await res;
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <Layout>
      <Head
        title={"ブログ記事"}
        description={
          "こちらは横浜海斗のブログ記事一覧です。日頃の気づきや技術のアウトプットをつぶやいて行きます。"
        }
        keyword={"ブログ"}
        image={
          "https://user-images.githubusercontent.com/55383786/104997457-f519ab00-5a6c-11eb-9210-f91c35228dc7.jpg"
        }
        lang="ja"
      />

      <div className="text-center">
        <div className="md:flex bg-white rounded-lg p-24 justify-center">
          <h1 className="font-bold text-black-1000 text-3xl">Kai Blog</h1>
        </div>
        <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32 ">
          <div className="mx-0 sm:mx-6">
            <div className="flex flex-wrap justify-between pt-12 -mx-6 ">
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
