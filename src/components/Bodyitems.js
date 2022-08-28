import React, {useState} from "react";
import noodle from "./images/noodle.jpg";
function Foods(props) {
    const [price, setRate] = useState(props.price)

    const offer = () => {
        setRate(props.price/2);
    };
    return (
        <>
            <div className='fooditems'>
                <div className='dish'>
                    <img src={noodle} alt={props.name} width={500} height={200}></img>
                    <div>
                        <p><h2>{props.name}</h2></p>
                        
                        <p>{props.restaurant}</p>
                        <p>{price}Rs</p>
                        <button className="offer" onClick={offer}>Order</button>
                    </div>
                </div>

            </div>
        </>
    );

};
export default Foods;
