import React, { useState } from 'react';
import '../styles/EinkaufsItemComponentStyle.css';
import EinkaufsItem from '../../model/EinkaufsItem.ts';
import { deleteEinkaufsItemById, updateEinkaufsItem } from '../../controller/ApiLibrary.ts';

type EinkaufsItemProps = {
    einkaufsItem: EinkaufsItem;
    onDelete: (id: number | null) => void; // Update onDelete to accept an ID
}

const EinkaufsItemComponent = (props: EinkaufsItemProps) => {
  
  const [isCheckboxChecked, setCheckboxChecked] = useState<boolean>(!props.einkaufsItem.aktiv);
  
  const handleCheckboxChange = () => {
    props.einkaufsItem.aktiv = isCheckboxChecked;
    setCheckboxChecked(!props.einkaufsItem.aktiv);

    updateEinkaufsItem(`http://localhost:8080/api/einkaufsitems/${props.einkaufsItem.id}`, props.einkaufsItem);
  };
  
  const handleButtonDeleteClicked = () => {
    props.onDelete(props.einkaufsItem.id);
  };
  
  return (
    <div className='container'>
      <p>[{props.einkaufsItem.id}] {props.einkaufsItem.bezeichnung}</p> {/* Centering the text */}
      <div className="checkbox-and-button"> {/* Wrapper for checkbox and button */}
        <input type='checkbox' checked={isCheckboxChecked} onChange={handleCheckboxChange} />
        <button className='buttonDelete' onClick={handleButtonDeleteClicked}>DEL</button>
      </div>
    </div>
  );
}

export default EinkaufsItemComponent;
