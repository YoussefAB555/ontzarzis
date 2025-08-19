# Diagramme de cas d�utilisation � ONT Station Zarzis

```mermaid
flowchart LR
  subgraph Public
    UC1([Consulter fr�quences])
    UC2([Consulter actualit�s/alertes])
    UC3([Contacter la station])
  end
  subgraph BackOffice
    UC4([G�rer �quipements])
    UC5([Cr�er intervention])
    UC6([Assigner technicien])
    UC7([Consulter planning])
    UC8([Cl�turer intervention])
    UC9([G�rer utilisateurs & r�les])
    UC10([Publier alerte/actualit�])
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
