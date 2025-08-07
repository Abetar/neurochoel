'use client'

import { Monitor, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

interface Ubicacion {
  nombre: string
  link?: string
  tipo: 'fisica' | 'en_linea'
}

interface Props {
  ubicaciones: Ubicacion[]
}

const mapEmbeds: Record<string, string> = {
  'Clínica San Jerónimo':
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.6688471963123!2d-100.3561707!3d25.6840572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662eb3f41b6c843%3A0x213a3e2d6f5d25a3!2sCl%C3%ADnica%20San%20Jer%C3%B3nimo!5e0!3m2!1ses-419!2smx!4v1696898412977!5m2!1ses-419!2smx',
  'Hospital Las Palmas':
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.889657242024!2d-100.3077393!3d25.7666016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662e8c7a0f2c3ab%3A0x6f8d8e6740b2d03b!2sHospital%20Las%20Palmas!5e0!3m2!1ses-419!2smx!4v1696898535117!5m2!1ses-419!2smx',
}

const UbicacionesSection: React.FC<Props> = ({ ubicaciones }) => {
  return (
    <section className="py-20 px-4 md:px-24 bg-gray-50 text-center" id="ubicaciones">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10">Ubicaciones</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {ubicaciones.map((ubicacion, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow overflow-hidden flex flex-col items-center transition"
          >
            {ubicacion.tipo === 'fisica' && mapEmbeds[ubicacion.nombre] ? (
              <>
                <iframe
                  src={mapEmbeds[ubicacion.nombre]}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="py-4">
                  <p className="text-lg font-semibold text-slate-800 mb-1">{ubicacion.nombre}</p>
                </div>
              </>
            ) : (
              <div className="p-8 flex flex-col items-center justify-center">
                <Monitor className="text-blue-600 mb-4" size={40} />
                <p className="text-lg font-semibold text-slate-800 mb-2">{ubicacion.nombre}</p>
                <p className="text-sm text-gray-500 italic">Disponible por videollamada</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default UbicacionesSection
