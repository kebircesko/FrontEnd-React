// File: Navbar.jsx
import React, {useState} from 'react';


export default function Navbar({onNavigate, current}){
const [open, setOpen] = useState(false);
const links = [
{key:'home', label:'Home'},
{key:'about', label:'About'},
{key:'contact', label:'Contact'},
];


function handleNav(key){
onNavigate(key);
setOpen(false); // close mobile menu
}


return (
<header className="header">
<div className="brand" role="img" aria-label="Digital School">
<div className="logo">DS</div>
<div className="brand-text">Digital School</div>
</div>


<nav>
<div className="navlinks" aria-hidden={open}>
{links.map(l=> (
<a key={l.key}
href="#"
onClick={(e)=>{e.preventDefault(); handleNav(l.key)}}
className={current===l.key? 'active':''}
>{l.label}</a>
))}
</div>


<button className="hambtn" aria-expanded={open} aria-label="Toggle menu" onClick={()=>setOpen(o=>!o)}>
{/* simple hamburger icon */}
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7H20" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
<path d="M4 12H20" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
<path d="M4 17H20" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
</svg>
</button>


{open && (
<div className="mobile-menu" role="menu">
{links.map(l=> (
<a key={l.key}
href="#"
role="menuitem"
onClick={(e)=>{e.preventDefault(); handleNav(l.key)}}
className={current===l.key? 'active':''}
>{l.label}</a>
))}
</div>
)}
</nav>
</header>
)
}