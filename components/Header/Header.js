import React from "react";
import Link from "next/link";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className={classes.logo}>Logo</h2>
          </div>
          <div className={`${classes.nav}  col-lg-6`}>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/make">Make</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
