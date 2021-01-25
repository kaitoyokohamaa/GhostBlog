import Layout from "../components/layout/layout";
import Head from "../components/head";
import JavaScriptIcon from "../public/javascript.svg";
import ReactIcon from "../public/react.svg";
import TypeScriptIcon from "../public/typescript.svg";
import GraphQLIcon from "../public/graphql.svg";
import Comment from "../public/comment.svg";
import Ryuusei from "../public/kai.jpg";
export default function About() {
  return (
    <Layout>
      <Head
        title={"アバウトページ"}
        description={
          "こちらは横浜海斗のアバウトページです。これまでの経歴を掲載しています。"
        }
        keyword={"about"}
        image={
          "https://user-images.githubusercontent.com/55383786/104997457-f519ab00-5a6c-11eb-9210-f91c35228dc7.jpg"
        }
      />

      <div className="mt-14 pt-24 text-center ">
        <h2 className="font-bold py-6 pl-2 text-xl">
          生きる伝説横浜海斗のご紹介
        </h2>
        <div className="md:flex bg-white rounded-lg pb-24 justify-center">
          <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
            <img
              className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
              src="https://user-images.githubusercontent.com/55383786/104997457-f519ab00-5a6c-11eb-9210-f91c35228dc7.jpg"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <h2 className="font-bold ">Kaito Yokohama</h2>
              <div className="text-purple-500">I'm University Student</div>
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
        <div className="mb-10 m-auto md:w-2/3">
          <div className="flex justify-center border-b-8 py-10 mx-20">
            <img
              className="w-10 h-10"
              src="https://user-images.githubusercontent.com/55383786/105624318-368ec980-5e64-11eb-8868-a50c074b464b.png"
            />
            <h2 className="font-bold py-2 pl-2 text-xl">スキル</h2>
          </div>
          <div className="pt-10 flex justify-center">
            <JavaScriptIcon />
            <ReactIcon />
            <TypeScriptIcon />
            <GraphQLIcon />
          </div>
        </div>
        <div className="mb-10 m-auto md:w-2/3">
          <div className="flex  border-b-8 py-10 mx-20 justify-center">
            <Comment className="w-10 h-10" />
            <h2 className="font-bold py-2 pl-2 text-xl">推薦コメント</h2>
          </div>
          <div className="md:m-auto sm:w-full">
            <div className="pt-10 flex md:w-2/4  md:m-auto sm:m-0">
              <img
                className="w-48 h-48 md:h-auto md:rounded rounded-full "
                src="https://user-images.githubusercontent.com/55383786/105632207-54285700-5e95-11eb-9203-bb010091695b.jpg"
              />
              <div className="p-4  md: w-2/3 sm:w-full">
                <h2 className="font-bold md:p-8">ジョビンソン</h2>
                <blockquote>
                  <p className="text-center font-sans">
                    「横浜のアニキに手を出したら<br></br>
                    どうなるか分かってるのか？」
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="pt-10 flex flex-row-reverse md:w-2/4 md:m-auto">
              <img
                className="w-48 h-48 md:h-auto md:rounded rounded-full "
                src=" https://user-images.githubusercontent.com/55383786/105650743-114b9b00-5ef8-11eb-9451-dffd61501d42.jpg"
              />
              <div className="p-4  md: w-2/3 sm:w-full">
                <h2 className="font-bold md:p-8">アーナルネッガ</h2>
                <p className="text-center font-sans">
                  「待ってろぉ〜横浜ぁぁ！！」
                </p>
              </div>
            </div>
            <div className="pt-10 flex md:w-2/4 m-auto">
              <img
                className="w-48 h-48 md:h-auto md:rounded rounded-full "
                src="https://user-images.githubusercontent.com/55383786/105647973-62ee2880-5eec-11eb-9119-d083380b92bd.jpg"
              />
              <div className="sp-4 md:w-2/3">
                <h2 className="font-bold md:p-8">横浜流星</h2>
                <blockquote>
                  <p className="text-center font-sans">
                    「あぁ弟のことか？<br></br>あいつには敵わねぇよ」
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
