import React from "react";

const FormRender = (props) =>{
    const people = props.people;
    const yeet = []
    return(
    <div className = "cardHolder">
            {people.map((person,index)=>(
            <div className="card" key = {index}>
                <h1>{person.name}</h1>
                <h3>{person.email}</h3>
                <h4>{person.position}</h4>
            </div>
                ))}
    </div>
    );
}
export default FormRender;