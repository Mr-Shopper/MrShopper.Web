import EinkaufsItem from "../model/EinkaufsItem";

const createEinkaufsItem = async (url: string, newEinkaufsItem: EinkaufsItem): Promise<void> => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEinkaufsItem),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status ${response.status}`);
        }
    } catch (e) {
        console.error("Fehler beim Hochladen eines neuen EinkaufsItems: ", e);
    }
}


const updateEinkaufsItem = async (url: string, updatedEinkaufsItem: EinkaufsItem) => {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEinkaufsItem),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status ${response.status}`);
        }
    } catch (e) {
        console.error('Fehler beim Modifizieren eines EinkaufsItems:', e);
    }

}

const deleteEinkaufsItemById = async (url: string, id: number) => {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status ${response.status}`);
        }
    } catch (e) {
        console.error('Fehler beim Löschen eines EinkaufsItems:', e);
    }
}

export { createEinkaufsItem, updateEinkaufsItem, deleteEinkaufsItemById }