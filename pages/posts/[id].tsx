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
    <div className="w-[700px] border-blue-600 shadow-xl rounded-md p-2 bg-green-200">
      <h1 className="p-2 font-bold text-blue-400 border-blue-600 rounded-md shadow-xl bg-green-250">
        {post.title}
      </h1>
      <p className="text-sm font-light">{post.content}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const apiEndpoint = `https:/aplikacja-blogowa-7w8x-wkg9-git-main-prabetons-projects.vercel.app/api/hello`;
  const res = await fetch(apiEndpoint);
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

  const res = await fetch(`https://data/posts/1`);
  const post: PostProps = await res.json();

  return { props: { post } };
};

export default PostPage;
