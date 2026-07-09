export interface Skill {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'tools'
  description: string
}

export const skills: Skill[] = [
  { name: 'Vue.js', icon: 'logos:vue', category: 'frontend', description: 'Framework front-end principal pour construire des interfaces réactives.' },
  { name: 'React', icon: 'logos:react', category: 'frontend', description: 'Bibliothèque UI utilisée pour construire des interfaces à base de composants.' },
  { name: 'TypeScript', icon: 'logos:typescript-icon', category: 'frontend', description: 'JavaScript typé, pour fiabiliser le code sur les projets front comme back.' },
  { name: 'JavaScript', icon: 'logos:javascript', category: 'frontend', description: 'Langage de base pour toute la logique côté navigateur.' },
  { name: 'HTML5', icon: 'logos:html-5', category: 'frontend', description: 'Structure sémantique de toutes les interfaces que je construis.' },
  { name: 'CSS3', icon: 'logos:css-3', category: 'frontend', description: 'Mise en forme et animations des interfaces.' },
  { name: 'PHP', icon: 'logos:php', category: 'backend', description: 'Langage back-end utilisé pour développer des applications web côté serveur.' },
  { name: 'Symfony', icon: 'logos:symfony', category: 'backend', description: 'Framework PHP pour structurer des applications back-end robustes.' },
  { name: 'SQL', icon: 'lucide:database', category: 'backend', description: 'Conception et interrogation de bases de données relationnelles.' },
  { name: 'Firebase', icon: 'logos:firebase', category: 'backend', description: 'Backend-as-a-Service pour l’authentification, la base de données et l’hébergement.' },
  { name: 'Python', icon: 'logos:python', category: 'backend', description: 'Langage utilisé pour les scripts, l’automatisation et certains projets perso.' },
  { name: 'C++', icon: 'logos:c-plusplus', category: 'backend', description: 'Langage bas niveau utilisé notamment sur mon projet ORVIS.' },
  { name: 'Docker', icon: 'logos:docker-icon', category: 'tools', description: 'Conteneurisation des applications pour un environnement de dev reproductible.' },
  { name: 'Git & GitHub', icon: 'logos:git-icon', category: 'tools', description: 'Gestion de version et collaboration sur tous mes projets.' },
]

export const skillCategories = [
  { key: 'frontend', label: 'Front-end' },
  { key: 'backend', label: 'Back-end' },
  { key: 'tools', label: 'Outils' },
] as const
