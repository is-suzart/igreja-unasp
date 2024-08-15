import { Anuncio } from "../components/ad";
import { Banner } from "../components/banner";
import { Section } from "../components/section";
import { SectionModel } from "../models/page.model";
import { getPage } from "../services/home";

export default async function Sobre(){
    const sobrePage = await getPage('sobre');
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