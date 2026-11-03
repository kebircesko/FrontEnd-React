// Importimi i React për të përdorur JSX dhe funksionalitetet e React
import React from "react";
// Importimi i stilit të përgjithshëm për aplikacionin
import "./App.css";
// Importimi i komponentit CarCard, që përdoret për të shfaqur të dhëna të një veture
import CarCard from "./components/CarCard";
// Importimi i komponentit të detyrës për produktet
import ProductCard from "./components/ProductCard";
// Importimi i imazheve për secilën veturë
import teslaImage from "./images/tesla.jpg";
import bmwImage from "./images/bmw.jpg";
import toyotaImage from "./images/toyota.jpg";
// Funksioni kryesor i komponentit App
function App() {
  // Lista e veturave me të dhënat përkatëse: brand, model, vit, përshkrim dhe imazh
  const cars = [
    {
      id: 1,
      brand: "Tesla",
      model: "Model S",
      year: 2023,
      description: "Një veturë elektrike me performancë të lartë dhe teknologji autonome.",
      image: teslaImage, // Imazhi për Tesla Model S
    },
    {
      id: 2,
      brand: "BMW",
      model: "M3",
      year: 2022,
      description: "Një makinë sportive që kombinon luksin dhe shpejtësinë.",
      image: bmwImage, // Imazhi për BMW M3
    },
    {
      id: 3,
      brand: "Toyota",
      model: "Corolla",
      year: 2021,
      description: "Një veturë ekonomike dhe e besueshme për përdorim të përditshëm.",
      image: toyotaImage, // Imazhi për Toyota Corolla
    },
    {
      id: 4,
      brand: "Audi",
      model: "A6",
      year: 2022,
      description: "Kombinim i luksit gjerman dhe teknologjisë së avancuar.",
      image: "https://www.motortrend.com/uploads/sites/5/2021/09/2022-Audi-A6-5081-1.jpg?w=768&width=768&q=75&format=webp",
    },
    {
      id: 5,
      brand: "Mercedes-Benz",
      model: "E-Class",
      year: 2023,
      description: "Elegancë, komoditet dhe performancë në një paketë të vetme.",
      image: "https://hips.hearstapps.com/hmg-prod/images/2021-genesis-g80-3p5t-prestige-v-2021-mercedes-benz-e450-sedan-1768-edit-1621887031.jpg?crop=0.463xw:0.342xh;0.166xw,0.554xh&resize=1200:*",
    },
    {
      id: 6,
      brand: "Ford",
      model: "Mustang",
      year: 2020,
      description: "Ikonë amerikane e shpejtësisë dhe stilit klasik.",
      image: "https://www.motortrend.com/uploads/sites/11/2019/09/2020-Ford-Mustang-2.3-Liter-High-Performance-Package-1742.jpg",
    },
  ];
  return (
    <main className="page-container">
      <section>
        <h1 className="title-color">Lista e veturave</h1>
        <div className="card-list">
          {/* Iterimi mbi listën e veturave dhe krijimi i një CarCard për secilën */}
          {cars.map((car) => ( //cars-array .map-kalon nëpër secilin element të array-it
           //perdorimi i props
           <CarCard //thirrja e komponentit CarCard.jsx
              key={car.id} // Çelësi unik për identifikim në React
              brand={car.brand} //eshte nje Props	të dhëna që i dërgohen një komponenti,props në React janë si parametra në një funksion në JavaScript.
              model={car.model}
              year={car.year}
              description={car.description}
              image={car.image}
            />
          ))}
        </div>
      </section>
          <hr style={{ border: '1px solid #ccc' ,
            width: '100%',
            height: '6px',
            backgroundColor: '#060a67',
          }} />
      <section>
        <h1 className="title-color">Lista e produkteve per Detyre Klase</h1>
        <div className="card-list">
          {/* Krijimi i disa ProductCard me të dhëna të ndryshme */}
          <ProductCard
            name="Laptop"
            price={1200}
            category="Një laptop i fuqishëm për punë dhe lojëra."
            image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
          />
          <ProductCard
            name="Smartphone"
            price={800}
            category="Një smartphone modern me kamera të avancuara."
            image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
          />
          <ProductCard
            name="Headphones"
            price={150}
            category="Dëgjues me cilësi të lartë dhe izolim të zhurmës."
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </section>
    </main>
  );  
}
export default App;
