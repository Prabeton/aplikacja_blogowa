import { useEffect, useState } from "react";
import Card from "../components/Card";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:3000/api/hello");
      const result = await response.json();
      setPosts(result);
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col bg-slate-400">
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
