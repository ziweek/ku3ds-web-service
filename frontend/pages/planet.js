import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import ContentPlanet from "../components/main/content-planet";

export default function Main() {
  return (
    <div>
      <Head>
        <title>KU-3DS</title>
        <meta name="KU-3DS" content="Generated by KU-3DS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="bg-black">
          <ContentPlanet />
        </div>
      </Layout>
    </div>
  );
}
