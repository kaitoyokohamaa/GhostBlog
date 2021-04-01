import BlogHeader from "../../components/blogHeader";
import BlogBody from "../../components/blogBody";
import Layout from "../../components/layout/layout";
import Head from "../../components/head";

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "introduction" } }],
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  console.log(params);
  const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  async function fetchEntries() {
    const entries = await client.getEntries({ content_type: "post" });
    return entries.items[1];
  }

  const res = await fetchEntries();
  const posts = await res;
  return {
    props: {
      posts,
    },
  };
}

const Post = ({ posts }) => {
  console.log(posts);
  return (
    <Layout>
      <Head
        title={posts?.fields.title}
        description={posts?.fields.subtitle}
        keyword={posts?.fields.ids}
        image={
          "https://user-images.githubusercontent.com/55383786/104997457-f519ab00-5a6c-11eb-9210-f91c35228dc7.jpg"
        }
        lang="ja"
      />
      <BlogHeader
        authorName={posts?.fields.authorImg?.fields?.title}
        authorImg={posts?.fields.authorImg?.fields?.file?.url}
        title={posts?.fields.title}
        contentImg={posts?.fields.image?.fields.file.url}
        date={posts?.fields.opendAt}
      />
      <BlogBody content={posts?.fields.content} />
    </Layout>
  );
};

export default Post;
