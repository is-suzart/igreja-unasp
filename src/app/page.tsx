import Image from "next/image";
import Button from "./components/button";
import {Banner} from "./components/banner";
import { Encontros } from "./partials/encontros";
import { getPage } from "./services/home";
import { Section } from "./components/section";
import { SectionModel } from "./models/page";
import { Anuncio } from "./components/ad";



export default async function Home() {
  const homePage = await getPage('index');
  return (
    <main className="">
      <Banner bannerData={homePage.banner} />
      <Encontros encontros={homePage.encontros} />
      {homePage.sections.map((section: SectionModel, index: number) => (
        section.type === 'Seção' ?
        <Section key={index} section={section} keyIndex={index} />
        :
        <Anuncio key={index} anuncio={section} />
      ))}
    </main>
  );
}