import Button from "./component/Button"

import { useState } from 'react'

function App() {
  const [Color, setColor] = useState("white")

  return (
    <>
    <div className="text-center h-screen w-screen" style={{backgroundColor:Color}}>
      <Button text="red" onClick={() => setColor("red")} type="red" />
      <Button text="blue" onClick={() => setColor("blue")} type="blue" />
      <Button text="green" onClick={() => setColor("green")} type="green" />
      <Button text="orange" onClick={() => setColor("orange")} type="orange" />
    </div>

    </>
  )
}

export default App
