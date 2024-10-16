import Image from "next/image";
import { Inter } from "next/font/google";
import client from "@/src/lib/mongodb";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { AuroraBackground } from "@/src/components/ui/aurora-background";
import { HeroHighlight, Highlight } from "@/src/components/ui/hero-highlight";
import TypingAnimation from "@/src/components/magicui/typing-animation";
import { HoverEffect } from "@/src/components/ui/card-hover-effect";
import { MdFormatQuote } from "react-icons/md";
import { LinkPreview } from "@/src/components/ui/link-preview";
import TextReveal from "@/src/components/magicui/text-reveal";
import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";
import { JanjiPresidenType } from "../components/types/janjiPresiden";
import { JanjiType } from "../components/types/janji";
import { ConnectionStatus } from "../components/types/ConnectionStatus";
import useSWR from "swr";
import { useEffect, useState } from "react";

// SERVER SIDE RENDERING🤖
export const getServerSideProps: GetServerSideProps<
  ConnectionStatus
> = async () => {
  try {
    const data1 = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/janji-presiden`
    ).then((res) => res.json());

    const data2 = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/3janji`
    ).then((res) => res.json());

    return {
      props: {
        janji: data2.data,
        janjiPresiden: data1.data,
        isConnected: true,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};
// SERVER SIDE RENDERING🤖

export default function Home(props: {
  janji: JanjiType[];
  janjiPresiden: JanjiPresidenType[];
  isConnected: boolean;
}) {
  const { janji, janjiPresiden } = props;

  // CLIENT SIDE RENDERING🤖
  // const [janjiPresiden, setJanjiPresiden] = useState<JanjiPresidenType[]>([]);
  // const [janji, setJanji] = useState<JanjiType[]>([]);

  // const fetcher = (url: string) => fetch(url).then((res) => res.json());

  // const {
  //   isLoading: isLoading1,
  //   data: data1,
  //   error: error1,
  // } = useSWR("/api/janji-presiden", fetcher);
  // const {
  //   isLoading: isLoading2,
  //   data: data2,
  //   error: error2,
  // } = useSWR("/api/3janji", fetcher);

  // useEffect(() => {
  //   isLoading1 ? setJanjiPresiden([]) : setJanjiPresiden(data1.data);
  // }, [isLoading1, data1]);

  // useEffect(() => {
  //   isLoading2 ? setJanji([]) : setJanji(data2.data);
  // }, [isLoading2, data2]);
  // CLIENT SIDE RENDERING🤖

  return (
    <main>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-xl h-[] font-lora md:text-4xl font-bold dark:text-white text-center">
            Tagih <span className="text-cust-red">Janji</span>.
          </div>
        </motion.div>
      </AuroraBackground>
      <HeroHighlight data-aos="fade-in" aos-duration="100">
        <motion.h1
          data-aos="zoom-in"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-lg font-quicksand px-4 md:text-2xl lg:text-3xl text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto font-light"
        >
          Janji adalah utang, dan kami di sini untuk
          <br />
          <Highlight className="text-white font-medium dark:text-white from-cust-red from-50% to-white">
            mengingatkan.
          </Highlight>
        </motion.h1>
      </HeroHighlight>
      <div className="pt-16 bg-zinc-50">
        <div
          className="flex relative flex-col font-lora text-justify px-48 pb-20 pt-40 bg-cover bg-no-repeat bg-center after:content-[''] after:absolute after:top-0 after:h-72 after:bg-gradient-to-b after:right-0 after:left-0 after:from-white after:to-transparent before:content-[''] before:absolute before:bottom-0 before:top-0 before:opacity-50 before:bg-white before:right-0 before:left-0"
          style={{ backgroundImage: "url(/banner.jpeg)" }}
        >
          <h1
            className="font-bold text-3xl z-20"
            data-aos="fade-in"
            aos-duration="100"
            aos-delay="0"
          >
            Janji Politik, Berita Bohong, dan Politik Penyangkalan
          </h1>
          <p
            className="mt-7 z-20"
            data-aos="fade-in"
            aos-duration="100"
            aos-delay="100"
            style={{ textShadow: "1px 1px 1px #ccc" }}
          >
            Tahun politik 2024 merupakan momen bagi masyarakat Indonesia untuk
            memilih presiden dan wakil presiden serta calon anggota legislatif
            yang baru. Saat ini publik tengah antusias menyaksikan debat calon
            presiden dan calon wakil presiden sebagai sarana mengekspos
            visi-misi para kandidat tersebut.
          </p>
          <Image
            className="mt-12 self-center"
            src={
              "https://i.pinimg.com/564x/7f/89/c2/7f89c2381dd66402686f13021c974aad.jpg"
            }
            alt="banner"
            width={500}
            height={500}
            data-aos="fade-in"
            aos-duration="100"
            aos-delay="200"
          />
          <p
            className="font-poppins text-xs mb-12 self-center mt-2"
            data-aos="fade-in"
            aos-duration="100"
            aos-delay="200"
          >
            Source:{" "}
            <a
              href="https://i.pinimg.com/564x/7f/89/c2/7f89c2381dd66402686f13021c974aad.jpg"
              className="italic text-zinc-500"
            >
              https://i.pinimg.com/564x/7f/89/c2/7f89c2381dd66402686f13021c974aad.jpg
            </a>
          </p>
          <div className="z-20">
            <p className="my-3" style={{ textShadow: "1px 1px 1px #ccc" }}>
              Dalam hasil penelitian Centre for Strategic and International
              Studies (CSIS), Fernandes (2023) menyebutkan bahwa debat
              diperkirakan dapat memengaruhi terjadinya penggeseran dukungan
              pemilih pada kandidat yang sudah dipilih sebelum debat berlangsung
              atau untuk memoderasi, bahkan mengoreksi pilihan seseorang.
              Sementara di tingkat daerah juga bermunculan poster dan baliho
              kandidat calon anggota legislatif beserta janji-janji bombastis
              dan retorika manis guna menarik dukungan.
            </p>
            <p className="my-3" style={{ textShadow: "1px 1px 1px #ccc" }}>
              Meskipun debat dan penyampaian janji-janji dalam masa kampanye
              merupakan tahapan yang penting dalam proses politik, publik seakan
              dilanda amnesia terhadap apa yang dijanjikan para pemimpin
              terpilih pascapemilu. Hal ini mencerminkan lemahnya akuntabilitas
              politik pemimpin terhadap pemilihnya.
            </p>
            <p className="my-3" style={{ textShadow: "1px 1px 1px #ccc" }}>
              Selain itu, negara ini juga tidak mengenal sistem ”kontrak
              politik” yang mengikat pemimpin dengan konstituennya. Dalam
              kontrak tersebut, idealnya ada perjanjian bahwa pemimpin terpilih
              harus benar-benar mewujudkan apa yang sudah dijanjikannya.
            </p>
          </div>
        </div>
        <div className="bg-cust-yellow py-20">
          <TypingAnimation
            className="text-7xl px-48 text-left font-lora font-light text-black dark:text-white"
            text="Janji Presiden dan Wakil Presiden Terpilih."
          />
          <p className="font-lora px-48 text-2xl mt-10">
            Dari sekian banyak janji dan program Prabowo-Gibran di Pilpres 2024,
            terdapat tiga hal yang paling menonjol dan sering disampaikan oleh
            pasangan capres-cawapres tersebut.
          </p>
          <div className="px-48 py-8">
            {janji.map((item, i) => (
              <div className="my-20" key={item._id}>
                <h1 className="font-lora my-6 text-4xl font-semibold">
                  {item.judul}
                </h1>
                <div className={classGambar[i]}>
                  <div className="text relative z-50 font-lora group-hover:bottom-0 -bottom-28 duration-500">
                    <h1
                      className="font-bold text-xl md:text-3xl text-gray-50 relative"
                      style={{ textShadow: "3px 3px 5px #000" }}
                    >
                      {item.sumber} | {item.tanggal}
                    </h1>
                  </div>
                </div>
                <TextReveal
                  link={item.judul}
                  className="font-lora"
                  text={item.konten[0].deskripsi.substring(0, 900)}
                />
              </div>
            ))}
          </div>
          <div className=" py-20 w-full bg-zinc-950 font-lora">
            <h1 className="text-5xl my-5 text-center font-light text-white">
              Janji-janji lengkap dari{" "}
              <Highlight className="text-black font-medium dark:text-white from-cust-yellow to-zinc-950 from-50%">
                Prabowo Gibran
              </Highlight>
            </h1>
            <div className="max-w-5xl mx-auto px-8">
              <HoverEffect items={janjiPresiden} />
            </div>
          </div>
          <div className="px-48 flex justify-center items-center h-[40rem] flex-col relative">
            <div className="text-neutral-900 font-lora dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
              <span className="text-7xl">
                <MdFormatQuote />
              </span>
              Janji-janji besar, seperti melanjutkan pembangunan{" "}
              <LinkPreview
                imageSrc="/gif/pembangunan-ikn.gif"
                isStatic={true}
                url="/janji-prabowo-gibran/melanjutkan-pembangunan-ikn"
                className="font-bold"
              >
                Ibu Kota Negara (IKN) Nusantara
              </LinkPreview>
              , mendorong{" "}
              <LinkPreview
                imageSrc="/gif/hilirisasi.gif"
                isStatic={true}
                url="/janji-prabowo-gibran/hilirisasi"
                className="font-bold"
              >
                hilirisasi
              </LinkPreview>{" "}
              industri untuk meningkatkan nilai tambah sumber daya alam, serta
              menyediakan{" "}
              <LinkPreview
                imageSrc="/gif/makan-siang-gratis.gif"
                isStatic={true}
                url="/janji-prabowo-gibran/makan-siang-gratis-di-sekolah"
                className="font-bold"
              >
                makan siang gratis
              </LinkPreview>{" "}
              di sekolah-sekolah demi masa depan generasi penerus, adalah
              cerminan dari visi untuk Indonesia yang lebih maju dan sejahtera.{" "}
              <br />
              <br />
              Kita semua memiliki peran dalam memastikan janji-janji ini bukan
              sekadar kata-kata, tetapi menjadi kenyataan yang membawa perubahan
              nyata bagi bangsa.
            </div>
            <div className="h-1 w-32 border-b-2 border-black absolute bottom-7 right-72"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

const classGambar = [
  "group w-full cursor-pointer overflow-hidden relative card h-[27rem] rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 bg-[url(https://hypeabis.id/assets/content/20230425154852000000istanaNyoman.jpg)] bg-cover before:bg-[url(/gif/pembangunan-ikn.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1] hover:bg-[url(/gif/pembangunan-ikn.gif)] hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 transition-all duration-500",
  "group w-full cursor-pointer overflow-hidden relative card h-[27rem] rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 bg-[url(https://cdn.visiteliti.com/article/2021-12/28/POLJoU9HQYgkkesuTJU7_1640662510.jpeg)] bg-cover before:bg-[url(/gif/hilirisasi.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1] hover:bg-[url(/gif/hilirisasi.gif)] hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 transition-all duration-500",
  "group w-full cursor-pointer overflow-hidden relative card h-[27rem] rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 bg-[url(https://assets.ladiestory.id/gallery/16582055731130052815-makan-siang.jpg)] bg-cover before:bg-[url(/gif/makan-siang-gratis.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1] hover:bg-[url(/gif/makan-siang-gratis.gif)] hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 transition-all duration-500",
];
