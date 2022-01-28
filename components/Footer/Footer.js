import React from "react";
import classes from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Link href="/">Home</Link>
            <Link href="/about">About US</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div className="col-lg-12">
            <p>© 2022 WiperStory.com. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
