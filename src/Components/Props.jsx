
import PropTypes from "prop-types"
function Student(props){

return(
        <div>
            <p >Name: {props.name}, age {props.age}, city: {props.city}, Teenager? {props.isstudent ? "Yes" : "No"}</p>

        </div>

)




}


Student.propTypes = {

    name: PropTypes.string,
    age: PropTypes.number,
    teenager: PropTypes.bool,
    city: PropTypes.string
}

Student.defaultProps = {
name: "Guest",
age: 0,
teenage: false,
city: "Default"
}



export default Student;