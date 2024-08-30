import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises"; // Menggunakan fs/promises untuk versi async
import { ArticleType } from "@/types/ArticleType";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ArticleType[] | { error: string }>
) {
  try {
    // Membaca file JSON menggunakan fs
    const data = await fs.readFile("public/article.json", "utf-8"); // Pastikan path benar
    const articles: ArticleType[] = JSON.parse(data); // Parse JSON menjadi objek

    // Mengirimkan respons data
    res.status(200).json(articles);
  } catch (error) {
    console.error("There was a problem reading the file:", error);
    // Mengirim respons error jika gagal
    res.status(500).json({ error: "Failed to read the data" });
  }
}
