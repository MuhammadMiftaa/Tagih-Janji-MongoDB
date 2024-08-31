import client from "@/src/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const mongo = await client;
    const db = mongo.db("MainData");
    let janjiPresiden;
    if (req.query.janji) {
      janjiPresiden = await db
        .collection("JanjiPrabowoGibran")
        .findOne({ _id: new ObjectId(String(req.query.janji)) });
    } else {
      janjiPresiden = await db
        .collection("JanjiPrabowoGibran")
        .find({})
        .toArray();
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
    res.status(500).json({ error: "Failed to read the data" });
  }
};
