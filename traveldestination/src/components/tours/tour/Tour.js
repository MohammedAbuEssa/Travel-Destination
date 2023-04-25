import React from 'react'
import { Link,useParams } from 'react-router-dom'
import './Tour.css'


function Tour(props) {
    const {id}= useParams();
    const cityId=props.item.id;
    // console.log(cityId);
    return (
        <div>
        <div className='Card'>
       <Link to={`/city/${cityId}`} >   <div key={props.item.id}>
      <h3>
          {props.item.name}
      </h3>
      <img src={props.item.image}/>
          </div></Link>
        </div>
        </div>
      )
}

export default Tour