import Image from "next/image";
import Button from "./components/button";
import {Banner} from "./components/banner";
import { getPage } from "./services/homeService";


export default async function Home() {
  const homePage = await getPage('index');
  return (
    <main className="">
      <Banner bannerData={homePage.banner} />
    </main>
  );
}