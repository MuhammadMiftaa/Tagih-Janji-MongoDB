import mongoose, { Schema } from "mongoose";

// mongoose.connect(String(process.env.MONGODB_URI));
// mongoose.Promise = global.Promise;

const ArtikelSchema = new mongoose.Schema(
  {
    penulis: { type: String },
    tanggal: { type: Date, default: Date.now },
    judul: { type: String },
    paragraf_1_1: { type: String },
    paragraf_1_2: { type: String },
    paragraf_2_1: { type: String },
    paragraf_2_2: { type: String },
    subjudul: { type: String },
    paragraf_3_1: { type: String },
    paragraf_3_2: { type: String },
    paragraf_3_3: { type: String },
    kutipan_1: { type: String },
    kutipan_2: { type: String },
    kategori: { type: String, default: "" },
    tags: { type: [String], default: "" },
    sumber: { type: String, default: "" },
    lokasi: { type: String, default: "Indonesia" },
    waktu_publikasi: { type: String, default: "" },
    referensi: { type: [String], default: "" },
    lama_baca: { type: String, default: "" },
    jumlah_kata: { type: Number, default: "" },
    bahasa: { type: String, default: "id" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Artikel || mongoose.model("Artikel", ArtikelSchema)

