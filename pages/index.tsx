import { useEffect, useState } from "react";
import Card from "../components/Card";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/data/posts");
      const result = await response.json();
      setPosts(result);
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-3 bg-transparent ">
      {posts.map(
        ({
          title,
          content,
          id,
        }: {
          title: string;
          content: string;
          id: number;
        }) => (
          <Card key={id} id={id} title={title} content={content} />
        )
      )}
    </div>
  );
};
export default Blog;
