# Diagramme de cas d’utilisation – ONT Station Zarzis

```mermaid
flowchart LR
  subgraph Public
    UC1([Consulter fréquences])
    UC2([Consulter actualités/alertes])
    UC3([Contacter la station])
  end
  subgraph BackOffice
    UC4([Gérer équipements])
    UC5([Créer intervention])
    UC6([Assigner technicien])
    UC7([Consulter planning])
    UC8([Clôturer intervention])
    UC9([Gérer utilisateurs & rôles])
    UC10([Publier alerte/actualité])
    UC11([Consulter journal d'audit])
  end

  A[Visiteur public] --- UC1
  A --- UC2
  A --- UC3

  T[Technicien] --- UC7
  T --- UC8

  C[Chef de station] --- UC5
  C --- UC6
  C --- UC7
  C --- UC10

  AD[Administrateur] --- UC4
  AD --- UC9
  AD --- UC11
