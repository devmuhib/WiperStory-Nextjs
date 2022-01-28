import React from "react";

import { useRouter } from "next/router";
import classes from "../../styles/model.module.css";

const ModelChild = (props) => {
  const router = useRouter();
  const { model, makeId, modelName } = props.item;

  const nextPage = () => {
    router.push(`/make/${makeId}/${modelName}`);
  };

  return (
    <button className={`${classes.button} me-3`} onClick={nextPage}>
      {model}
    </button>
  );
};

export default ModelChild;
