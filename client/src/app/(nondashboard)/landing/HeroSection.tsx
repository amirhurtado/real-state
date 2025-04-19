"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="h-svh relative ">
      <div className="relative h-full">
        <Image
          src="/hero.svg"
          alt="Landing Image"
          fill
          className="object-cover  bg-black"
        />
      </div>

      <div className=" absolute inset-0 h-svh bg-black opacity-35"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute  w-10/12 lg:w-1/3 top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-12"
      >
        <h2 className="flex items-center justify-center text-white text-3xl md:text-4xl font-bold">Comienza tu viaje para encontrar el lugar perfecto al que llamar hogar.</h2>

        <div className="flex items-center h-10 md:h-12">
          <Input
            placeholder="Busca en el mapa"
            className="w-full h-full text-sm md:text-[.9rem] rounded-l-[.5rem] bg-white text-black "
          />
          <Button className="h-full rounded-l-none">
            <Search />
          </Button>
        </div>
        
      </motion.div>
    </div>
  );
};

export default HeroSection;
