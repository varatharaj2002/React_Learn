import Course from './Course'
import HTML from './assets/HTML.png'
import CSS from './assets/CSS.jpg'
import JS from './assets/JS.png'

function CourseList(){

    const Courses = [
        {
            name : "HTML Full Course",
            price : "$199",
            image : {HTML},
            rating : 5
        },
        {
            name : "CSS Full Course",
            price : "$199",
            image : {CSS},
            rating : 5
        },
        {
            name : "JS Full Course",
            price : "$199",
            image : {JS},
            rating : 5
        }
    ]

    const CoursesList = Courses.map((Course) => 
        <Course name={Course.name} 
        image={Course.image} 
        price={Course.price} 
        rating={Course.rating} />)

    return(
        <>
            {CoursesList}
        </>
    );
}

export default CourseList