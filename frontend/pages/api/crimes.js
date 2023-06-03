import dbConnect from "util/mongo";
import Crime from "models/Crime";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const crimes = await Crime.find();
      res.status(200).json(crimes);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const crimes = await Crime.create(req.body);
      print(crimes);
      res.status(201).json(crimes);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;
