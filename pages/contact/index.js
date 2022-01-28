import { Fragment } from "react";
import classes from "../../styles/contact.module.css";
import { NextSeo } from "next-seo";

function ContactPage() {
  const SEO = {
    title: "Contact Page",
    description: "this is a simple contact page",
    openGraph: {
      title: "Contact Page",
      description: "this is a simple contact page",
    },
  };

  return (
    <Fragment>
      <NextSeo {...SEO} />

      <section className={classes.contact}>
        <div className="row">
          <div className="col-lg-12">
            <h5>If you have any query please contact with us via this email</h5>
            <h6> example@gmail.com</h6>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default ContactPage;
