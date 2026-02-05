// Importimi i hook-ut useState nga React për të ruajtur dhe menaxhuar gjendjen e komponentit
import { useState } from "react";

// Importimi i stilit CSS që do të përdoret në këtë komponent
import "./Filter.css";

// Kjo është një listë (array) me objekte që përfaqësojnë makina me kategori të ndryshme
const items = [
  { id: 1, name: "Mercedes S300", category: "Luxury" },
  { id: 2, name: "Tesla", category: "Electric" },
  { id: 3, name: "BMW", category: "Luxury" },
  { id: 4, name: "Ford", category: "Sedan" },
]; 

// Krijimi i funksionit/koponenti Filter
function Filter() {
  // Përdorimi i useState për të ruajtur tekstin që përdoruesi shkruan në input
  const [search, setSearch] = useState("");

  // Filtrimi i listës 'items' në bazë të tekstit që shkruhet në input
  // Përdorim toLowerCase për ta bërë kërkimin jo-sensitive ndaj shkronjave të mëdha/vogla
  const filteredItems = items.filter(
    (item) => item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Kthimi i JSX-it që përmban inputin dhe listën e rezultateve të filtruara
  return (
    <div className="container"> {/* Div kryesor me klasë për stilizim */}
      <input type="text" // Lloji i inputit është tekst
        placeholder="Search..." // Teksti që shfaqet brenda inputit kur është bosh
        value={search} // Vlera e inputit lidhet me variablën search
        onChange={(e) => setSearch(e.target.value)} // Kur ndryshon inputi, përditësohet gjendja
      />
      <ul> {/* Fillimi i listës së elementeve */}
        {filteredItems.length > 0 ? ( // Nëse ka rezultate pas filtrimit eshte kushti 
          filteredItems.map((item) => ( // Për çdo makinë të filtruar
            <li style={{ color: "red" }} key={item.id}>
              {/* Shfaq emrin dhe kategorinë e makinës */}
              {item.name} - {item.category}
              
            </li>
          ))
        ) : ( //else
          // Nëse nuk ka rezultate, shfaqet ky mesazh
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
}

// Eksportimi i komponentit për ta përdorur në pjesë të tjera të aplikacionit
export default Filter;

