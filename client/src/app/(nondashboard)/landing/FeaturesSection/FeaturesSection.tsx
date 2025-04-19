'use client'

import { motion } from "framer-motion"
import FeatureCard from "./FeatureCard"


const containerVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration : 1,
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

const FeaturesSection = () => {
  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="flex flex-col items-center justify-center w-full  px-4"
    >

        <motion.h2 
            variants={itemVariants}
            className="text-center font-bold text-2xl mb-4  md:max-w-7/12 text-slate-500"
            >
                Encuentra rápidamente la casa que quieres usando nuestros eficaces filtros de búsqueda.
        </motion.h2>

        <div className="grid w-full items-center grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
            {Array.from({length: 3}).map((_, index) => (
              <motion.div key={index} variants={itemVariants}>
                    <FeatureCard
                        imageSrc={`/landing-search${3- index}.png`}
                        title={
                            [
                                "Listado confiable y verificado",
                                "Explorar listados de alquileres con facilidad",
                                "Simplifique su búsqueda de alquiler con opciones avanzadas",
                            ][index]
                        }
                        description={
                            [
                                "Encuentra tu hogar ideal con confianza, gracias a nuestros listados verificados y confiables.",
                                "Explora una amplia gama de listados de alquileres, desde apartamentos hasta casas, con facilidad y comodidad.",
                                "Simplifique su búsqueda de alquiler con opciones avanzadas que le ayuden a encontrar el lugar perfecto para vivir.",
                            ][index]
                        }
                        linkText={
                            [
                                "Buscar",
                                "Explorar",
                                "Descubrir",
                            ][index]
                        }
                        linkHref={
                            [
                                "/search",
                                "/explore",
                                "/discover",
                            ][index]
                        }
                    />
              </motion.div>
            ))}

        </div>
      
    </motion.div>
  )
}

export default FeaturesSection
