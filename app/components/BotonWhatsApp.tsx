
'use client'
import { FaWhatsapp } from 'react-icons/fa'

export default function BotonWhatsapp() {
    return (
        <a
            href="https://wa.me/5218147627225?text=Hola%20Dr.%20Carlos%20Enrique,%20me%20gustaría%20agendar%20una%20cita."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors duration-300"
            aria-label="Chatear por WhatsApp"
        >
            <FaWhatsapp className="w-6 h-6" />
        </a>
    )
}