import type { NextApiRequest, NextApiResponse } from "next";
import { posts } from "../../../data/posts";

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post | { message: string }>
) {
  const { id } = req.query;

  const post = posts.find((post) => post.id === parseInt(id as string, 10));

  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
}
