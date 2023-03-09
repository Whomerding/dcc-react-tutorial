import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {

  const[entries, setEntries] = useState([{weight: 175, date: '11-25-2021'},{weight: 176, date: '11-26-2021'}])
  
  function addNewEntry(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }
  
  return (
    <div>
      <DisplayEntries parentEntries={entries} /> 
      <AddEntryForm addNewEntry = {addNewEntry} />   
    </div>
  );
}

export default App;
