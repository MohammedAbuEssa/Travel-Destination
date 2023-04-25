import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../header/Header';
import { useState } from 'react';
import Footer from '../footer/Footer';
import './TourDetails.css'
const cityArray= require('../../data/db');
function TourDetails() {
const [showFull, setShowFull]=useState(false);
const toggle=()=>{
  setShowFull(!showFull);
}

  const {id}= useParams();
  // console.log(id);
  function clickedCity() {
    let result=cityArray.filter(city=>city.id===id)
return result;
  }
  const city=clickedCity();

  const description =city[0].info;
  const maxLength=description.maxLength || 300;

  const displayText=showFull ? description: description.slice(0,maxLength);

  // console.log(city[0].name);
  // console.log(id);
  // console.log(clickedCity().name);
  return (
    <>
<Header/>
<div className='Card'>
    <h3>{city[0].name}</h3>
    <img src={city[0].image}/>
    <div >
      <p className='Info'>{displayText}</p>{description.length > maxLength && (<button onClick={toggle}>{showFull ? 'Show less' : 'Show more'}</button>
      
      )}
    </div>
    <p className='price'>{city[0].price} $</p>
    </div>
    <Footer/>
    </>
    
  )
}

export default TourDetails