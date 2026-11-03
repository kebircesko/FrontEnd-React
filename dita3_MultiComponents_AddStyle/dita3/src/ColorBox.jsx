import { useState } from 'react';

function ColorBox() {
    const [color, setColor] = useState("lightblue");
    const changeColor = () => {
        
        setColor(color === "lightblue" ? "lightgreen" : "lightblue");
    };
    // JSX që shfaqet në browser
    return (
        <> 
            <div>
                <h2>Kliko butonin për të ndryshuar ngjyrën:</h2>
                <div
                    style={{
                        width: '200px',          // Gjerësia e kutisë
                        height: '200px',         // Lartësia e kutisë
                        backgroundColor: color,  // Ngjyra varet nga state "color"
                        border: '2px solid black', // Kufiri i kutisë
                        marginBottom: '10px'     // Hapësirë poshtë kutisë
                    }}
                ></div>
            
                <button onClick={changeColor}>
                    Ndrysho Ngjyrën
                </button>
            </div>
        </>
    );
}
export default ColorBox;
