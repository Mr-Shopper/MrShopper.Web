import React, { useEffect, useState } from 'react'
import EinkaufsListe from '../../model/EinkaufsListe'
import EinkaufsListenItemComponent from './EinkaufsListenItemComponent.tsx';

import '../styles/EinkaufsListenComponentStyle.css'

type EinkaufsListenProps = {
    einkaufsListen: EinkaufsListe[];
    onListeSelected: (liste: EinkaufsListe) => void;
}

const EinkaufsListenComponent = (props: EinkaufsListenProps) => {
  
    return (
      <div className="einkaufslisten-container">
        {props.einkaufsListen.length > 0 ? (
            props.einkaufsListen
            .sort((a, b) => (a.id ?? 0) - (b.id ?? 0)) 
            .map((item, index) => (
                <EinkaufsListenItemComponent key={index} einkaufsListe={item} onListeSelected={props.onListeSelected}/>
            ))
        ) : (
            <p>Es konnten keine EinkaufsListenPositionen abgerufen werden.</p>
        )}
      </div>
    )
}

export default EinkaufsListenComponent;