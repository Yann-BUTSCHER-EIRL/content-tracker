# Content tracker

## Préambule

Content tracker est un petit projet réalisé en React/Next.js et accéléré par Cursor.

L'objectif de cette application est de pouvoir tenir une liste du contenu culturel consommé par ses utilisateurs.

Il a été pour moi l'opportunité de monter en compétences sur les technologies fullstack vers lesquelles je souhaite me réorienter professionnellement.

Si vous êtes un recruteur, le contenu de ce dépôt est représentatif du travail que je peux être amené à fournir en environnement professionnel.

## Contribuer

### Pré-requis

Avoir Docker installé sur la machine de développement. 
Pour plus d'informations, se référer à la [documentation officielle](https://docs.docker.com/get-started/) de Docker.

### Installation

Pour commencer, il vous faut un fichier d'environnement. Lancer :

```bash
task env-setup
```

Vous aurez alors un fichier `.env` non-commité, à utiliser localement. Changer le contenu des variables avant l'installation du projet (notamment les variables de base de données).

Pour installer le projet en mode développement, lancer:

```bash
task setup
```

Cela construit l’image de développement (`node:20-alpine` + Yarn 4) et démarre deux conteneurs : l’app Next.js et PostgreSQL 16.

Le conteneur d’app tourne en `root` pour éviter les erreurs de permissions sur le code monté depuis Linux.

### Développement

Pour commencer à travailler, lancer:

```bash
task dev
```

L'application web est alors disponible depuis [http://localhost:3000](http://localhost:3000)

Pour consulter les logs:

```bash
task logs
```

Pour arrêter les conteneurs:

```bash
task down
```

## Déploiement

Section à compléter