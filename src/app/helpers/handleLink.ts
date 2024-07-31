import { LinkModel } from "../models/layout.model";

export function handleUrl(link:LinkModel):string{
    if (link.kind === "Interno" && link.url_inter.includes("https://igrejaunasp.com/api")){
        return link.url_inter.split("https://igrejaunasp.com/api")[1]
    } else if (link.kind === "Interno" && link.url_inter == ""){
        return ""
    } else {
        return link.url_ext  != "" ? link.url_ext : ""
    }
}
export function handleTarget(link:LinkModel):string{
    if (link.kind === "Interno"){
        return "_self"
    } else {
        return "_blank"
    }
}