# Analyse des besoins � Station ONT Zarzis

## 1) Acteurs & objectifs
| Acteur | Objectifs principaux | Exemples d�actions |
|---|---|---|
| Visiteur public | Trouver les fr�quences/couverture, lire les actualit�s, contacter la station | Consulter fr�quences, lire une alerte, envoyer un message |
| Technicien | Suivre son planning, ex�cuter et cl�turer des interventions | Voir les interventions du jour, ajouter un rapport/Photos, cl�turer |
| Chef de station | Planifier et assigner les interventions, publier des alertes/actus | Cr�er/assigner, valider, publier une alerte publique |
| Administrateur | G�rer les utilisateurs/roles et le r�f�rentiel (�quipements, sites) | CRUD utilisateurs/roles, �quipements, audit |
| (Syst�me) | Journaliser, notifier, s�curiser | Logs d�audit, notifications internes (future), contr�le d�acc�s |

## 2) P�rim�tre fonctionnel (MVP)
### Public
- Accueil, Station, Fr�quences & Couverture, Services, Actualit�s, Contact
- Fr�quences (table filtrable), Alerte maintenance, Actualit�s
### Back-office
- Auth + RBAC (ADMIN, CHEF, TECH)
- �quipements (CRUD), Interventions (cr�ation/assignation/statuts), Planning (vue calendrier)
- Audit (journalisation des actions)

## 3) Exigences non fonctionnelles
- Disponibilit� = 99,9% ; FCP < 1,5s ; API TTFB < 300ms
- S�curit� : RBAC, hash, validation Zod, protections CSRF/XSS
- Accessibilit� : WCAG 2.1 AA ; SEO local ; compatibilit� Chrome/Firefox/Edge

## 4) Contraintes & hypoth�ses
- 2 mois, �quipe 2�3, stack Next.js + MySQL, h�bergement Cloudflare, IDE WebStorm
- Donn�es fr�quences import CSV (p�rim�tre Zarzis/Medenine)
- MVP sans notifications externes (V2)

## 5) User stories (MVP)
- US-01 (Public) : Consulter fr�quences � Zarzis (table tri/filtre)
- US-02 (Public) : Voir les alertes de maintenance (bandeau actif)
- US-03 (Public) : Lire les actualit�s de la station
- US-04 (Chef) : Cr�er une intervention (priorit�, site, �quipement)
- US-05 (Chef) : Assigner une intervention � un technicien
- US-06 (Tech) : Voir mon planning (semaine)
- US-07 (Tech) : Cl�turer une intervention avec rapport
- US-08 (Admin) : CRUD utilisateurs & r�les
- US-09 (Admin) : CRUD �quipements
- US-10 (Syst�me) : Journaliser les actions sensibles

## 6) Cas d�utilisation (inventaire)
Consulter fr�quences, Consulter actualit�s/alertes, Contacter la station, G�rer �quipements,
Cr�er/Assigner intervention, Consulter planning, Cl�turer intervention, G�rer utilisateurs & r�les,
Publier alerte/actualit�, Consulter audit.

## 7) R�gles m�tier (extraits)
- EN_ATTENTE ? EN_COURS ? CLOTUREE ; affectation obligatoire avant EN_COURS
- TECH assign� cl�ture ; CHEF peut rouvrir ; ADMIN g�re r�les

## 8) Glossaire
Site de diffusion, Fr�quence (MHz), Intervention, Planning, Alerte
