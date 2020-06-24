import React from 'react';
import './card-list.css';



export const Card=props=>
(<div className='card-container'>
<img src={`https://robohash.org/${props.monster.id}?set=set2&size=200x200`}/>     
<h3>{props.monster.name}</h3>
    </div>)

    