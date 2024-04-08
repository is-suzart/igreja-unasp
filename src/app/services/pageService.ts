import axios from "axios"
import { PageModel } from "../models/pageModels"

const urlApi = 'https://igrejaunasp.com/api/wp-json/wp/v2/'
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
         banner: data[0].acf.site_banner,
         sections: data[0].acf.sections,
         encontros: data[0].acf.encontros,
         seo: data[0].yoast_head_json
     }
     return result
 }