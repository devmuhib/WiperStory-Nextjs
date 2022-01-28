import { Fragment } from "react";
import { MongoClient } from "mongodb";

import { NextSeo } from "next-seo";

import classes from "../../styles/make.module.css";
import Link from "next/link";

function MakePage(props) {
  const carData = props.carlist;

  let uniqueList = [
    ...new Map(carData.map((item) => [item["make"], item])).values(),
  ];

  const sortedMake = uniqueList.sort((a, b) => (a.make < b.make ? -1 : 1));

  const SEO = {
    title: "Make",
    description: "its a demo description.by someone",
    openGraph: {
      title: "Make",
      description: "its a demo description.by someone",
    },
  };

  return (
    <Fragment>
      <NextSeo {...SEO} />

      <div className="row">
        <div className="col-lg-9 mt-4 py-5 m-auto">
          {sortedMake.map((company) => (
            <button className={`${classes.button} me-3`} key={company.id}>
              <Link href={`make/${company.makeId}`} passHref>
                {company.make}
              </Link>
            </button>
          ))}
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

  const data = await carlistCollection.find({}).toArray();

  return {
    props: {
      carlist: data.map((carItem) => ({
        make: carItem.Make,

        id: carItem._id.toString(),
        makeId: carItem.SlugMake,
      })),
    },
    revalidate: 600,
  };
}

export default MakePage;
