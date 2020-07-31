import React from "react";

import { Icon } from "@iconify/react";
import roundArrowBackIos from "@iconify/icons-ic/round-arrow-back-ios";

import css from "./css.module.css";
import { Link } from "react-router-dom";

const BackButton = () => (
  <Link className={css.link} to="/">
    <div className={css.top}>
      <Icon icon={roundArrowBackIos} color="white" />
      <p>Back to Galery</p>
    </div>
  </Link>
);

export default BackButton;
