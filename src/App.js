import React from 'react'
import Counter from './pages/Counter'
import Users from './pages/Users'
import { Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='users' element={<Users/>}></Route>
        <Route path='counters' element={<Counter/>}></Route>
      </Routes>
    </div>
  )
}

export default App
