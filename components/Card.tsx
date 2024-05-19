import Link from "next/link";

type CardProps = {
  title: string;
  content: string;
  id: number;
};

const Card: React.FC<CardProps> = ({ title, content, id }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-4 bg-transparent border border-blue-300 shadow-xl w-[500px] rounded-xl ">
      <h1 className="text-3xl font-bold text-center">
        Witaj w Mojej Aplikacji!
      </h1>
    </div>
  );
};

export default Card;
