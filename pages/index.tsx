import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header, Hero, Footer } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Surya</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}
