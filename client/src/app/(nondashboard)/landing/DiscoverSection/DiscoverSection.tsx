'use client'

import { motion } from "framer-motion"
import { discoverData } from '@/data'
import DiscoverCard from "./DiscoverCard"


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
            staggerChildren: 0.2,
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


const  DiscoverSection = () => {
  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="flex flex-col items-center justify-center w-full px-4 gap-8 md:gap-12"
    >

        <motion.h2
            variants={itemVariants}
            className="text-center font-bold text-2xl mb-4  md:max-w-7/12 text-slate-500 "
            >
            Para encontrar tu hogar soñado es tan facil como:
        </motion.h2>

        <div className="grid w-full items-center grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
            {discoverData.map((_, index) => (
              <motion.div key={index} variants={itemVariants}>
                    <DiscoverCard 
                        icon={_.icon}
                        title={_.title}
                        description={_.description}
                    />
                   
              </motion.div>
            ))}

        </div>
      
    </motion.div>
  )
}

export default DiscoverSection
