import React from 'react';

const Form = (props)=>{
    return(
        <form>
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="email"></input>
            <input type="text" placeholder="position"></input>
            <button>Submit</button>
        </form>
    );
}
export default Form;