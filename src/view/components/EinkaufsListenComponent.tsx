import React, { useEffect, useState } from 'react'
import EinkaufsListe from '../../model/EinkaufsListe'
import EinkaufsListenItemComponent from './EinkaufsListenItemComponent.tsx';

type EinkaufsListenProps = {
    einkaufsListen: EinkaufsListe[];
}

const EinkaufsListenComponent = (props: EinkaufsListenProps) => {
  
    const [einkaufsListen, setEinkaufsListen] = useState<EinkaufsListe[]>(props.einkaufsListen)

    return (
    <>
        {einkaufsListen.length > 0 ? (
            einkaufsListen
            .sort((a, b) => (a.id ?? 0) - (b.id ?? 0)) 
            .map((item, index) => (
                <EinkaufsListenItemComponent key={index} einkaufsListe={item} />
            ))
        ) : (
            <p>Es konnten keine EinkaufsListenPositionen abgerufen werden.</p>
        )}
    </>
  )
}

export default EinkaufsListenComponent