import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");

  function handleChange(event) {
    //console.log(event.target.value)
    setName(event.target.value);
  }

  function nameSubmit() {
    //console.log(name);
    setName2(name);
  }

  return (
    <div className="container">
      <h1>Hello {name2}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={nameSubmit}>Submit</button>
    </div>
  );
}

export default App;
