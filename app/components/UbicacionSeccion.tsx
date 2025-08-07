'use client'

import { MapPin, Monitor } from 'lucide-react'
import { motion } from 'framer-motion'

type Ubicacion = {
  nombre: string
  link?: string
  tipo: 'fisica' | 'en_linea'
  embedMap?: string // Solo para ubicaciones físicas
}

interface UbicacionesSectionProps {
  ubicaciones: Ubicacion[]
}

const UbicacionesSection: React.FC<UbicacionesSectionProps> = ({ ubicaciones }) => {
  return (
    <section className="py-20 px-4 md:px-24 bg-gray-50 text-center" id="ubicaciones">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10">
        Ubicaciones
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {ubicaciones.map((ubicacion, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-start transition"
          >
            <div className="text-blue-600 mb-4">
              {ubicacion.tipo === 'en_linea' ? <Monitor size={40} /> : <MapPin size={40} />}
            </div>

            <p className="text-lg font-semibold text-slate-800 mb-2">
              {ubicacion.nombre}
            </p>

            {ubicacion.tipo === 'en_linea' ? (
              <p className="text-sm text-gray-500 italic">Consulta en línea</p>
            ) : (
              <div className="w-full h-40 mt-2 rounded overflow-hidden">
                <iframe
                  src={ubicacion.embedMap}
                  loading="lazy"
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default UbicacionesSection
