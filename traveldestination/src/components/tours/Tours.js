import React from 'react'


function Tours(props) {
  return (
    <>{props.arrayData.map((item,i)=>{
return(
    <div key={i}>
<h3>
    {item.name}
</h3>
<img src={item.image}/>
    </div>
)
    })}</>
  )
}

export default Tours