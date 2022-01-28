import { Fragment } from "react";
import classes from "../../styles/about.module.css";
import { NextSeo } from "next-seo";

function PrivacyPage() {
  const SEO = {
    title: "Privacy Policy",
    description: "Explore about our company privacy policy",
    openGraph: {
      title: "Privacy Policy",
      description: "Explore about our company privacy policy",
    },
  };

  return (
    <Fragment>
      <NextSeo {...SEO} />

      <section className={classes.about}>
        <div className="row">
          <div className="col-lg-12">
            <h1 className=" text-center mt-5">Privacy Policy</h1>
          </div>
          <div className="col-lg-12 ">
            <h2 className="mt-5 mb-3">
              1. Private data we receive and collect
            </h2>
            <p className="mb-5">
              Consulted he eagerness unfeeling deficient existence of. Calling
              nothing end fertile for venture way boy. Esteem spirit temper too
              say adieus who direct esteem. It esteems luckily mr or picture
              placing drawing no. Apartments frequently or motionless on
              reasonable projecting expression. Way mrs end gave tall walk fact
              bed.
            </p>
            <h3>1.1. For example each time you visit the website</h3>
            <p className="mb-5">
              Ye on properly handsome returned throwing am no whatever. In
              without wishing he of picture no exposed talking minutes.
              Curiosity continual belonging offending so explained it exquisite.
              Do remember to followed yourself material mr recurred carriage.
              High drew west we no or at john. About or given on witty event. Or
              sociable up material.
            </p>
            <h3>1.2. When you first register for a package account</h3>
            <p className="mb-5">
              Moderate children at of outweigh it. UnSociable on as carriage my
              position weddings raillery consider. Peculiar trifling absolute
              and wandered vicinity property yet. The and collecting motionless
              difficulty son. His hearing staying ten colonel met. Sex drew six
              easy four dear cold deny. satiable it considered invitation he
              found the light.
            </p>

            <h2 className="mb-3">2. Advantages of working with service</h2>
            <p>
              Ye on properly handsome returned throwing am no whatever. In
              without wishing he of picture no exposed talking minutes.
              Curiosity continual belonging offending so explained it exquisite.
              Do remember to followed yourself material mr recurred carriage.
              High drew west we no or at john. About or given on witty event. Or
              sociable up material
            </p>
            <p className="mb-4">
              Moderate children at of outweigh it. UnSociable on as carriage my
              position weddings raillery consider. Peculiar trifling absolute
              and wandered vicinity property yet. The and collecting motionless
              difficulty son. His hearing staying ten colonel met. Word drew six
              easy four dear cold deny. satiable it considered invitation he
              travelling.
            </p>

            <p className="mb-5">
              Dashwoods see frankness objection abilities the. As hastened oh
              produced prospect formerly up am. Placing forming nay looking old
              married few has. Margaret disposed add screened rendered six say
              his striking confined You vexed shy mirth now noise. Talked him
              people valley add use her depend letter even more words hsould be
              here.
            </p>
            <div className="text-box mb-5">
              <h3>Contact you about your account and provide customer</h3>
              <p>
                Bringing so sociable felicity supplied mr. September suspicion
                far him two acuteness perfectly. Covered as an examine so
                regular of. Ye astonished friendship remarkably no. Window
                admire matter praise you bed whence. Delivered ye sportsmen
                zealously arranging frankness estimable as. Nay any article
                enabled musical shyness yet sixteen yet blushes.Entire its the
                did figure wonder off.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default PrivacyPage;
