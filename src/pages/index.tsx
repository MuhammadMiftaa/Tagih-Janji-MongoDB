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

export default function Home(props: {
  janji: JanjiType[];
  janjiPresiden: JanjiPresidenType[];
  isConnected: boolean;
}) {
  // const { janji, janjiPresiden } = props;

  const janji = [
    {
      _id: "66d2cf2be273b9e4470d941e",
      judul: "Melanjutkan Pembangunan Ikn",
      sumber: "CNN Indonesia",
      tanggal: "12 Agustus 2024",
      gambar:
        "group w-full cursor-pointer overflow-hidden relative card h-[27rem] rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 bg-[url(https://hypeabis.id/assets/content/20230425154852000000istanaNyoman.jpg)] bg-cover before:bg-[url(/gif/pembangunan-ikn.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1] hover:bg-[url(/gif/pembangunan-ikn.gif)] hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 transition-all duration-500",
      gif: "pembangunan-ikn.gif",
      konten: [
        {
          judul: "Pernyataan Janji",
          deskripsi:
            'Calon Presiden 2024-2029 terpilih Prabowo Subianto berjanji akan melanjutkan pembangunan proyek Ibu Kota Nusantara (IKN) warisan Presiden Joko Widodo (Jokowi). Meskipun proses penyelesaiannya bisa memakan waktu hingga puluhan tahun, Prabowo berkomitmen agar IKN di 5 tahun masa pemerintahannya bakal difungsikan dengan baik. "Oh pasti kita selesaikan. Walaupun memang rencana garis besarnya kalau tidak salah belasan tahun untuk (diselesaikan), kalau tidak salah pernah disebut berapa puluh tahun. Sebagaimana ibu kota negara lain juga sangat panjang," ujarnya dalam keterangan pers bersama Presiden Joko Widodo (Jokowi) di IKN, Senin (12/8/2024). Usai melihat langsung, Prabowo mengaku optimistis terhadap progres pembangunan Ibu Kota Nusantara. Oleh karenanya, ia berkomitmen agar pembangunan ini terus berjalan, bahkan kalau bisa ia ingin mempercepatnya. "Saya bukan ahli teknik, tapi saya lihat potensinya, saya yakin (IKN Nusantara) 5-6 tahun akan bagus. Tapi tentunya nanti pakar-pakar semuanya harus dikerahkan, dikerahkan semua kemampuan kita," kata Prabowo.',
        },
        {
          judul: "Latar Belakang dan Konteks",
          deskripsi:
            "Pembangunan IKN di Kalimantan Timur merupakan upaya pemerintah untuk memindahkan pusat pemerintahan dari Jakarta, yang saat ini menghadapi berbagai masalah seperti kemacetan, polusi, banjir, dan kepadatan penduduk. Pemerintah berargumen bahwa pemindahan ibu kota akan mendorong pemerataan ekonomi dan pembangunan di luar Pulau Jawa serta mengurangi beban di Jakarta. Konsep IKN ini diharapkan menjadi kota pintar yang ramah lingkungan dengan penggunaan teknologi canggih dan energi terbarukan. Berdasarkan data Bappenas, pembangunan IKN akan menghabiskan biaya sebesar Rp 466 triliun, dengan 19% dari APBN dan sisanya dari investasi swasta dan kerjasama pemerintah dengan badan usaha (KPBU).",
        },
        {
          judul: "Rencana Implementasi",
          deskripsi:
            "Pembangunan IKN terbagi menjadi beberapa tahap hingga tahun 2045. Tahap pertama (2022-2024) mencakup pembangunan infrastruktur dasar, gedung pemerintahan, dan perumahan bagi pegawai negeri. Pemerintah juga mengumumkan akan memindahkan sebagian instansi pemerintahan dan pegawai ke IKN pada tahun 2024. Inisiatif ini melibatkan pembangunan berbagai fasilitas publik, seperti rumah sakit, sekolah, dan transportasi umum berbasis listrik. Rencana ini akan dilakukan dengan pendekatan berkelanjutan yang menitikberatkan pada pelestarian lingkungan, misalnya penggunaan lahan non-hutan dan rehabilitasi ekosistem.",
        },
        {
          judul: "Perkembangan Terkini",
          deskripsi:
            "Hingga 2024, beberapa pembangunan infrastruktur dasar, seperti jalan utama dan instalasi air bersih, telah dimulai. Pemerintah terus melakukan promosi dan lobi untuk menarik investasi dari sektor swasta baik domestik maupun internasional. Beberapa negara, seperti Uni Emirat Arab dan Korea Selatan, menunjukkan minat untuk berinvestasi di IKN. Kementerian PUPR melaporkan bahwa progres pembangunan infrastruktur di kawasan inti pemerintahan sudah mencapai sekitar 20%.",
        },
        {
          judul: "Dampak yang Diharapkan",
          deskripsi:
            'Pemerintah berharap pembangunan IKN akan menciptakan pusat ekonomi baru yang dapat menarik investasi dan membuka lapangan kerja baru bagi masyarakat lokal. Diharapkan dapat menjadi contoh "smart city" dan "green city" di Asia Tenggara, dengan penerapan teknologi canggih seperti Internet of Things (IoT) dan sistem transportasi otonom. Targetnya adalah meningkatkan pertumbuhan ekonomi di Kalimantan Timur dan sekitarnya hingga 7% per tahun, serta mengurangi ketimpangan antara wilayah barat dan timur Indonesia.',
        },
        {
          judul: "Pendapat dan Tanggapan Publik",
          deskripsi:
            "Ada pendapat positif yang menyambut baik pemindahan IKN sebagai langkah progresif untuk pembangunan berkelanjutan dan pemerataan. Namun, kritik juga muncul dari berbagai kalangan, termasuk LSM dan aktivis lingkungan, yang khawatir dengan dampak ekologis dari pembangunan besar-besaran ini terhadap hutan Kalimantan. Survei Litbang Kompas (2022) menunjukkan bahwa lebih dari 50% masyarakat belum yakin bahwa pemindahan ibu kota akan efektif dan membawa manfaat nyata.",
        },
        {
          judul: "Tantangan dan Kritik",
          deskripsi:
            "Tantangan utama yang dihadapi adalah pembiayaan. Meskipun ada komitmen dari pemerintah dan sektor swasta, ada kekhawatiran tentang bagaimana pendanaan ini akan dipenuhi tanpa membebani APBN. Ada juga tantangan dari segi kesiapan infrastruktur dan ketersediaan layanan publik seperti kesehatan, pendidikan, dan transportasi. Kritik lainnya termasuk isu transparansi dalam pengadaan lahan, potensi penggusuran masyarakat adat, dan ketidakpastian tentang dampak sosial-ekonomi terhadap penduduk lokal.",
        },
      ],
    },
    {
      _id: "66d2cf2be273b9e4470d941f",
      judul: "Hilirisasi",
      sumber: "Sin Po TV",
      tanggal: "20 Desember 2023",
      gambar:
        "group w-full cursor-pointer overflow-hidden relative card h-[27rem] rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 bg-[url(https://cdn.visiteliti.com/article/2021-12/28/POLJoU9HQYgkkesuTJU7_1640662510.jpeg)] bg-cover before:bg-[url(/gif/hilirisasi.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1] hover:bg-[url(/gif/hilirisasi.gif)] hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 transition-all duration-500",
      gif: "hilirisasi.gif",
      konten: [
        {
          judul: "Pernyataan Janji",
          deskripsi:
            'Prabowo Subianto menyampaikan komitmen untuk melanjutkan kebijakan hilirisasi seperti yang dilakukan oleh Presiden Joko Widodo. Menurut Prabowo, komitmen serupa juga diusung oleh pendampingnya, Gibran Rakabuming, serta Koalisi Indonesia Maju (KIM). Tekad itu disampaikan di hadapan puluhan ribu masyarakat Sulawesi Utara yang memenuhi Lapangan Schwarz, Langowan pada Senin (5/2). "Pak Jokowi pernah mengatakan pada saya \'Mas Bowo, tidak mungkin Indonesia makmur kalau kita jual bahan-bahan kita ke luar negeri\'. Untuk itu, saya, Prabowo-Gibran dengan Koalisi Indonesia Maju, kami bertekad untuk menjaga kekayaan Indonesia," kata Prabowo. Prabowo mengungkapkan, Indonesia adalah negeri yang sangat kaya. Beragam kekayaan itu sudah semestinya dinikmati oleh rakyat Indonesia sendiri, dan bukan sebaliknya. "Di setiap kesempatan dan provinsi yang saya datangi, saya selalu mengatakan bahwa negara kita terbukti negara yang sangat kaya. Tapi, sudah lama sekali kekayaan kita banyak diambil dan dibawa ke luar negeri, serta tidak dinikmati seluruh rakyat Indonesia," paparnya. Hilirisasi ditegaskan penting dilakukan Indonesia, karena dapat meningkatkan nilai tambah dari produk atau sumber daya alam yang dimiliki. Sebelumnya, Jokowi telah mengambil langkah kebijakan hilirisasi yang menghentikan penjualan kekayaan alam Indonesia dalam bentuk mentah dan dengan harga murah ke luar negeri. Prabowo mengatakan, hilirisasi menjadi jalan agar kekayaan Indonesia memiliki nilai tambah yang akan berdampak pada kesejahteraan rakyat. "Kami ingin mengelola (kekayaan Indonesia). Kami ingin mengurus, kami ingin mengatur kakayaan itu supaya nilai tambahnya bisa dinikmati seluruh rakyat Indonesia," kata Prabowo.',
        },
        {
          judul: "Latar Belakang dan Konteks",
          deskripsi:
            "Hilirisasi telah menjadi fokus utama pemerintah dalam beberapa tahun terakhir untuk mengurangi ketergantungan pada ekspor bahan mentah. Dengan pemrosesan di dalam negeri, pemerintah berharap dapat meningkatkan pendapatan nasional dan menciptakan lapangan kerja yang lebih berkualitas. Indonesia, sebagai salah satu penghasil nikel terbesar di dunia, telah menerapkan larangan ekspor bijih mentah untuk mendorong investasi di sektor pengolahan. Langkah ini juga bertujuan untuk meningkatkan daya saing global dan mengurangi defisit perdagangan.",
        },
        {
          judul: "Rencana Implementasi",
          deskripsi:
            "Rencana implementasi hilirisasi industri melibatkan pembangunan smelter, pabrik pengolahan, dan infrastruktur pendukung lainnya di beberapa wilayah strategis seperti Sulawesi dan Kalimantan. Pemerintah akan memberikan insentif pajak dan fasilitas lainnya bagi investor yang bersedia membangun fasilitas pengolahan di Indonesia. Selain itu, terdapat fokus pada pengembangan sumber daya manusia melalui pendidikan dan pelatihan yang ditargetkan pada industri hilir. Pemerintah juga mengupayakan kerjasama dengan berbagai negara untuk alih teknologi dan pendanaan.",
        },
        {
          judul: "Perkembangan Terkini",
          deskripsi:
            "Hingga 2024, beberapa proyek hilirisasi utama seperti smelter nikel dan bauksit telah mulai beroperasi. Beberapa perusahaan internasional, seperti Tesla dan LG, telah menunjukkan minat untuk berinvestasi dalam rantai pasokan baterai kendaraan listrik di Indonesia. Kementerian Perindustrian melaporkan bahwa lebih dari 10 smelter baru diproyeksikan akan selesai dalam dua tahun ke depan, yang akan meningkatkan kapasitas pengolahan mineral dalam negeri secara signifikan.",
        },
        {
          judul: "Dampak yang Diharapkan",
          deskripsi:
            "Program hilirisasi diharapkan dapat meningkatkan nilai ekspor Indonesia hingga tiga kali lipat dalam beberapa tahun mendatang dan menciptakan ribuan lapangan pekerjaan baru di sektor industri dan manufaktur. Selain itu, hilirisasi juga diharapkan dapat mengurangi defisit perdagangan dan meningkatkan keseimbangan neraca pembayaran. Hilirisasi juga diyakini akan memperkuat daya saing Indonesia dalam rantai pasokan global, khususnya dalam industri kendaraan listrik dan energi terbarukan.",
        },
        {
          judul: "Pendapat dan Tanggapan Publik",
          deskripsi:
            "Banyak pihak mendukung hilirisasi karena dianggap sebagai langkah maju dalam pembangunan ekonomi yang berkelanjutan. Namun, ada juga kritik terkait kesiapan infrastruktur dan kualitas tenaga kerja di Indonesia untuk mendukung hilirisasi yang lebih luas. Beberapa ekonom memperingatkan bahwa terlalu mengandalkan investasi asing dapat meningkatkan risiko ekonomi jika tidak ada jaminan nilai tambah lokal yang cukup.",
        },
        {
          judul: "Tantangan dan Kritik",
          deskripsi:
            "Tantangan utama hilirisasi adalah ketergantungan pada investasi asing dan risiko lingkungan yang mungkin muncul akibat pembangunan smelter dan fasilitas pengolahan lainnya. Ada juga kekhawatiran tentang kurangnya regulasi ketat dalam hal lingkungan dan perlindungan tenaga kerja. Beberapa LSM dan aktivis lingkungan telah menyerukan perlunya studi dampak lingkungan yang lebih komprehensif sebelum melanjutkan proyek-proyek besar ini.",
        },
      ],
    },
    {
      _id: "66d2cf2be273b9e4470d9420",
      judul: "Makan Siang Gratis Di Sekolah",
      sumber: "tvOne News",
      tanggal: "24 Mei 2024",
      gambar:
        "group w-full cursor-pointer overflow-hidden relative card h-[27rem] rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 bg-[url(https://assets.ladiestory.id/gallery/16582055731130052815-makan-siang.jpg)] bg-cover before:bg-[url(/gif/makan-siang-gratis.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1] hover:bg-[url(/gif/makan-siang-gratis.gif)] hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 transition-all duration-500",
      gif: "makan-siang-gratis.gif",
      konten: [
        {
          judul: "Pernyataan Janji",
          deskripsi:
            'Prabowo Subianto menjanjikan bakal beri makan siang gratis untuk siswa sekolah, termasuk ibu hamil sebagai langkah pengentasan stunting. "Strategi kita adalah memberikan makan siang kepada seluruh anak Indonesia termasuk mereka masih dalam kandungan ibunya. Ibu hamil kita tunjang dan ini adalah strategi jangka panjang menghilangkan stunting menghilangkan dan mengurangi beban rakyat miskin" kata Prabowo dalam acara Sarasehan 100 Ekonom 2023 yang digelar INDEF bersama CNBC Indonesia, Rabu (8/11/2023). Ia menjelaskan bahwa program makan gratis untuk anak harus memperhitungkan kemampuan anggaran pemerintah. "Kita hitung kapasitas sekarang baru kasih satu kali makan, ada snack-nya, ada susu. ini sebuah prestasi menurut saya." tutur Prabowo. Prabowo menjelaskan program makan siang gratis bagi seluruh pelajar dan ibu hamil diperkirakan membutuhkan anggaran hingga Rp 400 triliun. Prabowo Subianto menjanjikan bakal beri makan siang gratis untuk siswa sekolah, termasuk ibu hamil sebagai langkah pengentasan stunting. "Strategi kita adalah memberikan makan siang kepada seluruh anak Indonesia termasuk mereka masih dalam kandungan ibunya. Ibu hamil kita tunjang dan ini adalah strategi jangka panjang menghilangkan stunting menghilangkan dan mengurangi beban rakyat miskin" kata Prabowo dalam acara Sarasehan 100 Ekonom 2023 yang digelar INDEF bersama CNBC Indonesia, Rabu (8/11/2023). Ia menjelaskan bahwa program makan gratis untuk anak harus memperhitungkan kemampuan anggaran pemerintah. "Kita hitung kapasitas sekarang baru kasih satu kali makan, ada snack-nya, ada susu. ini sebuah prestasi menurut saya." tutur Prabowo. Prabowo menjelaskan program makan siang gratis bagi seluruh pelajar dan ibu hamil diperkirakan membutuhkan anggaran hingga Rp 400 triliun.',
        },
        {
          judul: "Latar Belakang dan Konteks",
          deskripsi:
            "Indonesia masih menghadapi masalah malnutrisi dan stunting di kalangan anak-anak. Berdasarkan data Kementerian Kesehatan, sekitar 27,7% anak di bawah usia lima tahun mengalami stunting pada tahun 2023. Program makan siang gratis diharapkan dapat membantu mengurangi angka stunting dan meningkatkan kualitas hidup anak-anak, khususnya di daerah-daerah terpencil dan kurang mampu.",
        },
        {
          judul: "Rencana Implementasi",
          deskripsi:
            "Program ini akan dimulai dengan sekolah-sekolah di daerah miskin dan terpencil pada tahun pertama, kemudian diperluas ke seluruh negeri. Pemerintah akan bekerjasama dengan kementerian terkait, pemerintah daerah, dan swasta untuk pengadaan dan distribusi makanan. Akan ada sistem pemantauan untuk memastikan bahwa makanan yang disediakan memenuhi standar gizi dan kebersihan yang ketat. Pemerintah juga berencana untuk mengintegrasikan program ini dengan program kesehatan lainnya, seperti pemeriksaan kesehatan rutin di sekolah.",
        },
        {
          judul: "Perkembangan Terkini",
          deskripsi:
            "Pada 2024, beberapa pilot project program makan siang gratis telah dilaksanakan di beberapa provinsi, termasuk Nusa Tenggara Timur dan Papua. Hasil awal menunjukkan peningkatan signifikan dalam kehadiran siswa dan penurunan tingkat kekurangan gizi di daerah-daerah tersebut. Pemerintah terus melakukan evaluasi dan perbaikan untuk memastikan program berjalan lancar dan efektif.",
        },
        {
          judul: "Dampak yang Diharapkan",
          deskripsi:
            "Program ini diharapkan dapat mengurangi angka malnutrisi dan stunting di kalangan anak-anak sekolah dasar hingga 15% dalam lima tahun pertama. Selain itu, peningkatan gizi yang lebih baik diharapkan dapat meningkatkan prestasi akademik dan kesehatan secara keseluruhan. Dengan demikian, diharapkan dapat memberikan dampak jangka panjang pada produktivitas dan kesejahteraan generasi muda Indonesia.",
        },
        {
          judul: "Pendapat dan Tanggapan Publik",
          deskripsi:
            "Sebagian besar masyarakat dan organisasi kesehatan menyambut baik inisiatif ini sebagai langkah progresif untuk kesehatan publik. Namun, ada kritik mengenai biaya dan keberlanjutan program, terutama terkait anggaran pemerintah yang terbatas. Beberapa ahli juga mengingatkan agar program ini tidak mengabaikan aspek pendidikan dan pemberdayaan gizi bagi orang tua dan komunitas.",
        },
        {
          judul: "Tantangan dan Kritik",
          deskripsi:
            "Tantangan terbesar adalah masalah logistik dan pendanaan. Memastikan distribusi makanan yang merata dan tepat waktu di seluruh pelosok Indonesia adalah tugas yang berat. Ada juga kekhawatiran tentang potensi korupsi dan penyalahgunaan dana. Kritikus juga menyoroti perlunya pendekatan holistik, yang mencakup pendidikan gizi untuk keluarga dan masyarakat, bukan hanya sekedar pemberian makanan.",
        },
      ],
    },
  ];

  const janjiPresiden = [
    {
      _id: "66d18caa541db2e61b7c9cd2",
      title: "Program Gizi dan Kesehatan Anak",
      description:
        "Memberi makan siang dan susu gratis di sekolah dan pesantren, serta bantuan gizi untuk anak balita dan ibu hamil.",
    },
    {
      _id: "66d18caa541db2e61b7c9cd3",
      title: "Pelayanan Kesehatan Gratis",
      description:
        "Menyelenggarakan pemeriksaan kesehatan gratis, menuntaskan kasus TBC, dan membangun Rumah Sakit lengkap berkualitas di kabupaten.",
    },
    {
      _id: "66d18caa541db2e61b7c9cd4",
      title: "Pengembangan Pertanian dan Pangan",
      description:
        "Mencetak dan meningkatkan produktivitas lahan pertanian dengan lumbung pangan desa, daerah, dan nasional.",
    },
    {
      _id: "66d18caa541db2e61b7c9cd5",
      title: "Pendidikan dan Renovasi Sekolah",
      description:
        "Membangun sekolah-sekolah unggul terintegrasi di setiap kabupaten, dan memperbaiki sekolah-sekolah yang perlu renovasi.",
    },
    {
      _id: "66d18caa541db2e61b7c9cd6",
      title: "Program Kesejahteraan Sosial",
      description:
        "Melanjutkan dan menambahkan program kartu-kartu kesejahteraan sosial serta kartu usaha untuk menghilangkan kemiskinan absolut.",
    },
    {
      _id: "66d18caa541db2e61b7c9cd7",
      title: "Infrastruktur Desa dan BLT",
      description:
        "Melanjutkan pembangunan infrastruktur desa dan kelurahan, Bantuan Langsung Tunai (BLT).",
    },
    {
      _id: "66d18caa541db2e61b7c9cd8",
      title: "Penerimaan Negara dan PDB",
      description:
        "Mendirikan Badan Penerimaan Negara dan meningkatkan rasio penerimaan negara terhadap produk domestik bruto (PDB) ke 23%.",
    },
    {
      _id: "66d18caa541db2e61b7c9cd9",
      title: "Kesejahteraan ASN dan Aparatur Negara",
      description:
        "Menaikkan gaji ASN (terutama guru, dosen, tenaga kesehatan, dan penyuluh), TNI/POLRI, dan pejabat negara.",
    },
    {
      _id: "66d18caa541db2e61b7c9cda",
      title: "Pendidikan Kedokteran dan Beasiswa",
      description:
        "Membangun 300 Fakultas Kedokteran dan Beasiswa 10 Ribu Pelajar.",
    },
    {
      _id: "66d18caa541db2e61b7c9cdb",
      title: "Pertumbuhan Ekonomi Nasional",
      description: "Pertumbuhan Ekonomi Menembus 8 Persen.",
    },
    {
      _id: "66d18caa541db2e61b7c9cdc",
      title: "Pelestarian Budaya Kalimantan",
      description: "Memenuhi hak dan menjaga warisan budaya Kalimantan.",
    },
    {
      _id: "66d18caa541db2e61b7c9cdd",
      title: "Kredit Usaha untuk Anak Muda",
      description:
        "Kredit usaha bisnis rintisan bagi para anak muda yang mudah diakses.",
    },
    {
      _id: "66d18caa541db2e61b7c9cde",
      title: "Penyediaan Rumah Murah",
      description:
        "Menjamin penyediakan rumah murah bersanitasi baik untuk yang membutuhkan, terutama generasi milenial, generasi Z, dan masyarakat berpenghasilan rendah (MBR).",
    },
    {
      _id: "66d18caa541db2e61b7c9cdf",
      title: "Penanganan Banjir di Jakarta",
      description:
        "Memprioritaskan penanganan banjir di pemukiman padat dengan cara berkoordinasi dengan Gubernur DK Jakarta.",
    },
    {
      _id: "66d18caa541db2e61b7c9ce0",
      title: "Pengelolaan Kekayaan Alam Indonesia",
      description:
        "Melakukan pengelolaan kekayaan alam Indonesia untuk kesejahteraan rakyat.",
    },
  ];

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
            Tagih <span className="text-red">Janji</span>.
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
          <Highlight className="text-white font-medium dark:text-white from-red from-50% to-white">
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
        <div className="bg-yellow py-20">
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
            {janji.map((item) => (
              <div className="my-20" key={item._id}>
                <h1 className="font-lora my-6 text-4xl font-semibold">
                  {item.judul}
                </h1>
                <div className={item.gambar}>
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
              <Highlight className="text-black font-medium dark:text-white from-yellow to-zinc-950 from-50%">
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
