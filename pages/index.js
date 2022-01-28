import { Fragment } from "react";

import classes from "../styles/carform.module.css";
import { useState } from "react";
import { MongoClient } from "mongodb";
import { useRouter } from "next/router";

export default function Home(props) {
  const router = useRouter();

  const carData = props.carlist;

  const [enterOptionData, setEnterOptionData] = useState("");

  // code for select option value change function
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newSelectData = { ...enterOptionData };
    newSelectData[field] = value;

    setEnterOptionData(newSelectData);
    e.preventDefault();
  };

  // code for unique make name for avoiding make name duplication
  let uniqueMakeList = [
    ...new Map(carData.map((item) => [item["make"], item])).values(),
  ];

  //code for sorting make name ascending order
  const sortedMakeDropdown = uniqueMakeList.sort((a, b) =>
    a.make < b.make ? -1 : 1
  );

  // filtering exact make name from the car array
  let particularMake = enterOptionData.make;
  const dependentModelData = carData.filter(
    (list) => particularMake === list.make
  );

  // code for unique model name for avoiding model name duplication
  let uniqueModelList = [
    ...new Map(
      dependentModelData.map((item) => [item["model"], item])
    ).values(),
  ];

  // code for filtering exact model name from make
  const modelList = uniqueModelList.filter((car) => car.model);

  //code for  sorting model name ascending order
  const sortedModelDropdown = modelList.sort((a, b) =>
    a.model < b.model ? -1 : 1
  );

  //  code for filtering exact make name for url
  const uniqueMakeName = carData.find(
    (obj) => obj.make === enterOptionData.make
  );

  // code for filtering exact model name for url
  const uniqueModelName = carData.find(
    (obj) => obj.model === enterOptionData.model
  );

  const submitHandler = (e) => {
    e.preventDefault();

    router.push(`make/${uniqueMakeName.slugMake}/${uniqueModelName.slugModel}`);
  };

  // ===========================================

  // =================================

  return (
    <Fragment>
      <div className="row py-5">
        <div className="col-lg-12 text-center">
          <h2 className="mb-5">Best Wiper Finder For You</h2>

          {/* ======================================= */}

          {/* ======================================================= */}

          <div className="col-lg-6 m-auto">
            <form action="" className={classes.form} onSubmit={submitHandler}>
              <div>
                <select name="make" id="" onChange={handleOnBlur}>
                  <option defaultValue="Make">Make</option>
                  {sortedMakeDropdown.map((car) => (
                    <option key={car.id} value={car.make}>
                      {car.make}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <select name="model" id="" onChange={handleOnBlur}>
                  <option defaultValue="Model">Model</option>
                  {sortedModelDropdown.map((modelData) => (
                    <option key={modelData.id} value={modelData.model} required>
                      {modelData.model}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit">Find {particularMake} Wiper Size</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.fdztw.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
  );

  const db = client.db();

  const carlistCollection = db.collection("carlist");

  const carlist = await carlistCollection.find({}).toArray();

  client.close();

  return {
    props: {
      carlist: carlist.map((carItem) => ({
        make: carItem.Make,
        model: carItem.Model,
        slugMake: carItem.SlugMake,
        slugModel: carItem.SlugModel,
        id: carItem._id.toString(),
      })),
    },
    revalidate: 600,
  };
}
