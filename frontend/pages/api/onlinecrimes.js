import dbConnect from "util/mongo";
import Onlinecrime from "models/Onlinecrime";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const onlinecrimes = await Onlinecrime.find();
      res.status(200).json(onlinecrimes);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const onlinecrimes = await Onlinecrime.create(req.body);
      print(onlinecrimes);
      res.status(201).json(onlinecrimes);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;
