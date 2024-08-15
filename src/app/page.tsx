import Image from "next/image";
import Button from "./components/button";
import {Banner} from "./components/banner";
import { Encontros } from "./partials/encontros";
import { getPage } from "./services/home";
import { Section } from "./components/section";
import { SectionModel } from "./models/page.model";
import { Anuncio } from "./components/ad";


export default async function Home() {
  const homePage = await getPage('igreja-unasp');
  return (
    <main className="">
      <Banner bannerData={homePage.banner} />
      <Encontros encontros={homePage.encontros} />
      {homePage.sections.map((section: SectionModel, index: number) => (
        section.type === 'Seção' || section.type === 'Membros' ?
        <Section key={index} section={section} keyIndex={index} />
        :
        <Anuncio key={index} anuncio={section} keyIndex={index} />
      ))}
    </main>
  );
}
export const revalidate = 86400; // Revalidate every 24 hours