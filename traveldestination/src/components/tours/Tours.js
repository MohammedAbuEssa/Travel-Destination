import React, { Component } from 'react'
import Tour from './tour/Tour';
import { Link, useParams } from 'react-router-dom';
//  = require('../../data/db');

function Tours(props) {
  // const {id}= useParams();
  return (
    <>{props.tour.map((item,i)=>{
      // const cityId=item.id;
      // console.log(cityId);
      return(
        <Tour item={item}/>

      )
          })}</>
  )
}

export default Tours


// 1- Move the map to tour. Done
// 2- Add the id of the city as params in tour Component.
// 3- In tourD use params to get the id from the route filter from the filter and render.
// 4- Add routing in app js.