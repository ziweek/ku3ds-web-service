import Head from "next/head";
import Image from "next/image";
import AnimationRocket from "../components/animation/animation-rocket";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="KU-3DS" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="flex flex-col min-h-screen items-center justify-center ">
          <AnimationRocket />
          <h1>메인 페이지로 가기</h1>
        </div>
      </Layout>
    </div>
  );
}
