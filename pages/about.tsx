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
              <h2 className="font-bold ">kaikai</h2>
              <div className="text-purple-500">I'm University student</div>
              <div className="flex  items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
                <a href="https://github.com/kaitoyokohamaa">
                  <img
                    className="w-12 p-2"
                    src="https://user-images.githubusercontent.com/55383786/105038022-2791cb00-5aa2-11eb-84a1-9cc222d56b9e.png"
                  />
                </a>
                <a href="https://twitter.com/mj3PBy4ayqxfy14">
                  <img
                    className="w-12 p-2"
                    src="https://user-images.githubusercontent.com/55383786/105038170-514af200-5aa2-11eb-9d02-219d0b6fb6b3.jpg"
                  />
                </a>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </Layout>
  );
}
