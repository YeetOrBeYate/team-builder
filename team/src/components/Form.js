import React,{useState} from 'react';

const Form = (props)=>{
    const addPerson = props.funct;
    const [person, setPerson]= useState({
        name:"",
        email:"",
        position:""
    }) 

    function changeHandle(e){
        setPerson({...person, [e.target.name]: e.target.value});
    }

    const submitP = (e)=>{
        e.preventDefault();
        addPerson(person);
        setPerson({
            name: "",
            email: "",
            position: ""
        })
    }

    return(
        <form onSubmit={submitP}>
            <input onChange={changeHandle} on type="text" name="name" placeholder="Name"></input>
            <input onChange={changeHandle} type="text" name="email" placeholder="email"></input>
            <input onChange={changeHandle} type="text" name="position" placeholder="position"></input>
            <button type="submit">Submit</button>
        </form>
    );
}
export default Form;