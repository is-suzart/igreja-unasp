import Image from "next/image";
import Button from "./_components/button";
import {Banner} from "./_components/banner";
import { Encontros } from "./partials/encontros";
import { getPage } from "./_services/home";
import { Section } from "./_components/section";
import { SectionModel } from "./_models/page.model";
import { Anuncio } from "./_components/ad";
import { Metadata } from "next";

const homePage = await getPage('igreja-unasp');

export const metadata:Metadata = {
    title: homePage.seo.title,
    description: homePage.seo.description,
    robots: homePage.seo.robots,
    icons: {
      icon: "https://igrejaunasp.com/api/wp-content/uploads/2024/08/icone-unasp.png"
    },
    openGraph: {
      title: homePage.seo.og_title,
      description: homePage.seo.og_description,
      url: "https://igrejaunasp.com",
      siteName: homePage.seo.og_site_name,
    }

}

export default async function Home() {
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