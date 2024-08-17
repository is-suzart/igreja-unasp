import axios from 'axios'
import { LinksModel, MemberModel, PageModel, SectionModel } from '../models/page.model'
import { ColorGroup, HeaderModel } from '../models/layout.model'
import { returnColor } from '../helpers/colorHelper'
const urlApi = 'https://igrejaunasp.com/api/wp-json/wp/v2/'

// interface seoModel {
//     title: string;
//     robots: {
//         index: string;
//         follow: string;
//         "max-snippet": string;
//         "max-image-preview": string;
//         "max-video-preview": string;

//     }
// }


export async function getPage(title:string){
   const res:any = await axios({
        method: 'get',
        url: `${urlApi}pages`,
        params: {
            slug: title
        }
    })
    const data = res.data
    var sectionsOn: SectionModel[] = [];
    var serverSection = data[0].acf.secao
        sectionsOn = serverSection.map((x:any) => {
            function addClassesToStrong(htmlString: string, color: ColorGroup): string {
                const colorClass = `text-${returnColor(color)}`;
                const replacement = `<strong class="font-bold ${colorClass}">`;
                return htmlString.replace(/<strong>/g, replacement);
            }
            var titulo = addClassesToStrong(x.titulo_com_cores.titulo, x.titulo_com_cores.color_grupo);
            return<SectionModel> {
                image: x.img,
                title: titulo,
                subTitle: x.subtitle,
                align: x.align,
                text: x.text,
                buttons: x.btns,
                categoriasMembros: x.isSection == "Membros" ? x.categorias_membros : null,
                type: x.isSection
            }
        })

    const result: PageModel = {
        id: data[0].id,
        title: data[0].title.rendered,
        banner: data[0].acf.banner,
        sections: sectionsOn,
        encontros: data[0].acf.encontros,
        seo: data[0].yoast_head_json
    }
    return result
}
export async function getUnaspHeader(){
    const res:any = await axios({
        method: 'get',
        url: `${urlApi}layout`,
        params: {
            title: 'header'
        }
    })
    const data = res.data
    const result: HeaderModel = {
        id: data[0].id,
        title: data[0].title.rendered,
        logo: data[0].acf.header.logo,
        menus: data[0].acf.header.menus,
        social: data[0].acf.header.social
    }
    return result
}
export async function getLinks(title:string){
    const res:any = await axios({
        method: 'get',
        url: `${urlApi}pages`,
        params: {
            slug: title
        }
    })
    const data = res.data
    const result: LinksModel = {
        id: data[0].id,
        title: data[0].title.rendered,
        background: data[0].acf.background,
        btns: data[0].acf.btns
    }
    return result
}
export async function getMembers(categories:number[]){
    const categoriesIDS = categories.join(',')
    const res:any = await axios({
        method: 'get',
        url: `${urlApi}membro`,
        params: {
            categories: categoriesIDS
        }
    })
    const data = res.data
    var result: MemberModel[] = [];
    result = data.map((x:any) => {
        return <MemberModel>{
            id: x.id,
            slug: x.slug,
            name: x.title.rendered,
            photo: x.yoast_head_json.og_image ? x.yoast_head_json.og_image[0].url : undefined,
            text: x.content.rendered,
            cargo: x.acf.cargo,
            social: x.acf.social
        }
    })

    return result
}