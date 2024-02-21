import Link from "next/link";

type CardProps = {
  title: string;
  content: string;
  id: number;
};

const Card: React.FC<CardProps> = ({ title, content, id }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-4 bg-transparent border border-blue-300 shadow-xl w-[500px] rounded-xl ">
      <Link href={`/posts/${id}`} passHref>
        <h2 className="text-blue-600">{title}</h2>
        <p>{content.substring(0, 100)}...</p>
      </Link>
    </div>
  );
};

export default Card;
