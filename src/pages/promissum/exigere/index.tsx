import React from "react";
import { Input } from "@/src/components/ui";
import { Label } from "@/src/components/ui/label";
import { cn } from "@/src/lib/utils";
import { Textarea } from "@/src/components/ui/textarea";

export default function ExigerePage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div
      className="my-28 mx-10 bg-slate-50 border border-zinc-900"
      style={{ boxShadow: "5px 5px 0 #000" }}
    >
      <div className="flex flex-col w-fit mx-auto py-5 items-center">
        <h1 className="text-5xl uppercase font-lora">Tagih Janji</h1>
        <p className="text-zinc-600 font-poppins font-light italic">
          Exigere Promissum
        </p>
      </div>
      <form className="my-8 font-lora px-12 py-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className="w-3/4">
            <Label className="-mb-3 text-lg" htmlFor="penulis">
              Penulis
            </Label>
            <Label className="text-xs italic text-zinc-500" htmlFor="penulis">
              Author
            </Label>
            <Input id="penulis" placeholder="Wiji Thukul" type="text" />
          </LabelInputContainer>
          <LabelInputContainer className="w-3/4">
            <Label className="-mb-3 text-lg" htmlFor="domisili">
              Domisili
            </Label>
            <Label className="text-xs italic text-zinc-500" htmlFor="domisili">
              Domicile
            </Label>
            <Input id="domisili" placeholder="Blitar, Indonesia" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label className="-mb-3 text-lg" htmlFor="judul">
            Judul
          </Label>
          <Label className="text-xs italic text-zinc-500" htmlFor="judul">
            Title
          </Label>
          <Input
            id="judul"
            placeholder="10 Tahun Janji Jokowi, Wiji Thukul Tak Kunjung Ditemukan"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="-mb-3 text-lg" htmlFor="paragraf_1_1">
            Paragraf pertama, bagian 1
          </Label>
          <Label className="text-xs italic text-zinc-500" htmlFor="paragraf_1_1">
            First paragraph, section 1
          </Label>
          <Textarea
            id="paragraf_1_1"
            placeholder="Presiden Joko Widodo pernah berjanji akan menuntaskan kasus pelanggaran hak asasi manusia pada 1998, termasuk mengusut kasus hilangnya Wiji Thukul."
            rows={3}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="-mb-3 text-lg" htmlFor="paragraf_1_2">
            Paragraf pertama, bagian 2
          </Label>
          <Label className="text-xs italic text-zinc-500" htmlFor="paragraf_1_2">
            First paragraph, section 2
          </Label>
          <Textarea
            id="paragraf_1_2"
            placeholder={`"Harus ditemukan. Harus jelas. Bisa ketemu hidup atau meninggal," kata Jokowi pada 9 Juni 2014 seperti diwartakan Kompas.com. "Wiji Thukul itu, saya sangat kenal baik. Dia kan orang Solo. Anak-istrinya saya kenal. Puisi-puisinya saya juga tahu," ujarnya. Namun, sepuluh tahun berlalu dan ucapan Jokowi tak kunjung terealisasi."`}
            rows={5}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="-mb-3 text-lg" htmlFor="paragraf_2_1">
            Paragraf kedua, bagian 1
          </Label>
          <Label className="text-xs italic text-zinc-500" htmlFor="paragraf_2_1">
            Second paragraph, section 1
          </Label>
          <Textarea
            id="paragraf_2_1"
            placeholder="Penyair sekaligus aktivis yang lantang menyuarakan kritik terhadap rezim Orde Baru tersebut, lahir pada 26 Agustus 1963 dari keluarga penarik becak. Buku Seri Tempo Wiji Thukul (2013) menuliskan, semasa muda pria bernama asli Widji Widodo ini berhenti sekolah agar bekerja membantu orangtuanya, sehingga adik-adiknya bisa melanjutkan sekolah. Ia menggelandang, mendirikan grup teater, mengamen puisi dari satu kota ke kota lainnya, lalu memantapkan diri sebagai aktivis pembela buruh. Thukul berada di barisan massa aksi 15.000 buruh pabrik garmen PT Sri Rejeki Isman (Sritex) di Desa Jetis, Sukoharjo, Solo yang mogok kerja menuntut kenaikan upah."
            rows={5}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="-mb-3 text-lg" htmlFor="paragraf_2_2">
            Paragraf kedua, bagian 2
          </Label>
          <Label className="text-xs italic text-zinc-500" htmlFor="paragraf_2_2">
            Second paragraph, section 2
          </Label>
          <Textarea
            id="paragraf_2_2"
            placeholder={`Ia juga terlibat dalam aksi demo di Kedungombo dan barisan demonstrasi besar di Solo lainnya. Saat berdemo bersama buruh Sritex, Thukul tertangkap dan dihajar aparat. Mata kanannya bengkak dan membiru, sampai terancam buta. Kondisi matanya membaik usai dioperasi di sebuah rumah sakit mata di Yogyakarta beberapa bulan kemudian. Meski belum pulih sepenuhnya, Thukul nekat hijrah ke Jakarta untuk mengikuti Deklarasi Partai Rakyat Demokratik (PRD) di kantor Yayasan Lembaga Bantuan Hukum Indonesia pada 22 Juli 1996.`}
            rows={5}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="-mb-3 text-lg" htmlFor="subjudul">
            Subjudul
          </Label>
          <Label className="text-xs italic text-zinc-500" htmlFor="subjudul">
            Subtitle
          </Label>
          <Input
            id="subjudul"
            placeholder="Widji Thukul Masuk dalam Keppres"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="-mb-3 text-lg" htmlFor="paragraf_3_1">
            Paragraf ketiga, bagian 1
          </Label>
          <Label className="text-xs italic text-zinc-500" htmlFor="paragraf_3_1">
            Third paragraph, section 1
          </Label>
          <Textarea
            id="paragraf_3_1"
            placeholder="Sebelumnya, Presiden Jokowi menandatangani Keputusan Presiden (Keppres) Nomor 17 Tahun 2022 Tentang Pembentukan Tim Penyelesaian Nonyudisial Pelanggaran Hak Asasi Manusia (HAM) berat masa lalu. Keppres ini diteken Jokowi pada 26 Agustus 2022."
            rows={3}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="-mb-3 text-lg" htmlFor="paragraf_3_2">
            Paragraf ketiga, bagian 2
          </Label>
          <Label className="text-xs italic text-zinc-500" htmlFor="paragraf_3_2">
            Third paragraph, section 2
          </Label>
          <Textarea
            id="paragraf_3_2"
            placeholder={`Lalu pada awal 2023, Presiden Jokowi menerima laporan akhir pelaksanaan tugas dan rekomendasi pelanggaran HAM berat di masa lalu. Laporan itu sebelumnya diterima Menkopolhukam Mahfud MD dari Tim Pelaksana Penyelesaian Nonyudisial Pelanggaran HAM yang Berat di Masa Lalu (PPHAM).`}
            rows={5}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="-mb-3 text-lg" htmlFor="paragraf_3_3">
            Paragraf ketiga, bagian 3
          </Label>
          <Label className="text-xs italic text-zinc-500" htmlFor="paragraf_3_3">
            Third paragraph, section 3
          </Label>
          <Textarea
            id="paragraf_3_3"
            placeholder="Jokowi menjabarkan ada 12 peristiwa masuk dalam pelanggaran HAM. Di antaranya adalah Peristiwa Kerusuhan Mei 1998 dan Wiji Thukul hilang saat memperjuangkan reformasi."
            rows={5}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="-mb-3 text-lg" htmlFor="kutipan_1">
            Kutipan Pertama
          </Label>
          <Label className="text-xs italic text-zinc-500" htmlFor="kutipan_1">
            First Quote
          </Label>
          <Textarea
            id="kutipan_1"
            placeholder={`"seratus lubang kakus lebih berarti bagiku ketimbang mulut besarmu"`}
            rows={2}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="-mb-3 text-lg" htmlFor="kutipan_2">
            Kutipan Kedua
          </Label>
          <Label className="text-xs italic text-zinc-500" htmlFor="kutipan_2">
            Second Quote
          </Label>
          <Textarea
            id="kutipan_2"
            placeholder="Janji 9 tahun itu dimuat di beberapa media massa. Namun, saat ini, menurut Tri Wahyu, janji Jokowi mencari dan menemukan Wiji Thukul ternyata palsu."
            rows={2}
          />
        </LabelInputContainer>

        <button className="font-lora inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Unggah Sekarang
        </button>

        {/* <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              OnlyFans
            </span>
            <BottomGradient />
          </button>
        </div> */}
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
