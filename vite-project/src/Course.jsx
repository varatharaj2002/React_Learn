// import styles from './Course.module.css'
// className=""
// style={}

import { useEffect, useState } from "react";

//   const styles = {
//         backgroundColor : "green",
//     }
// import HTML from './assets/profile.png'

// cons
// t Course1 = "HTML"

// import PropTypes from 'prop-types'


function Course(props){

    // let purchased = false;
    const[purchased, setpurchased] = useState(false);
    const[discount, setdiscount] = useState(props.price);

    function BuyCourse(amt){
        // e is diff
        console.log(props.name,"purchased with" ,discount,"% discount");
        // console.log(e);
        setpurchased(true)
        setdiscount(discount-amt)
        console.log(purchased)
        console.log(handelDelete)
        
    }

    // useEffect(()=> {
    //     console.log('inside course effect');
    //     console.log(purchased)
    // });

    // const[dummy, setDummy] = useState(true);

    return(
        // props.name &&
        <div className="card">
            <img src={props.image} alt="" />
            <h5>{props.name}</h5>
            {/* <p>{props.price}</p> */}
            <p>{discount}</p>
            {/* <span>{props.rating}</span> */}
            <button onClick={()=> {BuyCourse(20)}}>discount</button>
            {/* <button onClick={(event)=> {BuyCourse(20); console.log(event)}}>Buy Now</button> */}
            {/* <p>{purchased ? "already purchased" : "buy now"}</p> */}
            <button onClick={()=> props.delete(props.id)}>Delete</button>
            <p>{purchased} </p>

        </div>
    );
}


// Course.defaultprops

// Course.defaultprops = { image: HTML }

export default Course