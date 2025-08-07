'use client'

import { motion } from 'framer-motion'

interface SpineSectionProps {
  servicios: string[]
  titulo?: string
}

const offset = [0, -1, -2, -3, -4, -3, -2, -1, 0, 1, 2, 3, 4, 3, 2, 1, 0]

export default function SpineSection({ servicios, titulo = 'Servicios' }: SpineSectionProps) {
  return (
    <section className="relative py-16 px-4 flex justify-center items-center flex-col bg-[#f5f5f5] text-[#0f0e17]" id="servicios">
      <h2 className="text-4xl text-center mb-10 border-b-2 border-gold inline-block">
        {titulo}
      </h2>

      <div className="relative w-full max-w-3xl flex flex-col items-center gap-3">
        {servicios.map((servicio, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-4 w-full justify-center hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(${offset[i % offset.length] * 4}px)` }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <img
              src="/vertebra_icon.png"
              alt="Vértebra"
              className="w-8 h-8 object-contain"
            />
            <span className="text-sm font-semibold text-slate-800 text-left break-words max-w-[220px] md:max-w-none">
              {servicio}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="https://wa.me/521XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold text-black py-3 px-6 rounded-full font-semibold shadow hover:bg-[#caa835] transition"
        >
          Solicitar Valoración
        </a>
      </div>
    </section>
  )
}
