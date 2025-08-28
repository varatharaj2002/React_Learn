// import styles from './Course.module.css'
// className=""
// style={}

//   const styles = {
//         backgroundColor : "green",
//     }
import HTML from './assets/profile.png'
const Course1 = "HTML"

function Course(props){

    return(
        <div className="card">
            <img src={props.image} alt="" />
            <h5>{props.name}</h5>
            <p>{props.price}</p>
        </div>
        
    );
}


// Course.defaultprops ={
//     name : "code IO course",
//     image : HTML
// }

export default Course