# My Moviz

My Moviz est une application web full-stack permettant de rechercher des films, d’afficher leurs informations et de gérer une liste personnelle de favoris.
Ce projet a été réalisé dans le cadre de ma formation à La Capsule – Développeur Web Full-Stack JavaScript et déployé entièrement sur Vercel (frontend + backend serverless).


## Fonctionnalités

### Frontend:
- Recherche de films par mot-clé
- Affichage : titre, image, note, description
- Ajout d’un film en favoris
- Page dédiée aux favoris
- Interface simple, responsive et intuitive
- Communication directe avec le backend déployé sur Vercel

### Backend:
- API REST en Node.js / Express
- Endpoints pour gérer les favoris (ajout / suppression / récupération)
- Stockage en mémoire (sans base de données pour ce projet)
- Déploiement via Vercel 


## Déploiement

Frontend : https://my-moviz-front-orcin.vercel.app
Backend : https://my-moviz-back-sigma.vercel.app

## Stack technique

### Frontend :
- React
- React Router
- Fetch API
- CSS modules
- Vercel (hosting)

### Backend :
- Node.js
- Express
- CORS
- Vercel (serverless API)


## Structure du projet (extrait)
```
MyMoviz-Front/
├── public/
├── src/
│   ├── components/
│   │   ├── MovieItem.js
│   │   ├── Favorites.js
│   │   └── … 
│   ├── pages/
│   ├── App.js
│   ├── index.js
│   └── styles/
└── package.json

MyMoviz-Back/
├── routes/
│   └── movies.js
├── app.js
├── vercel.json
└── package.json
```

## Endpoints API
| Méthode    | Route            | Description                         |
| ---------- | ---------------- | ----------------------------------- |
| **GET**    | `/movies`        | Récupère la liste des films favoris |
| **POST**   | `/movies`        | Ajoute un film aux favoris          |
| **DELETE** | `/movies/:title` | Supprime un film des favoris        |


## Installation & lancement en local

### Cloner les deux dépôts
```bash
git clone https://github.com/ElysaG/MyMoviz-Front.git
git clone https://github.com/ElysaG/MyMoviz-Back.git
```
### Backend — Installation & lancement
```bash
cd MyMoviz-Back
npm install
npm run dev
```
Backend disponible sur : http://localhost:3001

### Frontend — Installation & lancement
```bash
cd MyMoviz-Front
npm install
npm start
```

Backend disponible sur : http://localhost:3000

## À propos
Ce projet a été réalisé dans le cadre de ma formation à La Capsule, dans le but de mettre en pratique la stack :

- React côté frontend
- Node.js / Express côté backend
- Déploiement Vercel (front + API serverless)
- Communication front/back, gestion d’état, routing et manipulation d’API

Il démontre ma capacité à construire une petite application full-stack entièrement fonctionnelle et déployée.

## Améliorations possibles

- Mise en place d’une vraie base de données (MongoDB ou autre)
- Refonte UI (meilleure cohérence graphique & animations)
- Ajout d’un système d’authentification pour des favoris persistants
- Ajout d’une page "Details" pour chaque film
- Tests unitaires (Jest / Testing Library)





