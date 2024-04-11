import { Crimson_Pro } from "next/font/google";
const serif = Crimson_Pro({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
  });

  export const serifStyle = serif.style;
  export const serifClass = serif.className;