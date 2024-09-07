import React, { useState } from "react";
import { Input } from "@/src/components/ui";
import { Label } from "@/src/components/ui/label";
import { cn } from "@/src/lib/utils";
import { Textarea } from "@/src/components/ui/textarea";
import { useRouter } from "next/router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GoPlus } from "react-icons/go";

const postFormSchema = z.object({
  penulis: z.string(),
  lokasi: z.string(),
  judul: z
    .string()
    .min(30, "Judulnya masih kurang panjang, coba tambahin lagi ya!")
    .max(150, "Judulnya udah terlalu panjang nih, ringkas sedikit dong!"),
  paragraf_1_1: z
    .string()
    .min(
      80,
      "Paragraf pertama kamu terlalu singkat, coba lebih eksplorasi lagi!"
    )
    .max(300, "Ups, paragraf pertama kamu kepanjangan! Potong sedikit, ya!"),
  paragraf_1_2: z
    .string()
    .min(
      100,
      "Paragraf kedua ini masih kurang mendalam, tambahin sedikit lagi!"
    )
    .max(400, "Paragraf kedua kamu udah cukup panjang, coba ringkas sedikit!"),
  paragraf_2_1: z
    .string()
    .min(
      200,
      "Ceritanya masih kurang lengkap di paragraf ketiga, bisa ditambah lagi!"
    )
    .max(
      700,
      "Paragraf ketiga kamu udah kebanyakan nih, coba dipotong dikit ya!"
    ),
  paragraf_2_2: z
    .string()
    .min(300, "Paragraf keempat masih kurang detail nih, coba diperjelas lagi!")
    .max(
      750,
      "Wah, paragraf keempat kamu udah kebanyakan cerita! Potong sedikit aja."
    ),
  subjudul: z
    .string()
    .min(
      20,
      "Subjudulnya terlalu singkat nih, tambahin sedikit biar lebih menarik!"
    )
    .max(120, "Subjudulnya udah terlalu panjang, yuk diringkas biar padat!"),
  paragraf_3_1: z
    .string()
    .min(
      100,
      "Paragraf kelima masih terlalu singkat, tambah info menarik lagi yuk!"
    )
    .max(
      400,
      "Paragraf kelima udah terlalu panjang, bisa dipersingkat lagi ya!"
    ),
  paragraf_3_2: z
    .string()
    .min(100, "Paragraf keenam ini masih kurang detail, coba tambahin lagi!")
    .max(
      600,
      "Paragraf keenam kamu udah terlalu panjang nih, ringkas sedikit ya!"
    ),
  paragraf_3_3: z
    .string()
    .min(
      100,
      "Paragraf ketujuh masih terlalu pendek, coba tambahin biar lebih jelas!"
    )
    .max(
      600,
      "Paragraf ketujuh kamu udah cukup panjang, coba dipersingkat ya!"
    ),
  kutipan_1: z
    .string()
    .min(
      20,
      "Kutipan pertama ini masih terlalu singkat, tambah sedikit biar keren!"
    )
    .max(
      100,
      "Kutipan pertama udah terlalu panjang, ringkas dikit aja biar catchy!"
    ),
  kutipan_2: z
    .string()
    .min(20, "Kutipan kedua masih terlalu singkat, tambahin lagi yuk!")
    .max(
      150,
      "Kutipan kedua udah terlalu panjang, coba dipadatkan biar lebih mengena!"
    ),
});

type PostFormSchema = z.infer<typeof postFormSchema>;

export default function ExigerePage() {
  const { push } = useRouter();

  const [tags, setTags] = useState<string[]>([]);
  const [references, setReferences] = useState<string[]>([]);
  const addTag = () => setTags([...tags, ""]);
  const addReferences = () => setReferences([...references, ""]);

  const { register, handleSubmit, formState } = useForm<PostFormSchema>({
    resolver: zodResolver(postFormSchema),
  });

  const onSubmit = handleSubmit(async (values) => {
    const result = await fetch("/api/post-artikel", {
      method: "POST",
      body: JSON.stringify({ ...values, tags, referensi: references }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTags([]);
    setReferences([]);

    if (result.status === 201) {
      push("/promissum");
    } else {
      push("/promissum/exigere");
    }
  });

  return (
    <div
      className="my-28 mx-10 bg-slate-50 border border-zinc-900"
      style={{ boxShadow: "15px -15px 0 #000" }}
    >
      <div className="flex flex-col w-fit mx-auto py-5 items-center">
        <h1 className="text-5xl uppercase font-lora">Tagih Janji</h1>
        <p className="text-zinc-600 font-poppins font-light italic">
          Exigere Promissum
        </p>
      </div>
      <form className="my-8 font-lora px-12 py-8" onSubmit={onSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className="w-3/4">
            <Label className="-mb-3 text-lg" htmlFor="penulis">
              Penulis
            </Label>
            <Label className="text-xs italic text-zinc-500" htmlFor="penulis">
              Author
            </Label>
            <Input
              id="penulis"
              placeholder="Wiji Thukul"
              type="text"
              {...register("penulis")}
            />
          </LabelInputContainer>
          <LabelInputContainer className="w-3/4">
            <Label className="-mb-3 text-lg" htmlFor="lokasi">
              Domisili
            </Label>
            <Label className="text-xs italic text-zinc-500" htmlFor="lokasi">
              Domicile
            </Label>
            <Input
              id="lokasi"
              placeholder="Blitar, Indonesia"
              type="text"
              {...register("lokasi")}
            />
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
            {...register("judul")}
          />
          {formState.errors.judul && (
            <p className="text-sm text-red italic">
              {formState.errors.judul.message}
            </p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="-mb-3 text-lg" htmlFor="paragraf_1_1">
            Paragraf pertama, bagian 1
          </Label>
          <Label
            className="text-xs italic text-zinc-500"
            htmlFor="paragraf_1_1"
          >
            First paragraph, section 1
          </Label>
          <Textarea
            id="paragraf_1_1"
            placeholder="Presiden Joko Widodo pernah berjanji akan menuntaskan kasus pelanggaran hak asasi manusia pada 1998, termasuk mengusut kasus hilangnya Wiji Thukul."
            rows={3}
            {...register("paragraf_1_1")}
          />
          {formState.errors.paragraf_1_1 && (
            <p className="text-sm text-red italic">
              {formState.errors.paragraf_1_1.message}
            </p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="-mb-3 text-lg" htmlFor="paragraf_1_2">
            Paragraf pertama, bagian 2
          </Label>
          <Label
            className="text-xs italic text-zinc-500"
            htmlFor="paragraf_1_2"
          >
            First paragraph, section 2
          </Label>
          <Textarea
            id="paragraf_1_2"
            placeholder={`"Harus ditemukan. Harus jelas. Bisa ketemu hidup atau meninggal," kata Jokowi pada 9 Juni 2014 seperti diwartakan Kompas.com. "Wiji Thukul itu, saya sangat kenal baik. Dia kan orang Solo. Anak-istrinya saya kenal. Puisi-puisinya saya juga tahu," ujarnya. Namun, sepuluh tahun berlalu dan ucapan Jokowi tak kunjung terealisasi."`}
            rows={5}
            {...register("paragraf_1_2")}
          />
          {formState.errors.paragraf_1_2 && (
            <p className="text-sm text-red italic">
              {formState.errors.paragraf_1_2.message}
            </p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="-mb-3 text-lg" htmlFor="paragraf_2_1">
            Paragraf kedua, bagian 1
          </Label>
          <Label
            className="text-xs italic text-zinc-500"
            htmlFor="paragraf_2_1"
          >
            Second paragraph, section 1
          </Label>
          <Textarea
            id="paragraf_2_1"
            placeholder="Penyair sekaligus aktivis yang lantang menyuarakan kritik terhadap rezim Orde Baru tersebut, lahir pada 26 Agustus 1963 dari keluarga penarik becak. Buku Seri Tempo Wiji Thukul (2013) menuliskan, semasa muda pria bernama asli Widji Widodo ini berhenti sekolah agar bekerja membantu orangtuanya, sehingga adik-adiknya bisa melanjutkan sekolah. Ia menggelandang, mendirikan grup teater, mengamen puisi dari satu kota ke kota lainnya, lalu memantapkan diri sebagai aktivis pembela buruh. Thukul berada di barisan massa aksi 15.000 buruh pabrik garmen PT Sri Rejeki Isman (Sritex) di Desa Jetis, Sukoharjo, Solo yang mogok kerja menuntut kenaikan upah."
            rows={5}
            {...register("paragraf_2_1")}
          />
          {formState.errors.paragraf_2_1 && (
            <p className="text-sm text-red italic">
              {formState.errors.paragraf_2_1.message}
            </p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="-mb-3 text-lg" htmlFor="paragraf_2_2">
            Paragraf kedua, bagian 2
          </Label>
          <Label
            className="text-xs italic text-zinc-500"
            htmlFor="paragraf_2_2"
          >
            Second paragraph, section 2
          </Label>
          <Textarea
            id="paragraf_2_2"
            placeholder={`Ia juga terlibat dalam aksi demo di Kedungombo dan barisan demonstrasi besar di Solo lainnya. Saat berdemo bersama buruh Sritex, Thukul tertangkap dan dihajar aparat. Mata kanannya bengkak dan membiru, sampai terancam buta. Kondisi matanya membaik usai dioperasi di sebuah rumah sakit mata di Yogyakarta beberapa bulan kemudian. Meski belum pulih sepenuhnya, Thukul nekat hijrah ke Jakarta untuk mengikuti Deklarasi Partai Rakyat Demokratik (PRD) di kantor Yayasan Lembaga Bantuan Hukum Indonesia pada 22 Juli 1996.`}
            rows={5}
            {...register("paragraf_2_2")}
          />
          {formState.errors.paragraf_2_2 && (
            <p className="text-sm text-red italic">
              {formState.errors.paragraf_2_2.message}
            </p>
          )}
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
            {...register("subjudul")}
          />
          {formState.errors.subjudul && (
            <p className="text-sm text-red italic">
              {formState.errors.subjudul.message}
            </p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="-mb-3 text-lg" htmlFor="paragraf_3_1">
            Paragraf ketiga, bagian 1
          </Label>
          <Label
            className="text-xs italic text-zinc-500"
            htmlFor="paragraf_3_1"
          >
            Third paragraph, section 1
          </Label>
          <Textarea
            id="paragraf_3_1"
            placeholder="Sebelumnya, Presiden Jokowi menandatangani Keputusan Presiden (Keppres) Nomor 17 Tahun 2022 Tentang Pembentukan Tim Penyelesaian Nonyudisial Pelanggaran Hak Asasi Manusia (HAM) berat masa lalu. Keppres ini diteken Jokowi pada 26 Agustus 2022."
            rows={3}
            {...register("paragraf_3_1")}
          />
          {formState.errors.paragraf_3_1 && (
            <p className="text-sm text-red italic">
              {formState.errors.paragraf_3_1.message}
            </p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="-mb-3 text-lg" htmlFor="paragraf_3_2">
            Paragraf ketiga, bagian 2
          </Label>
          <Label
            className="text-xs italic text-zinc-500"
            htmlFor="paragraf_3_2"
          >
            Third paragraph, section 2
          </Label>
          <Textarea
            id="paragraf_3_2"
            placeholder={`Lalu pada awal 2023, Presiden Jokowi menerima laporan akhir pelaksanaan tugas dan rekomendasi pelanggaran HAM berat di masa lalu. Laporan itu sebelumnya diterima Menkopolhukam Mahfud MD dari Tim Pelaksana Penyelesaian Nonyudisial Pelanggaran HAM yang Berat di Masa Lalu (PPHAM).`}
            rows={5}
            {...register("paragraf_3_2")}
          />
          {formState.errors.paragraf_3_2 && (
            <p className="text-sm text-red italic">
              {formState.errors.paragraf_3_2.message}
            </p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="-mb-3 text-lg" htmlFor="paragraf_3_3">
            Paragraf ketiga, bagian 3
          </Label>
          <Label
            className="text-xs italic text-zinc-500"
            htmlFor="paragraf_3_3"
          >
            Third paragraph, section 3
          </Label>
          <Textarea
            id="paragraf_3_3"
            placeholder="Jokowi menjabarkan ada 12 peristiwa masuk dalam pelanggaran HAM. Di antaranya adalah Peristiwa Kerusuhan Mei 1998 dan Wiji Thukul hilang saat memperjuangkan reformasi."
            rows={5}
            {...register("paragraf_3_3")}
          />
          {formState.errors.paragraf_3_3 && (
            <p className="text-sm text-red italic">
              {formState.errors.paragraf_3_3.message}
            </p>
          )}
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
            {...register("kutipan_1")}
          />
          {formState.errors.kutipan_1 && (
            <p className="text-sm text-red italic">
              {formState.errors.kutipan_1.message}
            </p>
          )}
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
            {...register("kutipan_2")}
          />
          {formState.errors.kutipan_2 && (
            <p className="text-sm text-red italic">
              {formState.errors.kutipan_2.message}
            </p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4 w-fit">
          <Label className="-mb-1 text-lg" htmlFor="kutipan_2">
            References
          </Label>
          <div className="flex items-center gap-4 flex-wrap">
            {references &&
              references.map((ref, index) => (
                <Input
                  key={index}
                  className="w-40"
                  id={`ref-${index}`}
                  onChange={(e) => {
                    const updatedReferences = [...references];
                    updatedReferences[index] = e.target.value;
                    setReferences(updatedReferences);
                  }}
                />
              ))}
            {references.length < 12 && (
              <div
                onClick={addReferences}
                className="p-1 w-fit h-fit border border-zinc-700 rounded-full cursor-pointer group hover:border-zinc-300 duration-300"
              >
                <GoPlus className="group-hover:text-zinc-300 duration-300" />
              </div>
            )}
          </div>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4 w-fit">
          <Label className="-mb-1 text-lg" htmlFor="kutipan_2">
            Tags
          </Label>
          <div className="flex items-center gap-4 flex-wrap">
            {tags &&
              tags.map((tag, index) => (
                <Input
                  key={index}
                  className="w-40"
                  id={`tag-${index}`}
                  onChange={(e) => {
                    const updatedTags = [...tags];
                    updatedTags[index] = e.target.value;
                    setTags(updatedTags);
                  }}
                />
              ))}
            {tags.length < 12 && (
              <div
                onClick={addTag}
                className="p-1 w-fit h-fit border border-zinc-700 rounded-full cursor-pointer group hover:border-zinc-300 duration-300"
              >
                <GoPlus className="group-hover:text-zinc-300 duration-300" />
              </div>
            )}
          </div>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="-mb-1 text-lg" htmlFor="kutipan_2">
            Tags
          </Label>
          <Textarea
            className="w-0"
            id="kutipan_2"
            placeholder="Janji 9 tahun itu dimuat di beberapa media massa. Namun, saat ini, menurut Tri Wahyu, janji Jokowi mencari dan menemukan Wiji Thukul ternyata palsu."
            rows={5}
            {...register("kutipan_2")}
          />
        </LabelInputContainer>
        <button
          type="submit"
          className="font-lora inline-flex mt-6 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Unggah Sekarang
        </button>
      </form>
    </div>
  );
}

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
