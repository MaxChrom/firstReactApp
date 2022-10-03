import "./App.css"

const AnotherFunc = () => {
  return "Some additional text for testing"
}

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <h2>This is another function</h2>
      <p>{AnotherFunc()}</p>
    </div>
  )
}

function App() {
  const myClassName = "myApp"
  const myOtherClassName = "ourApp"
  return (
    <>
      {" "}
      <div className={myClassName + "" + myOtherClassName}>
        <h1>Hello React</h1>
        <Hello name='Maxim' />
      </div>
      <div className={"second"}>
        <h2>Test</h2>
      </div>
    </>
  )
}

export default App
