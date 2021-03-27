import BlogHeader from "../../components/blogHeader";
import BlogBody from "../../components/blogBody";
import Layout from "../../components/layout/layout";
import Head from "../../components/head";
import { getPage } from "../../lib";

export async function getStaticProps() {
  const page = await getPage({
    pageContentType: "page_help_center_article",
    slug: "introduction-to-contentful",
    locale: "de-DE",
  });
  return {
    props: {
      post: page,
    },
  };
}

const Post = ({ post }) => {
  return (
    <Layout>
      <Head
        title={post?.fields.title}
        description={post?.fields.subtitle}
        keyword={post?.fields.ids}
        image={
          "https://user-images.githubusercontent.com/55383786/104997457-f519ab00-5a6c-11eb-9210-f91c35228dc7.jpg"
        }
        lang="ja"
      />
      <BlogHeader
        authorName={post?.fields.authorImg?.fields?.title}
        authorImg={post?.fields.authorImg?.fields?.file?.url}
        title={post?.fields.title}
        contentImg={post?.fields.image?.fields.file.url}
        date={post?.fields.opendAt}
      />
      <BlogBody content={post?.fields.content} />
    </Layout>
  );
};

export default Post;
