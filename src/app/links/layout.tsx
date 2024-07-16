import { Poppins } from "next/font/google";

const poppins = Poppins({weight: ['100','200','300','400','500','600','700','800','900'],subsets: ['latin-ext']} );
export default async function LinksLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={poppins.className}>
          {children}
          </body>
      </html>
    );
  }