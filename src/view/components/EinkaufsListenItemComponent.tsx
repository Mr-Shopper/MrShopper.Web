import React from 'react'
import EinkaufsListe from '../../model/EinkaufsListe'
import '../styles/EinkaufsListenItemComponentStyle.css' // Importiere deine CSS-Datei

type EinkaufsListenItemProps = {
    einkaufsListe: EinkaufsListe
    onListeSelected: (liste: EinkaufsListe) => void;
}

const EinkaufsListenItemComponent = (props: EinkaufsListenItemProps) => {
  return (
    <div className='listenitem-container' onClick={() => props.onListeSelected(props.einkaufsListe)}>
      <div className='bezeichnung'>
        <p>{props.einkaufsListe.bezeichnung}</p>
      </div>
      <div className={`status ${props.einkaufsListe.aktiv ? 'active' : 'inactive'}`}>
        {props.einkaufsListe.aktiv ? 'Aktiv' : 'Inaktiv'}
      </div>
    </div>
  )
}

export default EinkaufsListenItemComponent
