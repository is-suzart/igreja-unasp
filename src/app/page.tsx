import Image from "next/image";
import Button from "./components/button";
import {Banner} from "./components/banner";
import { Encontros } from "./partials/encontros";
import { getPage } from "./services/home";



export default async function Home() {
  const homePage = await getPage('index');
  return (
    <main className="">
      <Banner bannerData={homePage.banner} />
      <Encontros encontros={homePage.encontros} />
    </main>
  );
}