import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {Header} from "./_components/header";
import { library } from '@fortawesome/fontawesome-svg-core'
import { getUnaspHeader } from "./_services/home";

const poppins = Poppins({weight: ['100','200','300','400','500','600','700','800','900'],subsets: ['latin-ext']} );

// export const metadata: Metadata = {
//   title: "Igreja Unasp SP",
//   description: "Generated by create next app",
// };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = await getUnaspHeader()
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header data={header} />
        {children}
        </body>
    </html>
  );
  
}
