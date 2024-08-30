import React from "react";
import { ArticleType } from "@/types/ArticleType";
import { Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

export async function getServerSideProps() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/article`
  ).then((res) => res.json());
  return { props: { dataArticle: data } };
}

export default function PromissumPage(props: { dataArticle: ArticleType[] }) {
  const { dataArticle } = props;

  return (
    <div className="pt-40 pb-20 px-48">
      <h1 className="font-lora text-6xl font-light mb-5 block">
        Tagih Janji Pejabat:{" "}
      </h1>
      <Highlight className="font-lora text-6xl font-light mt-5 italic inline-block from-red to-white text-white from-50%">
        Dari Ucapan ke Kenyataan.
      </Highlight>
      <div className="mt-20 py-10 flex flex-col gap-7">
        {dataArticle.map((article) => {
          const date = new Date(article.publish_date);
          const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
          };
          const formattedDate = date.toLocaleDateString("en-US", options);
          return (
            <>
              <div className="flex w-full gap-10 group" key={article.id}>
                <h1 className="font-lora text-zinc-500 text-xs basis-1/5 ">
                  {formattedDate}
                </h1>
                <Link
                  href={"/promissum/" + article.id}
                  className="basis-3/5 flex flex-col gap-3 -mt-2 group"
                >
                  <p className="font-lora text-2xl line-clamp-2 h-fit group-hover:underline group-hover:cursor-pointer">
                    {article.title}
                  </p>
                  <p className="font-lora text-zinc-500 text-sm line-clamp-4">
                    {article.content}
                  </p>
                  <p className="font-lora uppercase text-zinc-700 text-sm line-clamp-1">
                    {article.author}
                  </p>
                </Link>
                <Image
                  className=" basis-2/5"
                  src={
                    "https://static01.nyt.com/images/2024/04/05/multimedia/27iran-negotiation/05mideast-crisis-header-hfo-qwfk-superJumbo.jpg?quality=75&auto=webp"
                  }
                  alt={article.title}
                  width={200}
                  height={200}
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
}
