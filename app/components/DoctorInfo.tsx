'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { GraduationCap, Languages, Stethoscope } from 'lucide-react'

type DoctorInfoProps = {
    nombre: string
    descripcion: string
    especialidades: string[]
    formacion: string
    cedula: string
    idiomas: string
    imagenSrc: string
    altImagen?: string
}

export default function DoctorInfo({
    nombre,
    descripcion,
    especialidades,
    formacion,
    cedula,
    idiomas,
    imagenSrc,
    altImagen = 'Fotografía del doctor',
}: DoctorInfoProps) {
    return (
        <section id="doctor" className="bg-white py-16 px-6 md:px-12 lg:px-24">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
                {/* Imagen del doctor */}
                <div className="flex justify-center">
                    <Image
                        src={imagenSrc}
                        alt={altImagen}
                        width={400}
                        height={500}
                        className="rounded-xl shadow-md object-cover max-h-[500px]"
                    />
                </div>

                {/* Texto informativo */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                        {nombre}
                    </h2>
                    <p className="text-gray-700 mb-6">{descripcion}</p>

                    <div className="space-y-4">
                        {/* Especialidades */}
                        <div className="flex items-start gap-3">
                            <Stethoscope className="text-blue-700 mt-1" />
                            <div>
                                <h4 className="font-semibold text-gray-800">Especialidades</h4>
                                <ul className="text-gray-600 list-disc ml-5">
                                    {especialidades.map((esp, i) => (
                                        <li key={i}>{esp}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Formación académica */}
                        <div className="flex items-start gap-3">
                            <GraduationCap className="text-blue-700 mt-1" />
                            <div>
                                <h4 className="font-semibold text-gray-800">Formación Académica</h4>
                                <p className="text-gray-600">{formacion}</p>
                                <p className="text-gray-600">{cedula}</p>
                            </div>
                        </div>

                        {/* Idiomas */}
                        <div className="flex items-start gap-3">
                            <Languages className="text-blue-700 mt-1" />
                            <div>
                                <h4 className="font-semibold text-gray-800">Idiomas</h4>
                                <p className="text-gray-600">{idiomas}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
