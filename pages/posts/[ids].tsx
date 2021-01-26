import { getPostByIds, getAllPostsWithIds } from "../../lib";
import BlogHeader from "../../components/blogHeader";
import BlogBody from "../../components/blogBody";
import Layout from "../../components/layout/layout";
import Head from "../../components/head";
export async function getStaticPaths() {
  // パスの設定
  const allPosts = await getAllPostsWithIds();
  return {
    paths: allPosts?.map(({ ids }) => `/posts/${ids}`),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostByIds(params?.ids);
  console.log(post);
  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}
const Post = ({ post }) => {
  console.log(post);
  return (
    <Layout>
      <Head
        title={post?.fields.title}
        description={post?.fields.subtitle}
        keyword={post?.fields.ids}
        image={
          "https://user-images.githubusercontent.com/55383786/104997457-f519ab00-5a6c-11eb-9210-f91c35228dc7.jpg"
        }
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
