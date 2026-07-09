export interface EducationItem {
  title: string
  place: string
  period: string
  status: 'done' | 'in-progress' | 'upcoming'
  description: string
}

// TODO: compléter le nom des établissements et les années exactes
export const education: EducationItem[] = [
  {
    title: 'Bac STI2D — option SIN',
    place: 'Établissement à compléter',
    period: 'Obtenu',
    status: 'done',
    description:
      'Spécialité Systèmes d’Information et Numérique, premières bases en électronique et développement.',
  },
  {
    title: 'BTS SIO (en alternance)',
    place: 'Établissement à compléter',
    period: 'Obtenu',
    status: 'done',
    description:
      "Services Informatiques aux Organisations, réalisé en alternance — 3 ans d'expérience en développement cumulés sur cette période.",
  },
  {
    title: 'Licence Professionnelle Développement',
    place: 'Établissement à compléter',
    period: 'À venir',
    status: 'upcoming',
    description:
      "Approfondissement des compétences en développement fullstack, architecture logicielle et conduite de projet. Pas encore commencée.",
  },
]
