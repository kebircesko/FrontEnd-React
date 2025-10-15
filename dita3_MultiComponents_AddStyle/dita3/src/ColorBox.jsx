import {useState} from 'react';

function ColorBox() {
    const [color, setColor] = useState("lightblue"); // State për ngjyrën
  
    const changeColor = () => {
      // Nëse ngjyra është blu, kalo në verdhë, ndryshe kthehu në blu
      setColor(color === "lightblue" ? "lightgreen" : "lightblue");
    };

    return (
      <div>
        <h2>Kliko butonin për të ndryshuar ngjyrën:</h2>
        <div style={{
          width: '200px',
          height: '200px',
          backgroundColor: color,
          border: '2px solid black',
          marginBottom: '10px'
        }}></div>
        <button onClick={changeColor}>Ndrysho Ngjyrën</button>
      </div>
    );
  }
  export default ColorBox;
  