# Portfolio — Backend

API REST dédiée au formulaire de contact du portfolio. Gère la réception des messages et leur envoi par e-mail via Nodemailer.

**Lien** : [portfolio-backend-psi-lac.vercel.app](https://portfolio-backend-psi-lac.vercel.app)  

## Technologies

- **Runtime** : Node.js
- **Framework** : Express 4
- **Base de données** : MongoDB (Mongoose 8)
- **E-mail** : Nodemailer 7
- **Langage** : JavaScript
- **Déploiement** : Vercel

## Fonctionnalités

- Route API POST pour la réception des messages du formulaire de contact
- Envoi automatique d'e-mail via Nodemailer
- Connexion base de données MongoDB via Mongoose
- Structure modulaire (routes, modules séparés)

## Structure du projet
- `bin/` — Point d'entrée du serveur
- `modules/` — Logique métier (envoi d'e-mail, etc.)
- `routes/` — Définition des routes Express
- `public/` — Fichiers statiques
- `app.js` — Configuration Express
- `vercel.json` — Configuration déploiement Vercel

## Endpoint principal

| Méthode | Route | Description |
|---|---|---|
| POST | `/contact` | Reçoit les données du formulaire et envoie un e-mail |

## Auteur

**Caroline Viot** — Développeuse web fullstack JS  
[GitHub](https://github.com/Len0f)
