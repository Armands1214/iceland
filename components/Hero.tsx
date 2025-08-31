'use client'
import Image from "next/image";
import Container from "./Container";
import { motion } from "framer-motion";

export default function Hero(){
  return (
    <section className="relative h-[88vh] w-full overflow-hidden">
      <Image src="/images/portrait-dress.jpg" alt="Mirror portrait in white dress" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <Container className="relative h-full">
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="absolute bottom-20 max-w-2xl"
        >
          <h1 className="font-display text-5xl md:text-7xl text-white drop-shadow-md">Iceland</h1>
          <p className="text-white/85 mt-4 max-w-xl">Where the fire and the ice meet — a one‑page photo essay.</p>
        </motion.div>
      </Container>
    </section>
  );
}
