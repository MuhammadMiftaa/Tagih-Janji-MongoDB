import { ArticleType } from "@/types/ArticleType";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { MdFormatQuote } from "react-icons/md";

export async function getServerSideProps() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/article`
  ).then((res) => res.json());
  return { props: { data } };
}

export default function ArticlePage(props: { data: ArticleType[] }) {
  // const { query } = useRouter();
  // console.log(query.article);

  // const article = props.data.find((article) => article.id === parseInt(query.article));

  return (
    <main className="py-32">
      <div className="flex flex-row pb-20">
        <div className=" basis-1/2 pl-10 pt-10 pr-5 flex flex-col">
          <h1 className="uppercase font-lora text-4xl">
            10 Tahun Janji Jokowi, Wiji Thukul Tak Kunjung Ditemukan{" "}
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
          <p>
            Presiden Joko Widodo pernah berjanji akan menuntaskan kasus
            pelanggaran hak asasi manusia pada 1998, termasuk mengusut kasus
            hilangnya Wiji Thukul. <br /> <br /> &quot;Harus ditemukan. Harus
            jelas. Bisa ketemu hidup atau meninggal,&quot; kata Jokowi pada 9
            Juni 2014 seperti diwartakan Kompas.com. &quot;Wiji Thukul itu, saya
            sangat kenal baik. Dia kan orang Solo. Anak-istrinya saya kenal.
            Puisi-puisinya saya juga tahu,&quot; ujarnya. Namun, sepuluh tahun
            berlalu dan ucapan Jokowi tak kunjung terealisasi.
          </p>
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
            &quot;seratus lubang kakus lebih berarti bagiku ketimbang mulut
            besarmu&quot;<span className="-tracking-[5px]">———</span>
          </h1>
          <div className="self-center p-20 font-lora text-sm font-light flex flex-col gap-16">
            <p>
              Penyair sekaligus aktivis yang lantang menyuarakan kritik terhadap
              rezim Orde Baru tersebut, lahir pada 26 Agustus 1963 dari keluarga
              penarik becak. Buku Seri Tempo Wiji Thukul (2013) menuliskan,
              semasa muda pria bernama asli Widji Widodo ini berhenti sekolah
              agar bekerja membantu orangtuanya, sehingga adik-adiknya bisa
              melanjutkan sekolah. Ia menggelandang, mendirikan grup teater,
              mengamen puisi dari satu kota ke kota lainnya, lalu memantapkan
              diri sebagai aktivis pembela buruh. Thukul berada di barisan massa
              aksi 15.000 buruh pabrik garmen PT Sri Rejeki Isman (Sritex) di
              Desa Jetis, Sukoharjo, Solo yang mogok kerja menuntut kenaikan
              upah.{" "}
            </p>
            <p>
              {" "}
              Ia juga terlibat dalam aksi demo di Kedungombo dan barisan
              demonstrasi besar di Solo lainnya. Saat berdemo bersama buruh
              Sritex, Thukul tertangkap dan dihajar aparat. Mata kanannya
              bengkak dan membiru, sampai terancam buta. Kondisi matanya membaik
              usai dioperasi di sebuah rumah sakit mata di Yogyakarta beberapa
              bulan kemudian. Meski belum pulih sepenuhnya, Thukul nekat hijrah
              ke Jakarta untuk mengikuti Deklarasi Partai Rakyat Demokratik
              (PRD) di kantor Yayasan Lembaga Bantuan Hukum Indonesia pada 22
              Juli 1996.
            </p>
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
            Widji Thukul Masuk dalam Keppres
            <span className="-tracking-[5px]">———</span>
          </h1>
          <p className="font-lora text-3xl">
            Sebelumnya, Presiden Jokowi menandatangani Keputusan Presiden
            (Keppres) Nomor 17 Tahun 2022 Tentang Pembentukan Tim Penyelesaian
            Nonyudisial Pelanggaran Hak Asasi Manusia (HAM) berat masa lalu.
            Keppres ini diteken Jokowi pada 26 Agustus 2022.
          </p>
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
            <p className="">
              Lalu pada awal 2023, Presiden Jokowi menerima laporan akhir
              pelaksanaan tugas dan rekomendasi pelanggaran HAM berat di masa
              lalu. Laporan itu sebelumnya diterima Menkopolhukam Mahfud MD dari
              Tim Pelaksana Penyelesaian Nonyudisial Pelanggaran HAM yang Berat
              di Masa Lalu (PPHAM).
            </p>
            <p className="">
              Jokowi menjabarkan ada 12 peristiwa masuk dalam pelanggaran HAM.
              Di antaranya adalah Peristiwa Kerusuhan Mei 1998 dan Wiji Thukul
              hilang saat memperjuangkan reformasi
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen w-screen flex justify-center items-center ">
        <p className="text-5xl font-lora w-3/4 relative">
          <span className="text-7xl">
            <MdFormatQuote />
          </span>
          Janji 9 tahun itu dimuat di beberapa media massa. Namun, saat ini,
          menurut Tri Wahyu, janji Jokowi mencari dan menemukan Wiji Thukul
          ternyata palsu.
          <span className="h-1 w-32 border-b-2 border-black absolute -bottom-8 right-10"></span>
        </p>
      </div>
    </main>
  );
}
