# Portfolio — Lucas Sauvinet

Portfolio personnel présenté comme un éditeur de code (façon VS Code) : une sidebar avec une arborescence de fichiers, des onglets, et une page dédiée par projet. L'objectif est de sortir du format "page qu'on scrolle" classique tout en restant lisible pour un visiteur non technique (aucune commande à connaître, tout se fait au clic).

## Stack technique

- [Nuxt 4](https://nuxt.com/) + Vue 3 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) (`@nuxtjs/tailwindcss`)
- [GSAP](https://gsap.com/) pour les micro-interactions (tilt des cartes projet, effet magnétique des boutons)
- [@nuxt/icon](https://nuxt.com/modules/icon) avec les sets `logos`, `lucide`, `simple-icons` installés localement (pas d'appel réseau à l'API Iconify)
- [@nuxt/fonts](https://nuxt.com/modules/fonts) pour Space Grotesk / Inter / JetBrains Mono

## Démarrer le projet

```bash
npm install
npm run dev
```

Le site est servi sur `http://localhost:3000` (ou le premier port libre suivant si occupé).

Build de production :

```bash
npm run build
npm run preview
```

## Comment ça marche

Toute la logique de navigation (onglets ouverts, onglet actif, sidebar) vit dans `app/composables/useIde.ts`, via `useState` (state partagé, compatible SSR).

- **Aucun onglet n'est ouvert par défaut** : l'utilisateur arrive sur un écran d'accueil (`PaneWelcome.vue`) qui explique comment naviguer et propose des raccourcis cliquables.
- Cliquer sur un fichier dans la sidebar (`SidebarExplorer.vue`) ou sur un raccourci ouvre un onglet correspondant.
- Cliquer sur une carte projet ouvre un onglet dédié à ce projet (`PaneProjectDetail.vue`), avec description longue, points clés et stack.
- Les onglets peuvent être réordonnés par glisser-déposer, et fermés au clic molette (comme dans un navigateur) ou via le bouton `×`.

## Structure

```
app/
  app.vue                     # coquille de l'appli (barre de titre, sidebar, onglets, statusbar)
  assets/css/main.css         # styles globaux + classes utilitaires (.panel, .text-accent, etc.)
  components/
    ide/                      # chrome de l'éditeur (TitleBar, SidebarExplorer, TabBar, StatusBar, PaneContent)
    ide/panes/                # une vue par "fichier" (About, Skills, Projects, ProjectDetail, Education, Contact, Welcome)
    ui/ProjectCard.vue        # carte projet (effet tilt 3D au survol)
  composables/
    useIde.ts                 # état partagé de navigation (onglets, sidebar)
    useMagnetic.ts             # effet magnétique sur un bouton au survol
    useScramble.ts              # effet de révélation "scramble" sur un texte
  data/                       # tout le contenu du site (voir ci-dessous)
```

## Modifier le contenu

Tout le contenu éditable est centralisé dans `app/data/` — aucun besoin de toucher aux composants pour mettre à jour un texte.

| Fichier | Contenu |
|---|---|
| `data/profile.ts` | Nom, rôle, bio, employeur actuel, email, liens sociaux |
| `data/skills.ts` | Compétences (nom, icône, catégorie, description affichée au survol) |
| `data/projects.ts` | Projets (description courte + longue, points clés, stack, liens GitHub/démo) |
| `data/education.ts` | Parcours de formation (statut `done` / `in-progress` / `upcoming`) |
| `data/files.ts` | Déclaration des "fichiers" affichés dans la sidebar/les onglets |

### Points à compléter

- `data/profile.ts` : liens GitHub et LinkedIn (`social.github`, `social.linkedin`) actuellement vides
- `data/education.ts` : nom des établissements et années exactes (marqués `TODO`)
- `data/projects.ts` : liens `github`/`demo` par projet si publics
- `PaneProjectDetail.vue` : la zone de prévisualisation est un placeholder généré en CSS — à remplacer par de vraies captures d'écran quand elles seront disponibles

## Icônes

Les icônes utilisent la syntaxe `collection:nom`, ex. `logos:vue`, `lucide:mail`. Les collections `logos`, `lucide` et `simple-icons` sont installées en local (`@iconify-json/*`) — si une icône d'une autre collection est nécessaire, installer le package `@iconify-json/<collection>` correspondant.
