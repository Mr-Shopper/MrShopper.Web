import React, { useEffect, useState } from 'react';
import EinkaufsItemComponent from '../components/EinkaufsItemComponent.tsx';
import EinkaufsItem from '../../model/EinkaufsItem.ts';
import { createEinkaufsItem, deleteEinkaufsItemById } from '../../controller/EinkaufsItemMethods.ts';

import '../styles/MainPageStyle.css';  // CSS Datei importieren
import EinkaufsListe from '../../model/EinkaufsListe.ts';
import EinkaufsListenComponent from '../components/EinkaufsListenComponent.tsx';

const EinkaufsListePage = () => {
    
    const [currentEinkaufsListe, setCurrentEinkaufsListe] = useState<EinkaufsListe | null>(null); // Aktuelle Liste kann auch null sein
    const [newEinkaufsItem, setNewEinkaufsItem] = useState<string>('');

    const [einkaufsListen, setEinkaufsListen] = useState<EinkaufsListe[]>([]);
    const [einkaufsItems, setEinkaufsItems] = useState<EinkaufsItem[]>([]);

    // Initialer Fetch für Einkaufslisten
    useEffect(() => {
        fetchEinkaufsListen();
    }, []);

    // Neu laden, wenn die aktuelle Liste wechselt
    useEffect(() => {
        if (currentEinkaufsListe?.id !== null && currentEinkaufsListe?.id !== undefined) {  // Sicherstellen, dass ID gültig ist
            fetchEinkaufsItems(currentEinkaufsListe.id);
        }
    }, [currentEinkaufsListe]);

    // API-Aufruf für Einkaufslisten
    const fetchEinkaufsListen = () => {
        fetch("http://localhost:8080/api/einkaufslisten")
        .then(response => response.json())
        .then(data => {
            setEinkaufsListen(data);
            if (data.length > 0) {
                setCurrentEinkaufsListe(data[0]); // Standardmäßig erste Liste auswählen
            }
        })
        .catch(error => console.error("Fehler beim Abrufen von Einkaufslisten:", error));
    };

    // API-Aufruf für Einkaufsitems der aktuellen Liste
    const fetchEinkaufsItems = (listId: number) => {
        fetch(`http://localhost:8080/api/einkaufsitems/listid=${listId}`)
        .then(response => response.json())
        .then(data => setEinkaufsItems(data))
        .catch(error => console.error("Fehler beim Abrufen von Einkaufsitems:", error));
    };

    // Ausgewählte Liste ändern
    const handleEinkaufsListeSelected = (liste: EinkaufsListe) => {
        setCurrentEinkaufsListe(liste);  // Aktualisiert die ausgewählte Liste
    };

    // Textbox ändern
    const handleTextboxHinzufuegenChange = (e: any) => {
        setNewEinkaufsItem(e.target.value);
    };

    // Hinzufügen-Button Klick-Handler
    const handleButtonHinzufuegenClicked = () => {
        if (currentEinkaufsListe?.id != null) {  // Sicherstellen, dass die aktuelle Liste eine ID hat
            const einkaufsItem: EinkaufsItem = {
                id: null,
                einkaufsListeId: currentEinkaufsListe.id, // ID der aktuellen Liste verwenden
                bezeichnung: newEinkaufsItem,
                menge: 1,
                mengenEinheit: 'g',
                aktiv: true,
            };

            createEinkaufsItem("http://localhost:8080/api/einkaufsitems", einkaufsItem)
            .then(() => {
                fetchEinkaufsItems(currentEinkaufsListe.id);  // Daten für die aktuelle Liste neu abrufen
                setNewEinkaufsItem('');
            })
            .catch(e => console.error("Fehler beim Erstellen eines neuen EinkaufsItems:", e));
        }
    };

    // Delete-Button Klick-Handler
    const handleDeleteClicked = (id: number | null) => {
        if (id != null && currentEinkaufsListe?.id != null) {  // Nur ausführen, wenn ID und Liste nicht null sind
            deleteEinkaufsItemById("http://localhost:8080/api/einkaufsitems", id)
            .then(() => fetchEinkaufsItems(currentEinkaufsListe.id))
            .catch(e => console.error("Fehler beim Löschen eines EinkaufsItems:", e));
        }
    };

    return (
        <div className="main-container">
            {/* Linke Spalte: Einkaufslisten */}
            <div className="sidebar">
                <EinkaufsListenComponent
                    einkaufsListen={einkaufsListen}
                    onListeSelected={handleEinkaufsListeSelected} // Übergebe Auswahlfunktion
                />
            </div>

            {/* Rechte Spalte: Eingabe und Items */}
            <div className="content">
                <div className='containerHinzufuegen'>
                    <input
                        className='textboxHinzufuegen'
                        type='text'
                        value={newEinkaufsItem}
                        onChange={handleTextboxHinzufuegenChange}
                    /> 
                    <button className='buttonHinzufuegen' onClick={handleButtonHinzufuegenClicked}>Hinzufügen</button>
                </div>

                {currentEinkaufsListe && einkaufsItems.length > 0 ? (
                    einkaufsItems
                    .sort((a, b) => (a.id ?? 0) - (b.id ?? 0))  // Sortiere nach ID
                    .map((item, index) => (
                        <EinkaufsItemComponent key={index} einkaufsItem={item} onDelete={handleDeleteClicked} />
                    ))
                ) : (
                    <p>Es sind keine Einkaufspositionen in dieser Liste vorhanden.</p>
                )}
            </div>
        </div>
    );
}

export default EinkaufsListePage;
