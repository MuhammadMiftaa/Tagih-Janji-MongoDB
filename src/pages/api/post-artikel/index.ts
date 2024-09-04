import { NextApiRequest, NextApiResponse } from "next";
import Artikel from "../../../models/Artikel";
import dbConnect from "@/src/lib/mongoose";
import { ArticleType } from "@/src/types/ArticleType";
import client from "@/src/lib/mongodb";
import readingTime from "reading-time";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // await dbConnect();
      // const ArtikelPost: ArticleType = req.body;
      // const NewArtikel = new Artikel(ArtikelPost);
      // await NewArtikel.save();

      const mongo = await client;
      const db = mongo.db("MainData");
      const Form: ArticleType = req.body;

      const date = new Date();
      const teks =
        Form.judul +
        Form.paragraf_1_1 +
        Form.paragraf_1_2 +
        Form.paragraf_2_1 +
        Form.paragraf_2_2 +
        Form.subjudul +
        Form.paragraf_3_1 +
        Form.paragraf_3_2 +
        Form.paragraf_3_3 +
        Form.kutipan_1 +
        Form.kutipan_2;
      Form.bahasa ??= "id";
      Form.jumlah_kata = teks.trim().split(/\s+/).length;
      Form.lama_baca = readingTime(teks).text;

      const ArtikelPost = {
        ...Form,
        tanggal: date.toLocaleDateString(),
        waktu_publikasi: date.toLocaleTimeString(),
      };
      const result = await db.collection("Artikel").insertOne(ArtikelPost);

      res.status(201).json({
        status: true,
        statusCode: 200,
        message: "Post Success",
        data: result,
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to Post" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
