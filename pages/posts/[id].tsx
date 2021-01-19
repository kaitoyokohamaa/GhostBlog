import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getAllPosts } from "../../lib";

export async function getStaticProps() {
  const posts = await getAllPosts();
  return { revalidate: 1, props: { posts } };
}

const Post = ({ posts }) => {
  return (
    <div>
      {/* {posts?.map(({ fields }) => {
        return <h1>{fields.title}</h1>;
      })} */}
    </div>
  );
};

export default Post;
