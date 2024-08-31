// Links.tsx
import Link from "next/link";
import Button from "../_components/button";
import { ButtonModel } from "../_models/layout.model";
import { getLinks } from "../_services/home";

export default async function Links() {
  const links = await getLinks("links");
  
  // Pode ser sincronizado, sem 'await', pois não é uma função assíncrona.
  const bgStyle = {
    backgroundImage: `url(${links.background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <main
      style={bgStyle}
      className="w-full h-screen px-8 flex items-center flex-col"
    >
      <div className="py-8 flex justify-center items-center">
      </div>
      <div className="py-12 xl:py-24 2xl:py-32 w-full md:w-3/4 xl:w-2/4 2xl:w-2/3">
        {links.btns.map((btn: ButtonModel, index: number) => (
          <div className="my-8" key={index}>
            <Button
              text={btn.text}
              link={btn.link}
              color_grupo={btn.color_grupo}
              icon={btn.icon}
              outline={btn.outline}
              hasIcon={btn.icon != null}
              isFullSize={true}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
