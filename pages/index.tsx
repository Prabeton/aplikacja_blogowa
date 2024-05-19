import { useState } from "react";
import Card from "../components/Card";

const Blog = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Jak sadzić róże",
      content:
        "Sadzenie róż jest jednym z najbardziej satysfakcjonujących zadań dla ogrodnika, ale wymaga odpowiedniej wiedzy i techniki. Aby Twoje róże kwitły obficie, należy wybrać odpowiednie miejsce w ogrodzie. Róże potrzebują co najmniej 6 godzin bezpośredniego światła słonecznego dziennie. Gleba powinna być żyzna, dobrze przepuszczalna, zasobna w organiczne składniki odżywcze. Przed sadzeniem, zaleca się przekopanie gleby i wzbogacenie jej kompostem lub obornikiem. Sadzenie róż najlepiej przeprowadzić wiosną lub jesienią, aby rośliny miały czas na aklimatyzację. Ważne jest, aby podczas sadzenia korzenie były dobrze rozwinięte i nawodnione. Po posadzeniu, należy obficie podlać roślinę i regularnie nawozić, stosując specjalistyczne nawozy dla róż. Pamiętaj również o regularnym przycinaniu, które stymuluje wzrost nowych pędów i obfite kwitnienie. Ochrona przed szkodnikami i chorobami jest kluczowa, więc nie zapomnij o profilaktycznych zabiegach ochronnych.",
    },
  ]);

  return (
    <div className="flex flex-wrap justify-center gap-3 bg-transparent ">
      {posts.map(({ title, content, id }) => (
        <Card key={id} id={id} title={title} content={content} />
      ))}
    </div>
  );
};

export default Blog;
