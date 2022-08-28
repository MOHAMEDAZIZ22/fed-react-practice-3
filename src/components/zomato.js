// import './zomato.css';


// function Foods() {
//     const menu = [
//         {
//             hotal: "Thalapakatti",
//             name: "Bun Parotta",
//             offer: "25%",
//             price: "45rs for plate",

//         },
//         {
//             hotal: "Gowrishanker",
//             name: "noodle",
//             offer: "10%",
//             price: "100rs",
//         },
//         {
//             hotal: "Rusi",
//             name: "biryani",
//             offer: "10%",
//             price: "180 rs"
//         },
//         {
//             hotal: "kfc",
//             name: "grill",
//             offer: "20%",
//             price: "360 rs"
//         },
//         {
//             hotal: "Dominos",
//             name: "pizza",
//             offer: "35%",
//             price: " 230 rs"
//         }
//     ]
//     return (
//         <div>

//             <div className='items'>
//                 <select>
//                     <option>offers</option>
//                 </select>
//                 <select>
//                     <option>sort</option>
//                 </select>
//                 <select>
//                     <option>New Arrival</option>
//                 </select>
//                 <select>
//                     <option>delivery speed</option>
//                 </select>

//             </div>
//             <p className='y'><b>Yenna Bro Mathiyanam Atchi Biryani Onnu Order Potruvoma </b></p>
//             <div className='gree'>
//                 <img src={bir} width={1000} height={500} />
//                 <p>Vanakkam da mapla!<br></br> Put Some valuable Code <br></br>Get<b> 50% </b> Offer </p>
//             </div>
//             <div className='fooditems'>
//                 <div className='dish'>
//                     <div className='tot'>
//                         <div className='A1'>
//                             <img src={par} height={200} width={300}></img></div>
//                         <div className='A2'>
//                             <p><h1>{menu[0].hotal}</h1></p>
//                             <p><h2>{menu[0].name}</h2></p>
//                             <p>{menu[0].offer}</p>
//                             <p>{menu[0].price}</p>


//                         </div>
//                     </div>
//                 </div>

//                 <div className='dish'>
//                     <div className='tot1'>
//                         <div className='A1'>
//                             <img src={nod} height={200} width={300}></img></div>
//                         <div className='A2'>
//                             <p><h1>{menu[1].hotal}</h1></p>
//                             <p><h2>{menu[1].name}</h2></p>
//                             <p>{menu[1].offer}</p>
//                             <p>{menu[1].price}</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='dish'>
//                     <div className='tot2'>
//                         <div className='A1'>
//                             <img src={bir} height={200} width={300}></img></div>
//                         <div className='A2'>
//                             <p><h1>{menu[2].hotal}</h1></p>
//                             <p><h2>{menu[2].name}</h2></p>
//                             <p>{menu[2].offer}</p>
//                             <p>{menu[2].price}</p>
//                         </div>
//                     </div>
//                 </div>


//                 <div className='dish'>
//                     <div className='tot2'>
//                         <div className='A1'>
//                             <img src={bir} height={200} width={300}></img></div>
//                         <div className='A2'>
//                             <p><h1>{menu[3].hotal}</h1></p>
//                             <p><h2>{menu[3].name}</h2></p>
//                             <p>{menu[3].offer}</p>
//                             <p>{menu[3].price}</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='dish'>
//                     <div className='tot3'>
//                         <div className='A1'>
//                             <img src={par} height={200} width={300}></img></div>
//                         <div className='A2'>
//                             <p><h1>{menu[4].hotal}</h1></p>
//                             <p><h2>{menu[4].name}</h2></p>
//                             <p>{menu[4].offer}</p>
//                             <p>{menu[4].price}</p>
//                         </div>

//                     </div>

//                 </div>



//             </div>


//         </div>
//     );

// };

// export default Foods;


import './zomato.css';
import "./Bodyitems.js";
import Foods from "./Bodyitems.js";

function Food(props) {

    return (
        <div className='foot-container'>
    {/* <Fooditems img={props.item[0].img} name={props.item[0].name} distance={props.item[0].distance} rate={props.item[0].price}></Fooditems>
    <Fooditems img={props.item[1].img} name={props.item[1].name} distance={props.item[1].distance} rate={props.item[1].price}></Fooditems>
    <Fooditems img={props.item[2].img} name={props.item[2].name} distance={props.item[2].distance} rate={props.item[2].price}></Fooditems>
    <Fooditems img={props.item[3].img} name={props.item[3].name} distance={props.item[3].distance} rate={props.item[3].price}></Fooditems>
    <Fooditems img={props.item[4].img} name={props.item[4].name} distance={props.item[4].distance} rate={props.item[4].price}></Fooditems> */}
    
    {
            props.details.map((items)=>{
                return <Foods key={Math.random()} img={items.img} name={items.name} restaurant={items.restaurant} price={items.price}></Foods>
            })
        }
    </div>
    );
};

export default Food;