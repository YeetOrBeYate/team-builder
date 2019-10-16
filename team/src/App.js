import React,{useState} from 'react';
import './App.css';
import Form from "./components/Form";
import Data from "./Data";
import FormRender from "./components/FormRender";

function App() {

  const [people,setPeople] = useState(Data);

  function addPeople(person){
    setPeople([...people, person]);
  }

  console.log('from app', {...people})
  console.log(people)

  return (
    <div className="App">
      <Form funct = {addPeople}></Form>
      <FormRender people = {people}></FormRender>
    </div>
  );
}

export default App;
