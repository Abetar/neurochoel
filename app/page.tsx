import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import DoctorInfo from './components/DoctorInfo'
import BotonWhatsapp from './components/BotonWhatsApp'
import SocialButtons from './components/SocialButtons'
import ServicesSection from './components/ServiceSection'
import ReviewSection from './components/ReviewSection'
import UbicacionesSection from './components/UbicacionSeccion'

export default function Home() {
  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Sobre el Doctor', href: '#doctor' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Reseñas', href: '#reseñas' },
    { label: 'Ubicación', href: '#ubicaciones' }
  ]

  const serviciosNeuro = [
    'Cirugía fosa posterior',
    'Visitas sucesivas Neurocirugía',
    'Artrodesis cervical anterior',
    'Artrodesis cervical posterior',
    'Biopsia cerebral abierta',
    'Cambio o retirada de válvula en hidrocefálias',
    'Primera visita Neurocirugía',
    'Cirugía de fístula de líquido cefalorraquídeo',
    'Cirugía de hernia discal cervical',
    'Cirugía de la estenosis raquídea',
    'Cirugía de lesiones cerebrales',
    'Cirugía de reparación de tumores cerebrales',
    'Consulta en línea',
    'Laminectomías dorsales o lumbares',
    'Cirugía de columna',
    'Visita Neurocirugía',
    'Microcirugía de hernia de disco'
  ]


type Ubicacion = {
  nombre: string;
  link?: string;
  tipo: 'fisica' | 'en_linea';
};

const ubicaciones: Ubicacion[] = [
  {
    nombre: 'Clínica San Jerónimo',
    link: 'https://www.google.com/maps/place/25%C2%B041\'02.6%22N+100%C2%B021\'22.2%22W/@25.6840572,-100.3561707,17z',
    tipo: 'fisica',
  },
  {
    nombre: 'Hospital Las Palmas',
    link: 'https://www.google.com/maps/search/?api=1&query=25.7666016,-100.3077393',
    tipo: 'fisica',
  },
  {
    nombre: 'Consulta en línea',
    tipo: 'en_linea',
  },
]

  const reseñas = [
    {
      nombre: 'Norma Martínez',
      texto: 'Fue mi primer cita y me sentí muy agusto, me mandó hacer estudios y sin duda regresaré, muy amable, muy amena la consulta.',
      estrellas: 5,
      fuente: 'Doctoralia',
      link: 'https://www.doctoralia.com.mx/carlos-enrique-hernandez-choel/neurocirujano/general-escobedo#profile-reviews',
    },
    {
      nombre: 'Lourdes Ortiz',
      texto: 'Excelente servicio y un gran doctor. Altamente recomendado!',
      estrellas: 5,
      fuente: 'Doctoralia',
      link: 'https://www.doctoralia.com.mx/carlos-enrique-hernandez-choel/neurocirujano/general-escobedo#profile-reviews',
    },
    {
      nombre: 'Martha Garza',
      texto: 'Puntualidad, Paciencia y dedicación en el estudio qué me realizo. Lo recomiendo!',
      estrellas: 5,
      fuente: 'Otro',
    },
  ]

  return (
    <>
      <Navbar
        links={navLinks}
        ctaText="Agendar cita"
        ctaHref="https://wa.me/5281476272255?text=Hola%20Dr.%20Carlos%20Enrique,%20me%20gustaría%20agendar%20una%20cita."
      />


      <main className="min-h-screen">
        {          /* Hero Section */}
        <HeroSection
          titulo="Bienvenido a la Clínica del Dr. Carlos Enrique Hernandez Choel"
          subtitulo="Tu salud es nuestra prioridad"
          ctaTexto="Contáctanos"
          ctaLink="https://wa.me/5281476272255?text=Hola%20Dr.%20Carlos%20Enrique,%20me%20gustaría%20agendar%20una%20cita."
          imagenSrc="/neuro_hero.png"
          align="center"
          fullHeight={true}
        />

        <DoctorInfo
          nombre="Dr. Carlos Enrique Hernández Choel"
          descripcion="Médico Neurocirujano especializado en cirugía cerebral y de columna. Con experiencia en tratamientos de alta complejidad, abordaje mínimamente invasivo y atención tanto a adultos como a población pediátrica."
          especialidades={[
            'Tumores cerebrales',
            'Epilepsia',
            'Astrocitoma en niños',
            'Tumor medular'
          ]}
          formacion="Universidad de Monterrey (UDEM) y Unidad Médica de Alta Especialidad IMSS 25"
          cedula='Cédula Profesional: 7443058'
          idiomas="Español e inglés"
          imagenSrc="/dr_choel.jpg"
        />

        <ServicesSection servicios={serviciosNeuro} />

        <ReviewSection reseñas={reseñas} />

        <UbicacionesSection ubicaciones={ubicaciones} />

        <SocialButtons
          doctoralia="https://www.doctoralia.com.mx/carlos-enrique-hernandez-choel/neurocirujano/general-escobedo"
        // instagram="https://www.instagram.com/capill.arte/"
        // tiktok="https://www.tiktok.com/@capillarte"
        />
      </main>
      <BotonWhatsapp />
      <Footer />
    </>
  )
}
