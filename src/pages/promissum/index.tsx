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
import { AuroraBackground } from "@/src/components/ui/aurora-background";
import { motion } from "framer-motion";
import { FiEdit3 } from "react-icons/fi";
import { AnimatedTooltip } from "@/src/components/ui/animated-tooltip";

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

  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  return (
    <div className="pt-40 pb-20 px-48 relative">
      <h1 className="font-lora text-6xl font-light mb-5 block">
        Tagih Janji Pejabat:{" "}
      </h1>
      <Highlight className="font-lora text-6xl font-light mt-5 italic inline-block from-red to-white text-white from-50%">
        Dari Ucapan ke Kenyataan.
      </Highlight>
      <div className="mt-20 py-10 flex flex-col-reverse gap-7 relative">
        {dataArtikel.map((artikel) => {
          const date = new Date(artikel.tanggal);
          const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
          };
          const formattedDate = date.toLocaleDateString("en-US", options);
          return (
            <div key={artikel.judul}>
              <div className="flex w-full gap-10 group mb-5">
                <h1 className="font-lora text-zinc-500 text-xs basis-1/5 ">
                  {formattedDate}
                </h1>
                <Link
                  href={"/promissum/" + artikel.judul.replace(/\s/g, "-")}
                  className="basis-4/5 flex flex-col gap-3 -mt-2 group"
                >
                  <p className="font-lora text-2xl line-clamp-2 h-fit group-hover:underline group-hover:cursor-pointer">
                    {artikel.judul}
                  </p>
                  <p className="font-lora text-zinc-500 text-sm line-clamp-4">
                    {artikel["paragraf_1_1"] + " " + artikel["paragraf_1_2"]}
                  </p>
                  <p className="font-lora uppercase text-zinc-700 text-sm line-clamp-1">
                    {artikel.penulis}
                  </p>
                </Link>
                {/* <Image
                  className=" basis-2/5"
                  src={
                    "https://asset.kompas.com/crops/M8C4O-OaZdKMqfPPuL9oFwv6S-0=/170x166:1164x828/750x500/data/photo/2023/08/26/64e99d6f9691d.jpg"
                  }
                  alt={artikel.judul}
                  width={200}
                  height={200}
                /> */}
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      {/* <AnimatedTooltip item={{id: 1, name: "Tulis Artikel", designation: "disini"}} /> */}
      <Link href={"/promissum/exigere"} className="flex flex-row items-center justify-center mb-10 w-fit fixed bottom-10 right-1/2 -translate-x-[50%]">
        <AnimatedTooltip item={{id: 1, name: "Tulis Artikel", designation: "disini", image: "https://www.svgrepo.com/show/6755/edit.svg"}} />
      </Link>
    </div>
  );
}
