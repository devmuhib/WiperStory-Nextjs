import { useRouter } from "next/router";
import { Fragment } from "react";
import { MongoClient } from "mongodb";
import classes from "../../../../styles/table.module.css";

const ModelTable = (props) => {
  const router = useRouter();
  const make = router.query.makeId;
  const model = router.query.modelName;

  const sortedData = props.carData.sort((a, b) => b.year - a.year);

  return (
    <Fragment>
      <div className="row py-5">
        <div className="row justify-content-md-center">
          <div className="col-xl-9 ">
            <h1 className="text-center mt-3">
              {" "}
              {make} {model} Windshield Wiper Size Chart
            </h1>
            <h4 className="text-center mt-3">
              Check out the {make} {model} wiper size chart below so you can
              find the perfect fit.
            </h4>
            <table className={classes.customTable}>
              <thead className={classes.tableHeader}>
                <tr>
                  <th>Year</th>
                  <th>Driver Side</th>
                  <th>Passenger Side</th>
                  <th>Rear</th>
                </tr>
              </thead>

              <tbody>
                {sortedData.map((company) => (
                  <tr key={company._id}>
                    <th>{company.year}</th>
                    <td>{company.driver} </td>
                    <td>{company.pass} </td>
                    <td>{company.rear ? company.rear : " * "}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
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
        Year: 1,
        Driver: 1,
        Pass: 1,
        Rear: 1,
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
  const makeId = context.params.makeId;
  const modelName = context.params.modelName;

  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.fdztw.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
  );

  const db = client.db();

  const carlistCollection = db.collection("carlist");

  const data = await carlistCollection
    .find({ SlugMake: makeId, SlugModel: modelName })
    .toArray();

  return {
    props: {
      carData: data.map((car) => ({
        _id: car._id.toString(),
        makeId: car.SlugMake,
        modelName: car.SlugModel,
        model: car.Model,
        make: car.SlugMake,
        year: car.Year,
        driver: car.Driver,
        pass: car.Pass,
        rear: car.Rear,
      })),
    },
    revalidate: 1,
  };
}

export default ModelTable;
