import React from 'react'
import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
const data = require('../../data/db.json');

 function Home() {
  return (
    <>
    <Header/>
<Tours arrayData={data}/>
<Footer/>
    </>
  )
}


export default Home;
