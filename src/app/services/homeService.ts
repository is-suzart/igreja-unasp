import axios from 'axios'

const urlApi = 'http://api-unasp.test/wp-json/wp/v2/'

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

interface HomePageModel {
    id: number;
    title: string;
    front: {
        site_banner: any[],
        sections: any[],
        encontros: any[],
    }
    seo: any;
}

export async function getHomePage(){
   const res:any = await axios({
        method: 'get',
        url: `${urlApi}pages`,
        params: {
            title: 'Home'
        }
    })
    const data = res.data
    const result: HomePageModel = {
        id: data[0].id,
        title: data[0].title.rendered,
        front: {
            "site_banner": data[0].acf.site_banner,
            "sections": data[0].acf.sections,
            "encontros": data[0].acf.encontros
        },
        seo: data[0].yoast_head_json
    }
    return result
}