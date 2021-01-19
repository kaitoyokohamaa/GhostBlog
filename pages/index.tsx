import { useEffect } from "react";
import { getAllPosts } from "../lib";
import Head from "next/head";
import Link from "next/link";
import { Post } from "../components/post";
export async function getStaticProps() {
  const posts = await getAllPosts();
  return { revalidate: 1, props: { posts } };
}
export default function Home({ posts }) {
  return (
    <>
      <Head>
        {" "}
        <title>home</title>
      </Head>
      <div className="text-center">
        <div className="md:flex bg-white rounded-lg p-24 justify-center">
          <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
            <img
              className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
              src="https://user-images.githubusercontent.com/55383786/104997457-f519ab00-5a6c-11eb-9210-f91c35228dc7.jpg"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <h2 className="font-bold ">かいかい</h2>
              <div className="text-purple-500">I'm JavaScript developer</div>
              <div className="text-blue-600">
                <a href="https://github.com/kaitoyokohamaa">GitHub</a>
              </div>

              <div className="text-blue-600">
                <a href=" https://twitter.com/mj3PBy4ayqxfy14">Twitter</a>
              </div>
            </div>
          </figure>
        </div>
        <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
            <div className="flex flex-wrap justify-between pt-12 -mx-6">
              {posts?.map(({ fields }) => {
                return (
                  <Post
                    title={fields.title}
                    text={fields.descriptions}
                    name={fields.author?.fields?.name}
                    authorImg={fields.author?.fields?.image.fields.file.url}
                    slug={fields.slug}
                    date={fields.date}
                    coverImg={fields.image?.fields.file.url}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
