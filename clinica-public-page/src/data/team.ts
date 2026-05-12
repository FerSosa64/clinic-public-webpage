export type TeamMember = {
  id: string
  name: string
  specialty: string
  description: string
  experienceYears?: number
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'yasna-flores',
    name: 'Dra. Yasna Waleska Flores',
    specialty: 'Odontología General y Estética Dental',
    description:
      'Profesional comprometida con brindar atención integral y personalizada, enfocada en la salud, funcionalidad y estética de cada sonrisa.',
    experienceYears: 12,
  },
  {
    id: 'fernando-sosa',
    name: 'Dr. Juan Fernando Sosa',
    specialty: 'Ortodoncia y Cirugía Dental',
    description:
      'Especialista enfocado en tratamientos avanzados y soluciones odontológicas modernas para mejorar la salud bucal y la confianza de sus pacientes.',
    experienceYears: 15,
  },
]
