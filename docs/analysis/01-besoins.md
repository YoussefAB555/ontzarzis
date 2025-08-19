# Analyse des besoins – Station ONT Zarzis

## 1) Acteurs & objectifs
| Acteur | Objectifs principaux | Exemples d’actions |
|---|---|---|
| Visiteur public | Trouver les fréquences/couverture, lire les actualités, contacter la station | Consulter fréquences, lire une alerte, envoyer un message |
| Technicien | Suivre son planning, exécuter et clôturer des interventions | Voir les interventions du jour, ajouter un rapport/Photos, clôturer |
| Chef de station | Planifier et assigner les interventions, publier des alertes/actus | Créer/assigner, valider, publier une alerte publique |
| Administrateur | Gérer les utilisateurs/roles et le référentiel (équipements, sites) | CRUD utilisateurs/roles, équipements, audit |
| (Système) | Journaliser, notifier, sécuriser | Logs d’audit, notifications internes (future), contrôle d’accès |

## 2) Périmètre fonctionnel (MVP)
### Public
- Accueil, Station, Fréquences & Couverture, Services, Actualités, Contact
- Fréquences (table filtrable), Alerte maintenance, Actualités
### Back-office
- Auth + RBAC (ADMIN, CHEF, TECH)
- Équipements (CRUD), Interventions (création/assignation/statuts), Planning (vue calendrier)
- Audit (journalisation des actions)

## 3) Exigences non fonctionnelles
- Disponibilité = 99,9% ; FCP < 1,5s ; API TTFB < 300ms
- Sécurité : RBAC, hash, validation Zod, protections CSRF/XSS
- Accessibilité : WCAG 2.1 AA ; SEO local ; compatibilité Chrome/Firefox/Edge

## 4) Contraintes & hypothèses
- 2 mois, équipe 2–3, stack Next.js + MySQL, hébergement Cloudflare, IDE WebStorm
- Données fréquences import CSV (périmètre Zarzis/Medenine)
- MVP sans notifications externes (V2)

## 5) User stories (MVP)
- US-01 (Public) : Consulter fréquences à Zarzis (table tri/filtre)
- US-02 (Public) : Voir les alertes de maintenance (bandeau actif)
- US-03 (Public) : Lire les actualités de la station
- US-04 (Chef) : Créer une intervention (priorité, site, équipement)
- US-05 (Chef) : Assigner une intervention à un technicien
- US-06 (Tech) : Voir mon planning (semaine)
- US-07 (Tech) : Clôturer une intervention avec rapport
- US-08 (Admin) : CRUD utilisateurs & rôles
- US-09 (Admin) : CRUD équipements
- US-10 (Système) : Journaliser les actions sensibles

## 6) Cas d’utilisation (inventaire)
Consulter fréquences, Consulter actualités/alertes, Contacter la station, Gérer équipements,
Créer/Assigner intervention, Consulter planning, Clôturer intervention, Gérer utilisateurs & rôles,
Publier alerte/actualité, Consulter audit.

## 7) Règles métier (extraits)
- EN_ATTENTE ? EN_COURS ? CLOTUREE ; affectation obligatoire avant EN_COURS
- TECH assigné clôture ; CHEF peut rouvrir ; ADMIN gère rôles

## 8) Glossaire
Site de diffusion, Fréquence (MHz), Intervention, Planning, Alerte
