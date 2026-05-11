export type ServiceItem = {
  title: string
  description: string
}

export type ServiceCategory = {
  id: string
  name: string
  intro: string
  items: ServiceItem[]
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'odontologia-preventiva',
    name: 'Odontología Preventiva',
    intro:
      'La odontología preventiva está enfocada en mantener una buena salud bucal y en detectar o frenar problemas antes de que avancen. En consulta revisamos dientes, encías y hábitos de higiene, explicamos con claridad qué conviene en cada caso y aplicamos tratamientos suaves cuando hace falta. Así reducimos el riesgo de caries, inflamación de encías y complicaciones mayores, y ayudamos a niños, jóvenes y adultos a conservar una sonrisa sana y cómoda durante muchos años.',
    items: [
      {
        title: 'Limpiezas Dentales',
        description:
          'Eliminan placa bacteriana y sarro acumulado para prevenir caries y enfermedades en las encías.',
      },
      {
        title: 'Selladores Dentales',
        description:
          'Capa protectora aplicada sobre los molares para prevenir la aparición de caries.',
      },
      {
        title: 'Aplicación de Flúor',
        description:
          'Tratamiento que fortalece el esmalte dental y ayuda a prevenir caries, especialmente en niños y adolescentes.',
      },
    ],
  },
  {
    id: 'odontologia-restauradora',
    name: 'Odontología Restauradora',
    intro:
      'La odontología restauradora busca devolver la función, la resistencia y la estética cuando un diente ha sufrido caries, un golpe, desgaste o pérdida. Trabajamos con materiales modernos y técnicas conservadoras siempre que sea posible, para que mastique con comodidad, hable con seguridad y sonría sin preocuparse por huecos o piezas dañadas. Cada plan se adapta a sus necesidades, alineando salud bucal, durabilidad y un resultado natural que combine con el resto de su sonrisa.',
    items: [
      {
        title: 'Resinas Dentales',
        description:
          'Restauraciones estéticas utilizadas para reparar caries o fracturas dentales.',
      },
      {
        title: 'Carillas de Resina',
        description:
          'Láminas estéticas que mejoran forma, color y apariencia de los dientes.',
      },
      {
        title: 'Carillas de Circonio',
        description:
          'Carillas altamente resistentes y estéticas que ofrecen una sonrisa natural y duradera.',
      },
      {
        title: 'Coronas Dentales',
        description:
          'Cubiertas diseñadas para proteger y restaurar dientes debilitados o dañados.',
      },
      {
        title: 'Prótesis Dentales',
        description:
          'Soluciones para reemplazar dientes perdidos y recuperar funcionalidad y estética.',
      },
    ],
  },
  {
    id: 'especialidades',
    name: 'Especialidades',
    intro:
      'Las especialidades cubren situaciones que requieren más tiempo, planificación o técnica que un tratamiento rutinario: dolor profundo, piezas difíciles de conservar, cirugía, cordales complicadas o alineación de la mordida. Le explicamos el diagnóstico, las opciones y los pasos a seguir, con prioridad en su seguridad y tranquilidad. Nuestro objetivo es resolver el problema de raíz, aliviar molestias y dejarle una boca más estable y saludable a medio y largo plazo.',
    items: [
      {
        title: 'Endodoncia',
        description:
          'Procedimiento para tratar infecciones en el interior del diente y conservar la pieza dental.',
      },
      {
        title: 'Cirugía Dental',
        description:
          'Tratamientos quirúrgicos enfocados en solucionar problemas dentales y bucales.',
      },
      {
        title: 'Cordales Retenidas en Hueso',
        description:
          'Extracción de muelas del juicio que no han erupcionado correctamente.',
      },
      {
        title: 'Ortodoncia',
        description:
          'Tratamiento que corrige la posición de los dientes y mejora la mordida.',
      },
    ],
  },
  {
    id: 'estetica-dental',
    name: 'Estética Dental',
    intro:
      'La estética dental combina criterio artístico y salud oral: no se trata solo de “dientes más blancos”, sino de proporciones, color y forma que armonicen con su rostro y con lo que usted desea mostrar. Valoramos encías, alineación y función para que cualquier mejora sea sostenible y se vea natural en el día a día. Así puede sentirse cómodo al hablar, reírse y fotografiarse, con una sonrisa coherente con su personalidad.',
    items: [
      {
        title: 'Diseño de Sonrisa',
        description:
          'Planificación personalizada para mejorar estética, forma y armonía dental.',
      },
      {
        title: 'Blanqueamiento Dental',
        description:
          'Tratamiento que aclara el tono de los dientes y mejora la apariencia de la sonrisa.',
      },
    ],
  },
]
