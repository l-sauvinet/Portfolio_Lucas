export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  features: string[]
  stack: string[]
  status: 'shipped' | 'in-progress'
  github: string | null
  demo: string | null
}

export const projects: Project[] = [
  {
    slug: 'obsidkey',
    name: 'ObsidKey',
    tagline: 'Gestionnaire de mots de passe sécurisé',
    description:
      'Gestionnaire de mots de passe en architecture zero-knowledge : les données sensibles sont chiffrées côté client, le serveur ne manipule et ne stocke jamais rien en clair.',
    longDescription:
      "ObsidKey est un gestionnaire de mots de passe pensé autour d'une architecture zero-knowledge : toutes les données sensibles sont chiffrées directement sur l'appareil de l'utilisateur avant d'être envoyées au serveur, qui ne manipule et ne stocke jamais rien en clair. L'objectif était de comprendre et d'implémenter de bout en bout les enjeux de sécurité liés au stockage de données sensibles côté client, tout en gardant une interface simple et rapide au quotidien.",
    features: [
      'Chiffrement/déchiffrement réalisé côté client uniquement',
      'Authentification et gestion sécurisée des sessions',
      'Interface Vue.js rapide pour la recherche et l’ajout d’identifiants',
      'Base de données Firebase pour la synchronisation',
    ],
    stack: ['Vue.js', 'Firebase'],
    status: 'shipped',
    github: null,
    demo: 'https://obsidkey.sauv-web.fr',
  },
  {
    slug: 'axiora',
    name: 'Axiora',
    tagline: "Gestion centralisée pour indépendants & petites structures",
    description:
      "Application web de gestion centralisant les activités essentielles d'un professionnel ou d'une petite structure : clients, rendez-vous et suivi de trésorerie, réunis dans une interface unique, claire et moderne. Encore en développement.",
    longDescription:
      "Axiora est une application web de gestion pensée pour les indépendants et petites structures qui jonglent entre plusieurs outils au quotidien. Elle centralise la gestion des clients, l'organisation des rendez-vous et le suivi de la trésorerie dans une seule interface, claire et moderne, pour éviter d'avoir à multiplier les tableurs et applications séparées. Le projet est encore en développement actif.",
    features: [
      'Fiches clients centralisées avec historique',
      'Agenda et gestion des rendez-vous intégrés',
      'Suivi de trésorerie (entrées/sorties) en temps réel',
      'Interface pensée pour un usage quotidien rapide',
    ],
    stack: ['Vue.js', 'Firebase'],
    status: 'in-progress',
    github: null,
    demo: null,
  },
  {
    slug: 'orvis',
    name: 'ORVIS',
    tagline: 'Assistant personnel intelligent inspiré de Jarvis',
    description:
      "Assistant personnel intelligent inspiré de Jarvis, pensé pour automatiser et simplifier des tâches du quotidien. Projet encore en développement actif.",
    longDescription:
      "ORVIS est un assistant personnel intelligent inspiré de Jarvis, développé pour automatiser et simplifier des tâches du quotidien. C'est un projet personnel encore en développement actif, qui sert aussi de terrain d'expérimentation autour de Python et C++ pour tout ce qui touche au traitement de commandes et à l'automatisation.",
    features: [
      'Reconnaissance et exécution de commandes vocales/textuelles',
      'Architecture modulaire pour ajouter de nouvelles capacités',
      'Cœur applicatif en C++ pour les performances',
      'Scripts d’automatisation en Python',
    ],
    stack: ['C++', 'Python'],
    status: 'in-progress',
    github: null,
    demo: null,
  },
]
