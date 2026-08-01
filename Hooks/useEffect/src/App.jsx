import { useState, useEffect, useEffectEvent } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() =>{
    alert("your count is changed")
  })

  function handelClick(){
    setCount(count+1)
  }

  return (
    <>
      
        <button className='border-2'
          onClick={handelClick}
        >Click me
        </button>
        <br />
        count is {count}
      
    </>
  )
}

export default App
