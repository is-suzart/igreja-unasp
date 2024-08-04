import { Crimson_Pro } from "next/font/google";
import DOMPurify from "isomorphic-dompurify";

const serif = Crimson_Pro({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
  });

  export const serifStyle = serif.style;
  export const serifClass = serif.className;


  export function cleanIt(html:string){
    return DOMPurify.sanitize(html)
  }

