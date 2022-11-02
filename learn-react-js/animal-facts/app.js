import { animals } from './animals';
import React from 'react'
import ReactDOM from 'react-dom'

// may contain references to files that i did not export
const title = '';
const background = <img src='/images/ocean.jpg' className='background' alt='ocean' />

// initializes an array of img elements
// each img is of an animal type and animal src from animals
let images = [];
for (const animal in animals) {
  images.push(
      <img 
      key={animal} 
      className='animal' 
      alt={animal} 
      src={animals[animal].image} 
      aria-label={animal} 
      role='button' 
      onClick={displayFact}
      />
  );

}

// this function will be attached to each animal img
function displayFact(e) {
  const selected = e.target.alt;
  const animalInfo = animals[selected];
  const index = Math.floor(Math.random() * animalInfo.facts.length);
  const fact = animalInfo.facts[index];
  document.getElementById('fact').innerHTML = fact;
};

const showBackground = false;

// the component that will display the animal fact, and the animal images
const animalFacts = (<div>
  <h1>{!title ?
    'Click an animal for a fun fact':
    title}
  </h1>
  {background && showBackground ?
  background :
  "No background :("}
  <p id='fact'></p>
  <div className='animals'>
     {images}
  </div>
</div>);

ReactDOM.render(animalFacts, document.getElementById('root'));