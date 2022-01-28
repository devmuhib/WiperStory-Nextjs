import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/Layout/Layout";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}

export default MyApp;
