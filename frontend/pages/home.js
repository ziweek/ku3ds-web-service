import Head from "next/head";
import Layout from "../components/layout";
import Hoi from "../components/home/hero";
import ContentLaunch from "../components/home/content-launch";
import LaunchButton from "../components/home/button";
import Gugu from "../components/home/earth";
import Memo from "../components/home/memo";
import ContentPlanet from "../components/home/content-planet";
import Title from "../components/home/title";
import Event from "../components/home/event";

export default function Main() {
  return (
    <div>
      <Head>
        <title>KU-3DS</title>
        <meta name="KU-3DS" content="Generated by KU-3DS" />
        <link rel="icon" href="/favicon.ico" />ㅈ
      </Head>

      <Layout>
        <div className="bg-primary">
          <br />
          <br />
          <Title text="메타버스 스토리"></Title>
          <Hoi />
          <Memo />
          <Gugu />
          <ContentPlanet />
          <Title text="일시 및 장소"></Title>
          <Event></Event>
        </div>
      </Layout>
    </div>
  );
}
