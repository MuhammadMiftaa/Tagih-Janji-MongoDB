export type JanjiType = {
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
};
