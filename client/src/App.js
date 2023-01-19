import React from 'react'
import './App.css'
import Form from './components/Form'
import Graph from './components/Graph'

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <div className="grid md:grid-cols-2 gap-4">
          <Graph />
          <Form />
        </div>
      </div>
    </div>
  )
}

export default App
