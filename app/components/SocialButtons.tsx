'use client'

import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa'
import { MdLocalHospital } from 'react-icons/md'

type SocialLinks = {
    doctoralia?: string
    instagram?: string
    tiktok?: string
    facebook?: string
}

export default function SocialButtons({
    doctoralia,
    instagram,
    tiktok,
    facebook
}: SocialLinks) {
    return (
        <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-6">
            {doctoralia && (
                <a
                    href={doctoralia}
                    target="_blank"
                    className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full flex items-center gap-2 transition"
                >
                    <MdLocalHospital /> Doctoralia
                </a>
            )}
            {instagram && (
                <a
                    href={instagram}
                    target="_blank"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full flex items-center gap-2 transition"
                >
                    <FaInstagram /> Instagram
                </a>
            )}
            {tiktok && (
                <a
                    href={tiktok}
                    target="_blank"
                    className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full flex items-center gap-2 transition"
                >
                    <FaTiktok /> TikTok
                </a>
            )}
            {facebook && (
                <a
                    href={facebook}
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center gap-2 transition"
                >
                    <FaFacebook /> Facebook
                </a>
            )}
        </div>
    )
}
