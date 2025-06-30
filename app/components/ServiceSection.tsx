'use client'

import React from 'react'

interface SpineSectionProps {
    servicios: string[]
    titulo?: string
}

const offset = [0, -1, -2, -3, -4, -3, -2, -1, 0, 1, 2, 3, 4, 3, 2, 1, 0]

const SpineSection: React.FC<SpineSectionProps> = ({ servicios, titulo = 'Servicios' }) => {
    return (
        <section className="relative py-16 px-4 flex justify-center items-center flex-col bg-blue-100" id = "servicios">
            <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center z-10">{titulo}</h2>

            <div className="relative w-full max-w-3xl flex flex-col items-center gap-3">
                {/* Lista de vértebras con servicios */}
                {servicios.map((servicio, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-4 z-10 w-full justify-center hover:scale-105 transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(${offset[i % offset.length] * 4}px)` }}
                    >
                        <img
                            src="/vertebra_icon.png"
                            alt="Vértebra"
                            className="w-8 h-8 object-contain"
                        />
                        <span className="text-sm font-semibold text-slate-800 text-left md:text-left text-center break-words max-w-[220px] md:max-w-none">
                            {servicio}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SpineSection
