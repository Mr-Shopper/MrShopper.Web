import React, { useState } from 'react';
import '../styles/EinkaufsItemComponentStyle.css';
import EinkaufsItem from '../../model/EinkaufsItem.ts';
import { deleteEinkaufsItemById, updateEinkaufsItem } from '../../controller/EinkaufsItemMethods.ts';

type EinkaufsItemProps = {
    einkaufsItem: EinkaufsItem;
    onDelete: (id: number | null) => void; 
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
      <p>[{props.einkaufsItem.id}] {props.einkaufsItem.bezeichnung}</p>
      <div className="checkbox-and-button"> 
        <input type='checkbox' checked={isCheckboxChecked} onChange={handleCheckboxChange} />
        <button className='buttonDelete' onClick={handleButtonDeleteClicked}>DEL</button>
      </div>
    </div>
  );
}

export default EinkaufsItemComponent;
