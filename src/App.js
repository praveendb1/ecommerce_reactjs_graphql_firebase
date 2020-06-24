import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/Card-list.component';


class App extends Component{
constructor(){
super();

this.state={
  monster:[],
  }


}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({monster:users}));
}



render(){

  return(<div>
    {this.state.monster.map(monster=><h1>{monster.name}</h1>)}
    
    </div>)
   
  }
}

export default App;




















// this.state={
//     monsters:[],
//     searchField:''
//   };
// }


// componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response=>response.json())
//   .then(user=>this.setState({monsters:user}));
// }

// render(){

//   const{monsters,searchField}=this.state;
//   const filteredMonsters=monsters.filter(monster=>
//   monster.name.toLowerCase().includes(searchField.toLowerCase())
//   )
// console.log(filteredMonsters);

// return(
//   <div>
//       <input type="search" placeholder="search monsters" 
//       onChange={e=>{this.setState({searchField:e.target.value},()=>console.log(this.state));
//       }} 
//       />
//       <CardList monsters={filteredMonsters}/>
//   </div>
//    )

// }
// }

// export default App;
