export type DayHours = {
  dayIndex: number
  label: string
  hours: string
  closed?: boolean
}

export const WHATSAPP_DIGITS = '50496747159'
export const WHATSAPP_DISPLAY = '+504 9674-7159'
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_DIGITS}`

export const CLINIC_PHONE_TEL = `tel:+${WHATSAPP_DIGITS}`

export const MAP_EMBED_SRC =
  'https://maps.google.com/maps?width=600&height=400&hl=es&q=Cl%C3%ADnica%20Dental%20Sosa%20Flores%20San%20Pedro%20Sula+(Clinica%20Dental%20Sosa%20Flores)&t=&z=15&ie=UTF8&iwloc=B&output=embed'

export const DIRECTIONS_URL =
  'https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica+Dental+Sosa+Flores+San+Pedro+Sula'

export const CLINIC_ADDRESS_LINES = [
  'Clínica Dental Sosa Flores',
  '12 Avenida 2 y 3 Calle NO',
  'San Pedro Sula, Cortés, Honduras',
  'Frente al Centro Médico de la Mujer Monte de Sion',
] as const

export const SCHEDULE: DayHours[] = [
  { dayIndex: 0, label: 'Domingo', hours: 'Cerrado', closed: true },
  { dayIndex: 1, label: 'Lunes', hours: '8:00 – 17:00' },
  { dayIndex: 2, label: 'Martes', hours: '8:00 – 17:00' },
  { dayIndex: 3, label: 'Miércoles', hours: '8:00 – 17:00' },
  { dayIndex: 4, label: 'Jueves', hours: '8:00 – 17:00' },
  { dayIndex: 5, label: 'Viernes', hours: '8:00 – 17:00' },
  { dayIndex: 6, label: 'Sábado', hours: '8:00 – 12:00' },
]
