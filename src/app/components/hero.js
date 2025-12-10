"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const hero = () => {

{/*For Hero Section*/}

const heading = "Waterfalls".split("");
 const subHeading = "Athirappilly".split("");


  // Parent animation container
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  // Each letter animation
   const letterAnim = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };


  return (
   <>
 
{/* ===== Hero Section ===== */}

    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero1.jpg"
          alt="Waterfall Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-gray-200 text-lg md:text-2xl tracking-wide mb-4"
        >
          There is hidden message in every waterfall
        </motion.p>

        {/* Niagara animated text */}
        <motion.h2
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-yellow-600 text-4xl md:text-[80px]  font-semibold tracking-wider flex justify-center mb-2"
        >
          {subHeading.map((char, index) => (
            <motion.span key={index} variants={letterAnim} className="inline-block">
              {char}
            </motion.span>
          ))}
        </motion.h2>

        {/* Waterfall animated text */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-yellow-600 text-6xl md:text-[120px] lg:text-[150px] font-semibold tracking-wider flex justify-center"
        >
          {heading.map((char, index) => (
            <motion.span key={index} variants={letterAnim} className="inline-block">
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* Optional bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/60 to-transparent"></div>
    </section>

   </>
  )
}

export default hero