// import { MongoClient } from "mongodb";

// async function handler(req, res) {
//   const client = await MongoClient.connect(process.env.MONGO_URI);

//   // ==== code for API route for all car data

//   if (req.method === "GET") {
//     const db = client.db();

//     const carlistCollection = db.collection("carlist");

//     const carlist = await carlistCollection.find({}).toArray();

//     res.status(200).json(carlist);
//     client.close();
//   }
// }

// export default handler;
