import { Metadata } from "next";
import { Anuncio } from "../_components/ad";
import { Banner } from "../_components/banner";
import { Section } from "../_components/section";
import { SectionModel } from "../_models/page.model";
import { getPage } from "../_services/home";

const sobrePage = await getPage('sobre');

export const metadata:Metadata = {
    title: sobrePage.seo.title,
    description: sobrePage.seo.description,
    robots: sobrePage.seo.robots,
    icons: {
      icon: "https://igrejaunasp.com/api/wp-content/uploads/2024/08/icone-unasp.png"
    },
    openGraph: {
      title: sobrePage.seo.og_title,
      description: sobrePage.seo.og_description,
      url: "https://igrejaunasp.com",
      siteName: sobrePage.seo.og_site_name,
    }

}

export default async function Sobre(){
    
    return (
        <main>
            <Banner bannerData={sobrePage.banner} />
            {sobrePage.sections.map((section: SectionModel, index: number) => (
                section.type === 'Seção' || section.type === 'Membros' ?
                <Section key={index} section={section} keyIndex={index} />
                :
                <Anuncio key={index} anuncio={section} keyIndex={index} />
            ))}
        </main>
    )
}

export const revalidate = 86400; // Revalidate every 24 hours