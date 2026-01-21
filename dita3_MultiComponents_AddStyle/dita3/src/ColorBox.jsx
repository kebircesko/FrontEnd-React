// Importojmë useState nga React për të ruajtur gjendjen (state)
//useState-me ruajt vlera që ndryshojnë gjatë përdorimit të aplikacionit
import { useState } from 'react';

// Krijojmë komponentin funksional ColorBox
function ColorBox() {

    //const-variabla konstante
    // Krijojmë një state me emrin "color"
    // "lightblue" është vlera fillestare
    const [color, setColor] = useState("lightblue");

    // Funksion që ndryshon ngjyrën kur klikohet butoni
    const changeColor = () => {

        // Kontrollojmë ngjyrën aktuale
        // Nëse është "lightblue" → bëhet "lightgreen"
        // Përndryshe → kthehet prapë në "lightblue"
        setColor(color === "lightblue" ? "lightgreen" : "lightblue");
    };

    // JSX që shfaqet në browser
    return (
        <div>

            {/* Titulli udhëzues */}
            <h2>Kliko butonin për të ndryshuar ngjyrën:</h2>

            {/* Kutia që ndryshon ngjyrë */}
            <div
                style={{
                    width: '200px',          // Gjerësia e kutisë
                    height: '200px',         // Lartësia e kutisë
                    backgroundColor: color,  // Ngjyra varet nga state "color"
                    border: '2px solid black', // Kufiri i kutisë
                    marginBottom: '10px'     // Hapësirë poshtë kutisë
                }}
            ></div>

            {/* Butoni që thërret funksionin changeColor */}
            <button onClick={changeColor}>
                Ndrysho Ngjyrën
            </button>

        </div>
    );
}

// Eksportojmë komponentin që të përdoret në App.js
export default ColorBox;
