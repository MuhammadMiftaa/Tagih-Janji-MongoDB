import client from "@/src/lib/mongodb";
import { ArticleType } from "@/src/types/ArticleType";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";
import { MdFormatQuote } from "react-icons/md";
import moment from "moment";

type ConnectionStatus = {
  isConnected: boolean;
};

export const getServerSideProps: GetServerSideProps<ConnectionStatus> = async (
  context
) => {
  const id = context.query.article;
  try {
    await client.connect();
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/artikel/${id}`
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

export default function ArticlePage(props: { dataArtikel: ArticleType }) {
  const { dataArtikel } = props;
  const [day, month, year] = dataArtikel.tanggal.split("/").map(Number);
  const date = new Date(year, month - 1, day);
  const tanggal = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="py-32">
      <header className="w-full flex flex-col font-lora px-10 text-sm">
        <div className="flex gap-2 flex-wrap mb-8">
          {dataArtikel.tags.map((tag, index) => (
            <h1 key={index} className="py-1 px-3 rounded-full w-fit bg-gradient-to-br from-zinc-600 to-zinc-950 text-white font-lora">{tag}</h1>
          ))}
        </div>
        <div className="justify-between flex">
          <h1 className="text-zinc-500">
            Ditulis oleh: <span>{dataArtikel.penulis}</span>
          </h1>
          <h2 className="text-zinc-600">
            {tanggal} |{" "}
            {moment(dataArtikel.waktu_publikasi, "HH:mm:ss").format("HH:mm") +
              " WIB"}
          </h2>
        </div>
        <div className="flex justify-between">
          <h1 className="text-zinc-500">{dataArtikel.lama_baca}</h1>
          {dataArtikel.sumber && (
            <h1 className="text-zinc-400">
              Referensi:{" "}
              <span className="text-zinc-800">{dataArtikel.sumber}</span>
            </h1>
          )}
        </div>
      </header>
      <main>
        <div className="flex flex-row pb-20">
          <div className=" basis-1/2 pl-10 pt-10 pr-5 flex flex-col">
            <h1 className="uppercase font-lora text-4xl">
              {dataArtikel.judul}
              <span className="-tracking-[5px]">———</span>
            </h1>
            <Image
              className="mt-40 w-1/2"
              src={
                "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01h2f7eqxg02fmae8nj3vrmmp2.jpg"
              }
              alt="image-2"
              width={1000}
              height={1000}
            />
          </div>
          <div className="basis-1/2 font-lora pr-10 pt-10 pl-5">
            <div className="flex flex-col gap-6">
              <p>{dataArtikel["paragraf_1_1"]}</p>
              <p>{dataArtikel["paragraf_1_2"]}</p>
            </div>
            <Image
              className="mt-24 w-3/4"
              src={
                "https://asset.kompas.com/crops/M8C4O-OaZdKMqfPPuL9oFwv6S-0=/170x166:1164x828/750x500/data/photo/2023/08/26/64e99d6f9691d.jpg"
              }
              alt="image-1"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="flex bg-slate-50">
          <div className="basis-1/2 pl-10 pt-20 pr-5 flex flex-col">
            <h1 className="font-lora text-3xl italic ">
              &quot;{dataArtikel.kutipan_1}&quot;
              <span className="-tracking-[5px]">———</span>
            </h1>
            <div className="self-center p-20 font-lora text-sm font-light flex flex-col gap-16">
              <p>{dataArtikel["paragraf_2_1"]}</p>
              <p>{dataArtikel["paragraf_2_2"]}</p>
            </div>
          </div>
          <div className="basis-1/2 font-lora pr-10 py-20 pl-5">
            <Image
              src={
                "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01gp0qp10r5stfb0g6cn0grv5m.jpg"
              }
              alt="image-3"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col py-20 px-32 gap-8">
            <h1 className="font-lora font-semibold uppercase">
              {dataArtikel.subjudul}
              <span className="-tracking-[5px]">———</span>
            </h1>
            <p className="font-lora text-3xl">{dataArtikel["paragraf_3_1"]}</p>
          </div>
          <div className="flex flex-row p-6 pr-44 gap-16">
            <Image
              className="w-1/2"
              src={
                "https://thumb.viva.co.id/media/frontend/thumbs3/2017/01/23/5885f8f58d59c-wiji-thukul_665_374.jpg"
              }
              alt="image-4"
              width={1000}
              height={1000}
            />
            <div className="font-lora text-sm w-1/2 flex flex-col gap-4">
              <p className="">{dataArtikel["paragraf_3_2"]}</p>
              <p className="">{dataArtikel["paragraf_3_3"]}</p>
            </div>
          </div>
        </div>
        <div className="h-screen w-full flex justify-center items-center ">
          <p className="text-5xl font-lora w-3/4 relative">
            <span className="text-7xl">
              <MdFormatQuote />
            </span>
            {dataArtikel.kutipan_2}
            <span className="h-1 w-32 border-b-2 border-black absolute -bottom-8 right-10"></span>
          </p>
        </div>
      </main>
    </div>
  );
}
