// import styles from './Course.module.css'
// className=""
// style={}

//   const styles = {
//         backgroundColor : "green",
//     }
// import HTML from './assets/profile.png'

// cons
// t Course1 = "HTML"

// import PropTypes from 'prop-types'


function Course(props){

    return(
        // props.name &&
        <div className="card">
            <img src={props.image} alt="" />
            <h5>{props.name}</h5>
            <p>{props.price}</p>
            <span>{props.rating}</span>
        </div>
    );
}


// Course.defaultprops

// Course.defaultprops = { image: HTML }

export default Course