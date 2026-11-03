// Importojmë useState nga React për të ruajtur gjendjen (state)
import { useState } from 'react';

// Krijojmë komponentin funksional DetyraKlase
function DetyraKlase() {

    // Krijojmë një state me emrin "color"
    // "yellow" është vlera fillestare
    const [color, setColor] = useState("yellow");

    // Funksion që ndryshon ngjyrën kur klikohet butoni
    const changeColor = () => {

        // Nëse ngjyra është "yellow" → drita fiket dhe bëhet "black"
        // Përndryshe → drita ndizet dhe kthehet në "yellow"
        setColor(color === "yellow" ? "black" : "yellow");
    };

    // JSX që shfaqet në browser
    return (
        <>
            <div>
                {/* Titulli i detyrës */}
                <h2>Detyrë klase: ON/OFF</h2>
                <p>Kliko butonin për ta ndezur ose fikur dritën.</p>

                {/* Kutia që ndryshon ngjyrë */}
                <div
                    style={{
                        width: '200px',
                        height: '200px',
                        backgroundColor: color,
                        border: '2px solid black',
                        marginBottom: '10px'
                    }}
                ></div>

                {/* Shfaqim gjendjen e dritës */}
                <p>Drita është: {color === "yellow" ? "ON" : "OFF"}</p>

                {/* Butoni që thërret funksionin changeColor */}
                <button onClick={changeColor}>
                    {color === "yellow" ? "Fike dritën" : "Ndize dritën"}
                </button>
            </div>
        </>
    );
}

// Eksportojmë komponentin që të përdoret në App.jsx
export default DetyraKlase;
