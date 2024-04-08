import axios from 'axios'
import { PageModel } from '../models/pageModels'
import { HeaderModel } from '../models/layoutModels'
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
            title: title
        }
    })
    const data = res.data
    const result: PageModel = {
        id: data[0].id,
        title: data[0].title.rendered,
        banner: data[0].acf.banner,
        sections: data[0].acf.sections,
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