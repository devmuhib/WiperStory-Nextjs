// import { MongoClient } from "mongodb";

// async function handler(req, res) {
//   const client = await MongoClient.connect(process.env.MONGO_URI);

//   // ==== code for API route for single model data

//   if (req.method === "GET") {
//     const makeId = req.query.makeId;
//     const modelName = req.query.modelName;
//     const query = { SlugMake: makeId, SlugModel: modelName.toString() };
//     const db = client.db();

//     const carlistCollection = db.collection("carlist");

//     const carlist = await carlistCollection.find(query).toArray();

//     res.status(200).json(carlist);
//     client.close();
//   }
// }

// export default handler;
