'use client'

import { MapPin, Monitor } from 'lucide-react'
import { motion } from 'framer-motion'

export default function UbicacionesSection() {
  return (
    <section className="py-20 px-4 md:px-24 bg-gray-50 text-center" id='ubicaciones'>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10">
        Ubicaciones
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {/* Clínica San Jerónimo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-start transition"
        >
          <div className="text-blue-600 mb-4">
            <MapPin size={40} />
          </div>
          <p className="text-lg font-semibold text-slate-800 mb-2">
            Clínica San Jerónimo
          </p>
          <div className="w-full h-40 mt-2 rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.838311410301!2d-103.39399652398897!3d20.66267889874774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3e1dc52a2c7%3A0x64cfcc46044f07ef!2sCl%C3%ADnica%20San%20Jer%C3%B3nimo!5e0!3m2!1ses-419!2smx!4v1692487553484!5m2!1ses-419!2smx"
              loading="lazy"
              allowFullScreen
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </motion.div>

        {/* Hospital Las Palmas */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-start transition"
        >
          <div className="text-blue-600 mb-4">
            <MapPin size={40} />
          </div>
          <p className="text-lg font-semibold text-slate-800 mb-2">
            Hospital Las Palmas
          </p>
          <div className="w-full h-40 mt-2 rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.6072452252445!2d-103.39368982571736!3d20.70430859992888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1fa6307e421%3A0xf5d60d56002b7f97!2sHospital%20Las%20Palmas!5e0!3m2!1ses-419!2smx!4v1692487665113!5m2!1ses-419!2smx"
              loading="lazy"
              allowFullScreen
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </motion.div>

        {/* Consulta en línea */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-start transition"
        >
          <div className="text-blue-600 mb-4">
            <Monitor size={40} />
          </div>
          <p className="text-lg font-semibold text-slate-800 mb-2">
            Consulta en línea
          </p>
          <p className="text-sm text-gray-500 italic">Consulta en línea</p>
        </motion.div>

      </div>
    </section>
  )
} 
