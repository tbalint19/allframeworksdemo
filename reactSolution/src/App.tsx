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

  const names = [ "john", "jack", "jim", "jane" ]

  const fruits = [
    { name: "alma", color: "piros" },
    { name: "korte", color: "barna" },
    { name: "narancs", color: "narancssarga" },
    { name: "cseresznye", color: "piros" },
  ]

  const [ isShown, setIsShown ] = useState(false)

  return (
    <main>
      <div>Hello { title }</div>
      <button onClick={modifyTitle}>Modify</button>
      <hr />
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={reset}>Reset</button>
      <button onClick={logInputValue}>Log</button>
      <hr />

      { names.map(name => <p className="text-3xl">{name}</p>) }

      { fruits.map(fruit => <p className="text-error">{ fruit.name } ({fruit.color})</p>) }

      <section>
        <button onClick={() => setIsShown(!isShown)}>Toggle</button>
        <div>elso haho</div>
        { isShown ? <div>masodik haho</div> : <div>Secret!</div> }
      </section>

      {/* <p>{ fruits[0].name } ({fruits[0].color})</p>
      <p>{ fruits[1].name } ({fruits[1].color})</p>
      <p>{ fruits[2].name } ({fruits[2].color})</p>
      <p>{ fruits[3].name } ({fruits[3].color})</p> */}
    </main>
  );
};

export default App;
