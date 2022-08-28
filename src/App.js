// import './App.css';
// import Foods from './components/zomato.js';

// import bir from './images/biryani1.png';
// import par from './images/parotta1..jpg';
// import nod from './images/noodle.jpg';
// import Forms from './components/form.js';



// function App() {
//   const menu = [
//     {
//       hotal: "Thalapakatti",
//       name: "Bun Parotta",
    
//       offer: "25%",
//       price: 45

//   },
//   {
//       hotal: "Gowrishanker",
//       name: "noodle",
//       offer: "10%",
//       price: "100rs",
//   },
//   {
//       hotal: "Rusi",
//       name: "biryani",
//       offer: "10%",
//       price: "180 rs"
//   },
//   {
//       hotal: "kfc",
//       name: "grill",
//       offer: "20%",
//       price: "360 rs"
//   },
//   {
//       hotal: "Dominos",
//       name: "pizza",
//       offer: "35%",
//       price: " 230 rs"
  


//   }
// ];
// const [menuitems, setMenuitems] = useState(menu);
// const FormHandler=(list) =>{

//   setMenuitems((premenuitems)==>{

//     return[...[list], ...premenuitems]
//   });
// }

import './App.css';
import Food from "./components/zomato.js";
import './components/zomato.css'
import bir from './components/images/biryani1.png';
import Form from './components/form.js';

import { useState } from 'react';


function App() {
    const menu = [
        {
            name: "Burger",
            restaurant: "KFC",
            price: 190
            
        },
        {
            name: "Shezwan noodle",
            restaurant: "Fast food",
            price: 130
          
        },
        {
            name: "Pizza",
            restaurant: "Dominos",
            price: 260
            
        },
        {
            name: "Bun parota",
            restaurant: "madurai Villas",
            price: 30
            
        },
        {
            name: "Biryani",
            restaurant: "Thalapakatti",
            price: 250
        }
    ];
    const [dishitems,setMenuitems]=useState(menu);
    const FormHandler=(aziz)=>{
      
    
        setMenuitems((premenuitems)=>{
            return[...[aziz],...premenuitems]
        });
        
    }
    return (
        <div className="App">
            <header className="App-header">
              
                <h1>Zomato</h1>
                <input type='text' placeholder="Enter You like to Wish"></input>
                <button>login</button>
                {/* <button>OR</button> */}
                <button>Sign up</button>
            </header>

            <div className='filters'>
                <div className='items'>
                    <select>
                        <option>sort</option>
                    </select>
                 
                    <select>
                        <option>Offers</option>
                    </select>
                    <select>
                        <option>Rating</option>
                    </select>
                 
                    <select>
                        <option>New Arrivals</option>
                    </select>
                    
                </div>

            </div>
            <div>
                <p className='headline'>Enna Bro Mathiyanam Atchi Biryani onnu Order Potruvoma </p>
            </div>
            <div  className='vm'>
                <img src={bir} width={1100} height={600} />
                <p>Vanakkam da mapla !<br></br> Put some valuable code <br></br> Get <b> 50% </b> Offer </p>
            </div>
            
            <Form onFormAdd={FormHandler}></Form>
    
          <Food details={dishitems}></Food>

        </div>
    );
}

export default App;