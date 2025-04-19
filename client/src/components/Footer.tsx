import { Linkedin, Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-full flex flex-col gap-2 justify-center md:items-center my-6 md:my-16  ">
      <div className="grid grid-cols-1 place-items-center md:grid-cols-4 gap-2 md:gap-6 text-slate-500 px-4 py-2 text-sm md:text-md">
        <Link
          href="/about"
          className="hover:underline hover:text-primary transition-color duration-200 ease-in"
        >
          <p>Sobre nosotros</p>
        </Link>
        <Link
          href="/contact"
          className="hover:underline hover:text-primary transition-color duration-200 ease-in "
        >
          <p>Contáctanos</p>
        </Link>
        <Link
          href="/contact"
          className="hover:underline hover:text-primary transition-color duration-200 ease-in "
        >
          <p>Terminos y condiciones</p>
        </Link>
        <Link
          href="/contact"
          className="hover:underline hover:text-primary transition-color duration-200 ease-in "
        >
          <p>Privacidad</p>
        </Link>
      </div>
      <div className="flex flex-col w-full items-end justify-end gap-2 px-4 py-2">
        <div className="w-full flex items-center justify-end gap-4">
          <Github
            strokeWidth={1}
            className="cursor-pointer hover:scale-[.9] transform transition-transform duration-200 ease-in"
          />
          <Linkedin
            strokeWidth={1}
            className="cursor-pointer hover:scale-[.9] transform transition-transform duration-200 ease-in"
          />
        </div>
      </div>
      <p className="w-full text-end  px-4 text-sm">Desarrollado por Amir Hurtado</p>
    </div>
  );
};

export default Footer;
