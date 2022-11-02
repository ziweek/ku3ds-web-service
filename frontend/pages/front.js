import Head from "next/head";
import Hero from "../components/front/hero";
import Layout from "../components/layout";

export default function Main() {
  return (
    <div>
      <Head>
        <title>KU-3DS</title>
        <meta name="KU-3DS" content="Generated by KU-3DS" />
        <link rel="icon" href="/favicon.ico" />ㅈ
      </Head>

      <Layout>
        <div className="bg-black">
          <Hero />
        </div>
      </Layout>
    </div>
  );
}