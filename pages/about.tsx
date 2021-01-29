import Layout from "../components/layout/layout";
import Head from "../components/head";
import JavaScriptIcon from "../public/javascript.svg";
import ReactIcon from "../public/react.svg";
import TypeScriptIcon from "../public/typescript.svg";
import GraphQLIcon from "../public/graphql.svg";
import Comment from "../public/comment.svg";
import Ryuusei from "../public/kai.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
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
        lang="ja"
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
              alt="kaitoのプロフィール"
            />

            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <h2 className="font-bold ">Kaito Yokohama</h2>
              <div>I'm University Student</div>
              <div className="flex  items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
                <a href="https://github.com/kaitoyokohamaa">
                  <img
                    className="w-12 p-2"
                    src="https://user-images.githubusercontent.com/55383786/105038022-2791cb00-5aa2-11eb-84a1-9cc222d56b9e.png"
                    alt="githubアイコン"
                  />
                </a>
                <a href="https://twitter.com/mj3PBy4ayqxfy14">
                  <img
                    className="w-12 p-2"
                    src="https://user-images.githubusercontent.com/55383786/105038170-514af200-5aa2-11eb-9d02-219d0b6fb6b3.jpg"
                    alt="twitterアイコン"
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
              alt="スキルアイコン"
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
            <Comment className="w-10 h-10" alt="コメントアイコン" />
            <h2 className="font-bold py-2 pl-2 text-xl">推薦コメント</h2>
          </div>
          <div className="md: sm:w-full">
            <div className="pt-10 flex  md:w-2/3 md:m-auto">
              <img
                className="md:w-2/4 w-32 h-32 md:h-48 md:rounded rounded-full "
                src="https://user-images.githubusercontent.com/55383786/105632207-54285700-5e95-11eb-9203-bb010091695b.jpg"
                alt="推薦者A"
              />
              <div className="  md: w-full sm:w-full">
                <h2 className="font-bold md:p-8 text-left">推薦者A</h2>
                <div className="text-left pl-8">
                  <FontAwesomeIcon
                    className="text-left"
                    icon={faQuoteLeft}
                  ></FontAwesomeIcon>
                </div>

                <blockquote>
                  <p className="text-center font-sans italic">
                    「横浜のアニキに手を出したら<br></br>
                    どうなるか分かってるのか？」
                  </p>
                </blockquote>
                <div className="text-right w-full">
                  <FontAwesomeIcon
                    className="text-right"
                    icon={faQuoteRight}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="pt-10 flex flex-row-reverse md:w-2/3 md:m-auto">
              <img
                className="md:w-2/4 w-32 h-32 md:h-48 md:rounded rounded-full "
                src=" https://user-images.githubusercontent.com/55383786/105650743-114b9b00-5ef8-11eb-9451-dffd61501d42.jpg"
                alt="推薦者B"
              />
              <div className=" md: w-2/3 sm:w-full">
                <h2 className="font-bold md:p-8 text-right">推薦者B</h2>
                <div className="text-left w-full ">
                  <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                </div>
                <p className="text-center font-sans italic">
                  「待ってろぉ〜横浜ぁぁ！！」
                </p>
                <div className="text-right w-full pr-8">
                  <FontAwesomeIcon
                    className="text-right"
                    icon={faQuoteRight}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="pt-10 flex  md:w-2/3 md:m-auto">
              <img
                className="md:w-2/4 w-32 h-32 md:h-48 md:rounded rounded-full "
                src="https://user-images.githubusercontent.com/55383786/105647973-62ee2880-5eec-11eb-9119-d083380b92bd.jpg"
                alt="横浜兄弟写真"
              />
              <div className=" md:w-2/3">
                <h2 className="font-bold md:p-8 text-left">横浜流星</h2>
                <div className="text-left pl-8">
                  <FontAwesomeIcon
                    className="text-left"
                    icon={faQuoteLeft}
                  ></FontAwesomeIcon>
                </div>

                <blockquote>
                  <p className="pl-2 text-center font-sans italic">
                    「あぁ弟のことか？<br></br>あいつには完敗だよ」
                  </p>
                </blockquote>
                <div className="text-right w-full">
                  <FontAwesomeIcon
                    className="text-right"
                    icon={faQuoteRight}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
