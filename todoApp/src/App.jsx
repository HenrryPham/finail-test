import { useState } from 'react'

import './App.css'
import Header from './Component/Header/Header'
import TodoActive from './Component/TodoActive/TodoActive'
import ContextProvider from './Component/TodoContext/ContextProvider'

function App() {

  return (
    <ContextProvider>
      <div className="todoApp-container">
        <Header />
        <TodoActive />
      </div>
    </ContextProvider>
  )
}

export default App
