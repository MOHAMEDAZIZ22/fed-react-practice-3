// import React, { useState } from "react";
// function Forms() {
//     const [username, setuserName] = useState('');
//     const [password, setuserPassword] = useState('');

//     const userHandler = (event) => {
//         console.log(event.target.value);
//         setuserName(event.target.value)

//     }
//     const passwordHandler = (event) => {
//         console.log(event.target.value);
//         setuserPassword(event.target.value)

//     }

//     const submitHandler = (event) => {
//         console.log(username, password);
//         event.preventDefault();

//     }

//     return (

//         <div className='forms'>
//             <form onSubmit={submitHandler}>
//                 <h2>FORM</h2>
//                 <label>UserName:</label>
//                 <input type="text" placeholder="Enter ur Name" value={username} onChange={userHandler} /><br></br><br></br>
//                 <label >Password:</label>
//                 <input type="number" placeholder="Enter ur Password" value={password} onChange={passwordHandler} /><br></br><br></br>
//                 <input type="submit" />
//             </form>
//         </div>



//     );
// }
// export default Forms;


import { useState } from 'react'
import './Bodyitems';
import './Form.css'

export default function Form(props) {
    const [fooditem, setFoodItem] = useState({

        name: "",
        location: "",
        price: '',

    });
    const dishHandle = (event) => {
        setFoodItem((previousState) => {
            return { ...previousState, name: event.target.value }
        });
    }

    const qtyHandle = (event) => {
        setFoodItem((previousState) => {
            return { ...previousState, restaurant: event.target.value }
        });
    }
    const rateHandle = (event) => {
        setFoodItem((previousState) => {
            return { ...previousState, price: event.target.value }
        });

    }
    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(fooditem);
        props.onFormAdd(fooditem);
        setFoodItem({
            name: "",
            restaurant: "",
            price: ""
        });
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <input type="text" placeholder="Enter The New Item" value={fooditem.name} onChange={dishHandle} />


            <input type="text" placeholder="Name The Restaurant" value={fooditem.restaurant} onChange={qtyHandle} />
            <input type="number" placeholder="Price" value={fooditem.price} onChange={rateHandle} />
            <input type="submit" />
        </form>
    );
};