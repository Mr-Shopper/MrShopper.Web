import React from 'react'
import EinkaufsListe from '../../model/EinkaufsListe'

type EinkaufsListenItemProps = {
    einkaufsListe: EinkaufsListe
}

const EinkaufsListenItemComponent = (props: EinkaufsListenItemProps) => {
  return (
    <>
        <p>{props.einkaufsListe.bezeichnung}</p>
    </>
  )
}

export default EinkaufsListenItemComponent