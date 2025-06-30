'use client'

import React from 'react'

interface SpineSectionProps {
    servicios: string[]
    titulo?: string
}

const offset = [0, -1, -2, -3, -4, -3, -2, -1, 0, 1, 2, 3, 4, 3, 2, 1, 0]

const SpineSection: React.FC<SpineSectionProps> = ({ servicios, titulo = 'Servicios' }) => {
    return (
        <section className="relative py-16 px-10 flex justify-center items-center flex-col bg-blue-100">
            {/* Título de la sección */}
            <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center z-10">{titulo}</h2>

            <div className="relative w-full max-w-md flex flex-col items-start gap-3">

                {/* Silueta médica SVG de fondo */}
                <svg
                    viewBox="0 0 100 600"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-1/2 -translate-x-1/2 top-0 h-full opacity-80 z-0"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <path
                        d="
              M30,30
              C25,80 50,120 30,180
              C10,240 35,300 20,360
              C5,420 25,500 30,570
              C35,500 55,420 60,360
              C65,300 45,240 70,180
              C90,120 60,80 70,30
              Z
            "
                        fill="#BFDBFE"
                    />
                </svg>

                {/* Vértebras con texto permanente */}
                {servicios.map((servicio, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-4 z-10"
                        style={{ transform: `translateX(${offset[i % offset.length] * 4}px)` }}
                    >
                        <div className="w-10 h-5 rounded-full bg-blue-800 shadow-md" />
                        <span className="text-sm text-slate-800 font-semibold">{servicio}</span>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default SpineSection
