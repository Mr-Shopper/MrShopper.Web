interface EinkaufsItem {
    id: number | null;
    einkaufsListeId: number | null;
    bezeichnung: string;
    menge: number;
    mengenEinheit: string;
    aktiv: boolean;
}

export default EinkaufsItem