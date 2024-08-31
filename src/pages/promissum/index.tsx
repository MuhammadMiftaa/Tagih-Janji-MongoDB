import React from "react";
import { ArticleType } from "@/src/types/ArticleType";
import { Highlight } from "@/src/components/ui/hero-highlight";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import client from "@/src/lib/mongodb";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { log } from "console";
import { useRouter } from "next/router";

type ConnectionStatus = {
  isConnected: boolean;
};

export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  try {
    await client.connect(); // `await client.connect()` will use the default database passed in the MONGODB_URI
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/artikel`
    ).then((res) => res.json());
    return {
      props: { dataArtikel: data.data, isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default function PromissumPage(props: { dataArtikel: ArticleType[] }) {
  const { dataArtikel } = props;

  return (
    <div className="pt-40 pb-20 px-48">
      <h1 className="font-lora text-6xl font-light mb-5 block">
        Tagih Janji Pejabat:{" "}
      </h1>
      <Highlight className="font-lora text-6xl font-light mt-5 italic inline-block from-red to-white text-white from-50%">
        Dari Ucapan ke Kenyataan.
      </Highlight>
      <div className="mt-20 py-10 flex flex-col gap-7">
        {dataArtikel.map((artikel) => {
          const date = new Date(artikel.tanggal);
          const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
          };
          const formattedDate = date.toLocaleDateString("en-US", options);
          return (
            <>
              <div className="flex w-full gap-10 group" key={artikel._id}>
                <h1 className="font-lora text-zinc-500 text-xs basis-1/5 ">
                  {formattedDate}
                </h1>
                <Link
                  href={"/promissum/" + artikel._id}
                  className="basis-3/5 flex flex-col gap-3 -mt-2 group"
                >
                  <p className="font-lora text-2xl line-clamp-2 h-fit group-hover:underline group-hover:cursor-pointer">
                    {artikel.judul}
                  </p>
                  <p className="font-lora text-zinc-500 text-sm line-clamp-4">
                    {artikel["paragraf_1.1"]}
                  </p>
                  <p className="font-lora uppercase text-zinc-700 text-sm line-clamp-1">
                    {artikel.penulis}
                  </p>
                </Link>
                <Image
                  className=" basis-2/5"
                  src={
                    "https://asset.kompas.com/crops/M8C4O-OaZdKMqfPPuL9oFwv6S-0=/170x166:1164x828/750x500/data/photo/2023/08/26/64e99d6f9691d.jpg"
                  }
                  alt={artikel.judul}
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
