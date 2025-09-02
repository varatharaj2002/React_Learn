// import styles from './Course.module.css'
// className=""
// style={}

import { useState } from "react";

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

    function BuyCourse(discount){
        // e is diff
        console.log(props.name,"purchased with" ,discount,"% discount");
        // console.log(e);
        setpurchased(true)
        console.log(purchased)
        
    }

    return(
        // props.name &&
        <div className="card">
            <img src={props.image} alt="" />
            <h5>{props.name}</h5>
            <p>{props.price}</p>
            {/* <span>{props.rating}</span> */}
            <button onClick={(event)=> {BuyCourse(20,event)}}>Buy Now</button>
            {/* <button onClick={(event)=> {BuyCourse(20); console.log(event)}}>Buy Now</button> */}
            <p>{purchased ? "already purchased" : "buy now"}</p>

        </div>
    );
}


// Course.defaultprops

// Course.defaultprops = { image: HTML }

export default Course