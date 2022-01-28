import { MongoClient } from "mongodb";

import ModelChild from "../../../components/modelChild/ModelChild";

const MakeName = (props) => {
  let uniquemodelList = [
    ...new Map(props.carData.map((item) => [item["model"], item])).values(),
  ];
  const modelList = uniquemodelList.filter((car) => car.model);

  const sortedData = modelList.sort((a, b) => (a.model < b.model ? -1 : 1));

  return (
    <div className="row py-5">
      <div className="col-lg-9 m-auto pt-4">
        {sortedData.map((item) => (
          <ModelChild key={item._id.toString()} item={item} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.fdztw.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
  );

  const db = client.db();
  const carlistCollection = db.collection("carlist");
  const carlist = await carlistCollection
    .find(
      {},
      {
        Model: 1,
      }
    )
    .toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: carlist.map((carItem) => ({
      params: {
        makeId: carItem.SlugMake,
        modelName: carItem.SlugModel.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const id = context.params.makeId;

  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.fdztw.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
  );

  const db = client.db();

  const carlistCollection = db.collection("carlist");

  const data = await carlistCollection.find({ SlugMake: id }).toArray();

  return {
    props: {
      carData: data.map((car) => ({
        _id: car._id.toString(),
        makeId: car.SlugMake,
        modelName: car.SlugModel,
        model: car.Model,
        make: car.SlugMake,
      })),
    },
    revalidate: 1,
  };
}

export default MakeName;
