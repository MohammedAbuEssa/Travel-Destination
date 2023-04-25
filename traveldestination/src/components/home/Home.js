import React from 'react'
import Header from '../header/Header';
import Tours from '../tours/Tours';
import { Routes,Route } from 'react-router-dom';
import Footer from '../footer/Footer';
const tour = require('../../data/db');



 function Home() {
  return (
    <>
    <Header/>
    {/* <Routes>
    <Route path='/tourDetails' element={<Tours/>} />
    </Routes> */}
    <Tours tour={tour} />
    <Footer/>
    </>
  )
}


export default Home;

