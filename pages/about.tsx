import Head from "next/head";

import Layout from "../components/layout/layout";

export default function About() {
  return (
    <Layout>
      <Head>
        {" "}
        <title>about</title>
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
                <a href="https://twitter.com/mj3PBy4ayqxfy14">Twitter</a>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </Layout>
  );
}
