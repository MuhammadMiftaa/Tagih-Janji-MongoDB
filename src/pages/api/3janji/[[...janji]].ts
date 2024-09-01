import client from "@/src/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const mongo = await client;
    const db = mongo.db("MainData");
    let janjiPresiden;

    if (req.query.janji) {
      // Coba mencari berdasarkan ID hanya jika ID valid
      if (ObjectId.isValid(String(req.query.janji))) {
        try {
          janjiPresiden = await db
            .collection("3Janji")
            .findOne({ _id: new ObjectId(String(req.query.janji)) });
        } catch (error) {
          console.error("Error finding by ID:", error);
        }
      }

      // Jika pencarian berdasarkan ID tidak menemukan hasil atau ID tidak valid
      if (!janjiPresiden) {
        // Ubah format judul dari parameter query
        const formattedTitle = String(req.query.janji)
          .replaceAll("-", " ") // Ganti "-" dengan spasi
          .split(" ") // Pisahkan kata
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          ) // Ubah huruf pertama jadi kapital
          .join(" "); // Gabungkan kembali menjadi string

        // Coba mencari berdasarkan judul
        janjiPresiden = await db
          .collection("3Janji")
          .findOne({ judul: formattedTitle });
      }
    } else {
      janjiPresiden = await db.collection("3Janji").find({}).toArray();
    }

    console.log("Success to read the data");

    res.status(200).json({
      status: true,
      statusCode: 200,
      message: "Data berhasil diambil",
      data: janjiPresiden,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Data gagal dimuat",
    });
  }
};
