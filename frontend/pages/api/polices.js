import dbConnect from "util/mongo";
import Police from "models/Police";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const police = await Police.find();
      res.status(200).json(police);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const police = await Police.create(req.body);
      print(police);
      res.status(201).json(police);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;
