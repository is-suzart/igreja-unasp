import Image from "next/image";
import { Button } from "./components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Button text="olá" link="" outline={false} type="sucesso" hasIcon={false} />
        {/* <button className="rounded-full px-5 py-2 font-bold border-2 border-perigo hover:border-perigo-hover text-perigo"></button> */}
      </div>
    </main>
  );
}
