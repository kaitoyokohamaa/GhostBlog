import Layout from "../components/layout/layout";
import Head from "../components/head";
import ReactIcon from "../public/react.svg";
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
      <div className="mt-14 text-center">
        <div className="md:flex bg-white rounded-lg p-24 justify-center">
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
        <div className="mb-10">
          <div className="flex justify-center">
            <img
              className="w-10 h-10"
              src="https://user-images.githubusercontent.com/55383786/105624318-368ec980-5e64-11eb-8868-a50c074b464b.png"
            />
            <h2 className="font-bold py-2 pl-2 text-xl">Skill</h2>
          </div>
          <div>
            <p>株式会社Permil</p>
            <p>1年間営業を担当</p>
            <p>KredoJapan</p>
            <p>Webマーケを担当</p>
            <p>株式会社Ailab</p>
            <p>フロントエンドエンジニアとして開発</p>
            <p>Onebox株式会社</p>
            <p>フロントエンドエンジニアとして開発</p>
          </div>
        </div>
        <div className="mb-10">
          <h2>経歴</h2>
          <p>株式会社Permil</p>
          <p>1年間営業を担当</p>
          <p>KredoJapan</p>
          <p>Webマーケを担当</p>
          <p>株式会社Ailab</p>
          <p>フロントエンドエンジニアとして開発</p>
          <p>Onebox株式会社</p>
          <p>フロントエンドエンジニアとして開発</p>
        </div>
      </div>
    </Layout>
  );
}
