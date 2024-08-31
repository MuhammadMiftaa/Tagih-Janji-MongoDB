import { NextApiRequest, NextApiResponse } from "next";
import client from "@/src/lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const mongo = await client;
    const db = mongo.db("MainData");
    let artikel;
    if (req.query.artikel) {
      artikel = await db
        .collection("Artikel")
        .findOne({ _id: new ObjectId(String(req.query.artikel)) });
    } else {
      artikel = await db.collection("Artikel").find({}).toArray();
    }

    console.log("Success to read the data");

    res.status(200).json({
      status: true,
      statusCode: 200,
      message: "Data berhasil diambil",
      data: artikel,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to read the data" });
  }
};
