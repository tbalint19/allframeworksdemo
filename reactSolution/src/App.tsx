import { useState } from "react";

const App = () => {

  //let title = "React (from variable)";
  const [ title, setTitle ] = useState("React (from variable)")

  const modifyTitle = () => {
    //title = "modified"
    setTitle("modified")
  }

  //let inputValue = ""
  const [ inputValue, setInputValue ] = useState("")
  const logInputValue = () => {
    console.log(inputValue)
  }
  const reset = () => {
    //inputValue = ""
    setInputValue("")
  }

  return (
    <main>
      <div>Hello { title }</div>
      <button onClick={modifyTitle}>Modify</button>
      <hr />
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={reset}>Reset</button>
      <button onClick={logInputValue}>Log</button>
    </main>
  );
};

export default App;
