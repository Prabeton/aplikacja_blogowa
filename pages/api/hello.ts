import type { NextApiRequest, NextApiResponse } from "next";
import { posts } from "../../data/posts";

type Data = {
  title: string;
  content: string;
  id: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(posts);
}
