import { TracingBeam } from "@/src/components/ui/tracing-beam";
import client from "@/src/lib/mongodb";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";
import { twMerge } from "tailwind-merge";

type ConnectionStatus = {
  isConnected: boolean;
};

export const getServerSideProps: GetServerSideProps<ConnectionStatus> = async (
  context
) => {
  const param = context.query.janji;
  try {
    await client.connect(); // `await client.connect()` will use the default database passed in the MONGODB_URI

    const janji = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/3janji/${param}`
    ).then((res) => res.json());

    return {
      props: {
        janji: janji.data,
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

export default function JanjiPrabowoGibranPage(props: {
  janji: {
    _id: string;
    judul: string;
    sumber: string;
    tanggal: string;
    gambar: string;
    gif: string;
    konten: {
      judul: string;
      deskripsi: string;
    }[];
  }, isConnected: ConnectionStatus
}) {  

  const pathname = usePathname()
  const {query} = useRouter()

  return (
    <div className="relative w-full bg-slate-50 pt-20">
      <ul
        className="fixed text-sm font-lora flex flex-col gap-3 right-0 w-56 bg-slate-50 top-0 bottom-0 p-6"
        style={{ boxShadow: "-.1px 0px 5px #ccc" }}
      >
        <h1 className="text-xl uppercase font-semibold pb-4">
          Table of Contents
        </h1>
        <li className="">
          <a href="#pernyataan-janji">Pernyataan Janji</a>
        </li>
        <li className="">
          <a href="#latar-belakang-dan-konteks">Latar Belakang dan Konteks</a>
        </li>
        <li className="">
          <a href="#rencana-implementasi">Rencana Implementasi</a>
        </li>
        <li className="">
          <a href="#perkembangan-terkini">Perkembangan Terkini</a>
        </li>
        <li className="">
          <a href="#dampak-yang-diharapkan">Dampak yang Diharapkan</a>
        </li>
        <li className="">
          <a href="#pendapat-dan-tanggapan-publik">
            Pendapat dan Tanggapan Publik
          </a>
        </li>
        <li className="">
          <a href="#tantangan-dan-kritik">Tantangan dan Kritik</a>
        </li>
      </ul>
      <TracingBeam className="">
        {props.janji.konten.map((item, idx) => (
          <div
            className="max-w-3xl mx-auto antialiased py-12 relative"
            key={idx}
            id={
              idx === 0
                ? "pernyataan-janji"
                : item.judul.toLowerCase().replace(/ /g, "-")
            }
          >
            <h1 className="font-lora text-5xl mb-4">{idx === 0 ? props.janji.judul : item.judul}</h1>
            {idx === 0 && (
              <Image
                className="my-10 rounded"
                src={
                  "https://sinpo.id/storage/2024/08/presiden-ri-terpilih-prabowo-tegaskan-komitmen-pembangunan-ikn-13082024-100820.jpg"
                }
                alt="pembangunan-ikn"
                width={1000}
                height={1000}
              />
            )}
            <p className="font-lora text-zinc-800 text-lg text-justify">
              {item.deskripsi}{" "}
            </p>
          </div>
        ))}
      </TracingBeam>
    </div>
  );
}

const data = [
  {
    judul: "Pernyataan Janji",
    konten:
      'Prabowo Subianto menjanjikan bakal beri makan siang gratis untuk siswa sekolah, termasuk ibu hamil sebagai langkah pengentasan stunting. "Strategi kita adalah memberikan makan siang kepada seluruh anak Indonesia termasuk mereka masih dalam kandungan ibunya. Ibu hamil kita tunjang dan ini adalah strategi jangka panjang menghilangkan stunting menghilangkan dan mengurangi beban rakyat miskin" kata Prabowo dalam acara Sarasehan 100 Ekonom 2023 yang digelar INDEF bersama CNBC Indonesia, Rabu (8/11/2023). Ia menjelaskan bahwa program makan gratis untuk anak harus memperhitungkan kemampuan anggaran pemerintah. "Kita hitung kapasitas sekarang baru kasih satu kali makan, ada snack-nya, ada susu. ini sebuah prestasi menurut saya." tutur Prabowo. Prabowo menjelaskan program makan siang gratis bagi seluruh pelajar dan ibu hamil diperkirakan membutuhkan anggaran hingga Rp 400 triliun. Prabowo Subianto menjanjikan bakal beri makan siang gratis untuk siswa sekolah, termasuk ibu hamil sebagai langkah pengentasan stunting. "Strategi kita adalah memberikan makan siang kepada seluruh anak Indonesia termasuk mereka masih dalam kandungan ibunya. Ibu hamil kita tunjang dan ini adalah strategi jangka panjang menghilangkan stunting menghilangkan dan mengurangi beban rakyat miskin" kata Prabowo dalam acara Sarasehan 100 Ekonom 2023 yang digelar INDEF bersama CNBC Indonesia, Rabu (8/11/2023). Ia menjelaskan bahwa program makan gratis untuk anak harus memperhitungkan kemampuan anggaran pemerintah. "Kita hitung kapasitas sekarang baru kasih satu kali makan, ada snack-nya, ada susu. ini sebuah prestasi menurut saya." tutur Prabowo. Prabowo menjelaskan program makan siang gratis bagi seluruh pelajar dan ibu hamil diperkirakan membutuhkan anggaran hingga Rp 400 triliun.',
  },
  {
    judul: "Latar Belakang dan Konteks",
    konten:
      "Indonesia masih menghadapi masalah malnutrisi dan stunting di kalangan anak-anak. Berdasarkan data Kementerian Kesehatan, sekitar 27,7% anak di bawah usia lima tahun mengalami stunting pada tahun 2023. Program makan siang gratis diharapkan dapat membantu mengurangi angka stunting dan meningkatkan kualitas hidup anak-anak, khususnya di daerah-daerah terpencil dan kurang mampu.",
  },
  {
    judul: "Rencana Implementasi",
    konten:
      "Program ini akan dimulai dengan sekolah-sekolah di daerah miskin dan terpencil pada tahun pertama, kemudian diperluas ke seluruh negeri. Pemerintah akan bekerjasama dengan kementerian terkait, pemerintah daerah, dan swasta untuk pengadaan dan distribusi makanan. Akan ada sistem pemantauan untuk memastikan bahwa makanan yang disediakan memenuhi standar gizi dan kebersihan yang ketat. Pemerintah juga berencana untuk mengintegrasikan program ini dengan program kesehatan lainnya, seperti pemeriksaan kesehatan rutin di sekolah.",
  },
  {
    judul: "Perkembangan Terkini",
    konten:
      "Pada 2024, beberapa pilot project program makan siang gratis telah dilaksanakan di beberapa provinsi, termasuk Nusa Tenggara Timur dan Papua. Hasil awal menunjukkan peningkatan signifikan dalam kehadiran siswa dan penurunan tingkat kekurangan gizi di daerah-daerah tersebut. Pemerintah terus melakukan evaluasi dan perbaikan untuk memastikan program berjalan lancar dan efektif.",
  },
  {
    judul: "Dampak yang Diharapkan",
    konten:
      "Program ini diharapkan dapat mengurangi angka malnutrisi dan stunting di kalangan anak-anak sekolah dasar hingga 15% dalam lima tahun pertama. Selain itu, peningkatan gizi yang lebih baik diharapkan dapat meningkatkan prestasi akademik dan kesehatan secara keseluruhan. Dengan demikian, diharapkan dapat memberikan dampak jangka panjang pada produktivitas dan kesejahteraan generasi muda Indonesia.",
  },
  {
    judul: "Pendapat dan Tanggapan Publik",
    konten:
      "Sebagian besar masyarakat dan organisasi kesehatan menyambut baik inisiatif ini sebagai langkah progresif untuk kesehatan publik. Namun, ada kritik mengenai biaya dan keberlanjutan program, terutama terkait anggaran pemerintah yang terbatas. Beberapa ahli juga mengingatkan agar program ini tidak mengabaikan aspek pendidikan dan pemberdayaan gizi bagi orang tua dan komunitas.",
  },
  {
    judul: "Tantangan dan Kritik",
    konten:
      "Tantangan terbesar adalah masalah logistik dan pendanaan. Memastikan distribusi makanan yang merata dan tepat waktu di seluruh pelosok Indonesia adalah tugas yang berat. Ada juga kekhawatiran tentang potensi korupsi dan penyalahgunaan dana. Kritikus juga menyoroti perlunya pendekatan holistik, yang mencakup pendidikan gizi untuk keluarga dan masyarakat, bukan hanya sekedar pemberian makanan.",
  },
];
