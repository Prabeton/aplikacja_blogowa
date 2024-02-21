import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

interface PostProps {
  id: number;
  title: string;
  content: string;
}

interface PostPageProps {
  post: PostProps;
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const posts: PostProps[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context
) => {
  const { params } = context;
  const id = params?.id;

  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  const post: PostProps = await res.json();

  return { props: { post } };
};

export default PostPage;
