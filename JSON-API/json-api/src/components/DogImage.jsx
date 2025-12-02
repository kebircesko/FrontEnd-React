import {useState, useEffect} from 'react';

function DogImage() {
    const [dogImage, setDogImage] = useState('');

    useEffect(() => { {/*Kur të hapet kjo faqe, ekzekutoje këtë kod. */}
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => setDogImage(data.message))
        .catch(error => console.error('Error fetching dog image:', error));
    }, []);{/*[]-vendosen kur dojm vetem nje here me perserit*/}
{/*fetch() i thotë serverit: “Më jep të dhënat e përdoruesve”
response.json() → kthen përgjigjen në format JSON
then(data => …) → këtu e përdorim rezultatin
catch() → kap gabimet nëse nuk ka sukses */}
    return (
        <div style={{textAlign: 'center'}}>
            <h2>Random Dog Image with API</h2>
            {dogImage ? <img src={dogImage} alt="Random Dog" style={{maxWidth: '400px', height: 'auto'}} /> 
            : <p>Loading...</p>}
        </div>
    );
}
export default DogImage;