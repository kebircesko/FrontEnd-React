import { useState } from "react";

const Slider = () => {
  // Array që përmban URL të imazheve që do të shfaqen në slider
  const images = [
    "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg",
  ];
  // Përdorimi i useState për të mbajtur gjendjen e indeksit aktual të imazhit
  //useState(0) krijon një gjendje që fillon nga 0.,currentIndex tregon cilin imazh po shfaqim.
  // setCurrentIndex përdoret për të kaluar në imazhin tjetër ose të mëparshëm.
  const [currentIndex, setCurrentIndex] = useState(0);
  // Funksion për të kaluar në imazhin tjetër
  // % (modulo) e bën rrotullimin e indeksit kur arrin fundin (rikthehet në fillim)
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  // Funksion për të kaluar në imazhin e mëparshëm
  // Nëse jemi në indeksin 0, kalon te i fundit
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  // JSX i komponentit që përmban sliderin e imazheve
  return (
    <>
      <h1>React Image Slider</h1>
      {/* Div që përmban sliderin */}
      <div className="image-slider">
        {/* Buton për të shkuar mbrapa */}
        <button onClick={prevImage} className="prev">
          🢨
        </button>
        {/* Imazhi aktual që shfaqet në ekran */}
        <img src={images[currentIndex]} className="slider-image" />
        {/* Buton për të shkuar përpara */}
        <button onClick={nextImage} className="next">
          🢩
        </button>
      </div>
    </>
  );
};
export default Slider;
