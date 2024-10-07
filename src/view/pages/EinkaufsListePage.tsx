import React, { useEffect, useState } from 'react'
import EinkaufsItemComponent from '../components/EinkaufsItemComponent.tsx';
import EinkaufsItem from '../../model/EinkaufsItem.ts';
import { createEinkaufsItem, deleteEinkaufsItemById } from '../../controller/ApiLibrary.ts';

import '../styles/EinkaufsListePageStyle.css'
import NavBar from '../components/Navbar.tsx';

const EinkaufsListePage = () => {
    
    const [newEinkaufsItem, setNewEinkaufsItem] = useState<string>("")
    const [einkaufsItems, setEinkaufsItems] = useState<EinkaufsItem[]>([]);
    
    useEffect(() => {
        fetchApiData();
    }, []);

    const fetchApiData = () => {
        fetch("http://localhost:8080/api/einkaufsitems")
        .then(response => response.json())
        .then(data => setEinkaufsItems(data))
        .catch(error => console.error("Fehler beim Abrufen von Daten im UseEffect:", error))
    }


    const handleTextboxHinzufuegenChange = (e: any) => {
        try {
            setNewEinkaufsItem(e.target.value);
        } catch (e) {
            console.error("Fehler beim Ändern des Inhalts der Textbox-Hinzufügen: ", e);
        }
    }

    const handleButtonHinzufuegenClicked = () => {
        try {
            const einkaufsItem: EinkaufsItem = {
            id: null,
            bezeichnung: newEinkaufsItem,
            aktiv: true,
            }
        
            createEinkaufsItem("http://localhost:8080/api/einkaufsitems", einkaufsItem)
            .then(() => {
                fetchApiData();
                setNewEinkaufsItem("");
            })
            .catch(e => {
                console.error("Fehler beim Erstellen eines neuen EinkaufsItems: ", e);
            });

        } catch (e) {
            console.error("Fehler beim Erstellen eines neuen EinkaufsItems durch den Hinzufügen-Button: ", e);
        } 
    };

    const handleDeleteClicked = (id: number | null) => {
        if (id) {
            deleteEinkaufsItemById("http://localhost:8080/api/einkaufsitems", id)
            .then(() => {
                fetchApiData();
            })
            .catch(e => {
                console.error("Fehler beim Löschen eines EinkaufsItems: ", e);
            });
        }
    };


    return (
        <>
            <div className='containerHinzufuegen'>
                <input className='textboxHinzufuegen' type='text' value={newEinkaufsItem} onChange={handleTextboxHinzufuegenChange}/> 
                <button className='buttonHinzufuegen' onClick={handleButtonHinzufuegenClicked}>Hinzufügen</button>
            </div>
            {einkaufsItems.length > 0 ? (
                    einkaufsItems
                    .sort((a, b) => (a.id ?? 0) - (b.id ?? 0)) 
                    .map((item, index) => (
                        <EinkaufsItemComponent key={index} einkaufsItem={item} onDelete={handleDeleteClicked} />
                    ))
                ) : (
                    <p>Es konnten keine Einkaufspositionen abgerufen werden.</p>
                )}
        </>
    )
}

export default EinkaufsListePage