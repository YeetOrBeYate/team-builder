import React,{useState} from 'react';
import './App.css';
import Form from "./components/Form";
import Data from "./Data";
import FormRender from "./components/FormRender";

function App() {

  const [people,setPeople] = useState(Data);

  return (
    <div className="App">
      <Form></Form>
      <FormRender people = {people}></FormRender>
    </div>
  );
}

export default App;
