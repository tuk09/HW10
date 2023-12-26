const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)


function Counter() {
  const [countNum, setCountNum] = React.useState(0)

  const incCount = () => {
    setCountNum(countNum+1)
  }
  const decCount = () => {
    setCountNum(countNum-1)
  }
  const clrCount = () => {
    setCountNum(0)
  }

  return (
   <div className='counter'>
      <button onClick = {incCount}> + </button>
      <h3>{countNum}</h3>
      <button onClick = {decCount}> - </button>
      <button onClick = {clrCount}> C </button>
      <button onClick = {clrCount}> X </button>
   </div>
  )
}

function SumInfo()  {
  const stTitle = {
    color : "pink"
    // fontSize : "40px"
  }
  
  return (
    <div className='suminfo'>
      <h1 style={stTitle}>Sum = 0</h1>
      <button className='text-center'>Abb Counter</button>
      {/* <h3>Add Counter</h3> */}
    </div>
    
  )
}

function App() {
  const [counter,setCounter] = React.useState(0)
let allCounter = Array(counter).fill(
  <Counter />
)
console.log(allCounter)

  return (
  <>
  {/* <h1 className='text-center'>Codecamp Academy 01</h1> */}
    {/* <button className='text-center'>Abb Counter</button> */}
    {/* <h1>Codecamp Academy 01</h1> */}
    <SumInfo />
    <Counter />
  </>
  )
}


