import { getPostByIds, getAllPostsWithIds } from "../../lib";
import BlogHeader from "../../components/blogHeader";
import BlogBody from "../../components/blogBody";
import Layout from "../../components/layout/layout";

export async function getStaticPaths() {
  // パスの設定
  const allPosts = await getAllPostsWithIds();

  return {
    paths: allPosts?.map(({ ids }) => `/posts/${ids}`),
    // See the "paths" section below
    fallback: false, // See the "fallback" section below
  };
}
export async function getStaticProps({ params }) {
  // データの取得
  const post = await getPostByIds(params?.ids);

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}
const Post = ({ post }) => {
  return (
    <Layout>
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
