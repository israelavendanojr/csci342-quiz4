import React from 'react'
import ClickCounter from './components/ClickCounter'
import LikeButton from './components/LikeButton'
import ExampleHooks1 from './components/ExampleHooks1'
import ExampleHooks2 from './components/ExampleHooks2'
import UseEffect1 from './components/UseEffect1'
import UseEffect2 from './components/UseEffect2'

function App() {
  return (
    <div>
      <h1>CSCI 342 Quiz 4</h1>

      <h2>ClickCounter</h2>
      <ClickCounter />

      <h2>LikeButton</h2>
      <LikeButton />

      <h2>ExampleHooks1</h2>
      <ExampleHooks1 />

      <h2>ExampleHooks2</h2>
      <ExampleHooks2 />

      <h2>UseEffect1</h2>
      <UseEffect1 />

      <h2>UseEffect2</h2>
      <UseEffect2 />
    </div>
  )
}

export default App
