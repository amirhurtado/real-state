'use client"'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 shadow-xl z-50 ">
      <div className="flex justify-between items-center w-full h-full px-3 md-px-8 py-3 bg-background group">
        <Link href="/" className=" flex gap-2 md:gap-4 items-center" scroll={false}>
          <div className="cursor-pointer relative h-8 w-8 md:h-12 md:w-12">
            <Image src={"/logo.svg"} alt="Logo" fill className="object-left" />
          </div>
          <h1 className="text-sm md:text-2xl font-bold group-hover:text-primary transition-colors ease-in  ">
            <Typewriter
            words={["Monte"]}
            loop={1}
            cursor
            cursorStyle="|"
            />
          </h1>
        </Link>

        <h3 className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">Encuentra el mejor apartamento para rentar ahora mismo.</h3> 

        <div className="flex gap-2 md:gap-4 items-center">
          <Button variant={'outline'}>
            <Link href="/login" className="text-[.8rem] md:text-[.9rem]"  >Iniciar Sesión</Link>
          </Button>
          <Button  >
            <Link href="/register" className="text-[.8rem] md:text-[.9rem]">Registrarse</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
