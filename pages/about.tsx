import Layout from "../components/layout/layout";
import Head from "../components/head";
import JavaScriptIcon from "../public/javascript.svg";
import ReactIcon from "../public/react.svg";
import TypeScriptIcon from "../public/typescript.svg";
import GraphQLIcon from "../public/graphql.svg";

// import the icons you need
export default function About() {
  return (
    <Layout>
      <Head
        title={"アバウトページ"}
        description={
          "こちらは横浜海斗のアバウトページです。これまでの経歴を掲載しています。"
        }
        image={
          "https://user-images.githubusercontent.com/55383786/104997457-f519ab00-5a6c-11eb-9210-f91c35228dc7.jpg"
        }
        keyword={"about"}
      />

      <div className="m-auto md:w-2/3 mt-40">
        <div className="bg-white rounded-lg  justify-center ">
          <h2 className="font-bold py-2 pl-2 text-xl border-b-2">
            プロフィール
          </h2>
          <div className="">
            <p className="text-left">
              Webアプリ開発を中心に行っている大学4年生です。<br></br>
              趣味は筋トレと登山です。 筋トレは週に6回ジムに行ってます。
            </p>
            <p className="text-left">所属:東洋大学ライフデザイン学部</p>
            <p className="text-left">生年月日:1998/03/13</p>
            <p className="text-left">好きな言語:JavaScript</p>
          </div>
        </div>
        <div className="bg-white rounded-lg  justify-center ">
          <h2 className="font-bold py-2 pl-2 text-xl border-b-2">経歴</h2>
          <div className="">
            <p className="text-left">
              2018/04〜2019/04
              都内スタートアップでプログラミングスクールの立ち上げ営業
            </p>
            <p className="text-left">
              2019/04〜2019/09 フィリピンのIT企業でWebマーケティング業務
            </p>
            <p className="text-left">
              2019/09〜2019/12
              株式会社千葉工房に弟子入り。(大学通いながら毎日8時間の時間を取り千葉さんからプログラミングを学ぶ)
            </p>
            <p className="text-left">
              2020/01〜2019/02
              株式会社LABOTでフィリピンプログラミングスクールの新規事業とスクールの教材作成
            </p>
            <p className="text-left">
              2020/04〜2019/09 HRtechのスタートアップでフロントエンドエンジニア
              (React,Firebase)
            </p>
            <p className="text-left">
              2020/10〜2019/11 株式会社OneBoxでフロントエンドエンジニア
              (React,Firebase)
            </p>
            <p className="text-left">
              2020/03〜現在 株式会社スリーシェイク でフロントエンドエンジニア
              (Next,Contentful,CI,Stripe)
            </p>
          </div>
        </div>
        <div className="mb-10 ">
          <h2 className="font-bold py-2 pl-2 text-xl border-b-2">スキル</h2>
          <div className="pt-2 flex">
            <JavaScriptIcon />
            <ReactIcon />
            <TypeScriptIcon />
            <GraphQLIcon />
          </div>
        </div>
      </div>
    </Layout>
  );
}
