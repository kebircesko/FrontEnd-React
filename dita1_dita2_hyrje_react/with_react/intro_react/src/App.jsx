import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const students = [
  { name: "Ardit", course: "Frontend", img: "https://static.vecteezy.com/system/resources/previews/002/002/403/large_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" },
  { name: "Erza", course: "Backend", img: "https://static.vecteezy.com/system/resources/previews/002/002/257/large_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" },
  { name: "Liri", course: "Design", img: "https://static.vecteezy.com/system/resources/previews/002/002/263/large_2x/black-man-with-beard-avatar-character-free-vector.jpg" }
];

// COMPONENT (Card)
function Card({ name, course, img }) {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{course}</p>
    </div>
  );
}

// MAIN APP
export default function App() {
  return (
    <div className="container">
      <h1>Student Cards (React)</h1>

      <div className="cards">
        {students.map((student, index) => (
          <Card
            key={index}
            name={student.name}
            course={student.course}
            img={student.img}
          />
        ))}
      </div>
    </div>
  );
}
