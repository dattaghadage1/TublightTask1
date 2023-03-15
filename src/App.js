import React from 'react'
import Tabaledata from './Tabaledata'
import Tabal from './Task/Tabal'
import './App.css'
import TaskDELSHOW from './Task/TaskDELSHOW'
import PokemonList from './Tharoli-Task/PokemonList'
import OTP from './Task/OTP'
import Form from './Formik/Form'
import Counter from './TublightTask/Counter'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ControlledForm from './TublightTask/Controlled'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Counter/>}></Route>
    <Route path='/controll' element={<ControlledForm/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App



// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import PokemonDetails from './Tharoli-Task/PokemonDetails'
// import PokemonList from './Tharoli-Task/PokemonList'

// function App() {
//   return (
//     <div>
//     <BrowserRouter>
//     <Routes>
//     <Route path='/' element={<PokemonList/>}></Route>
//     <Route path='/pokemon' element={<PokemonDetails/>}></Route>
//     <Route path='/pokemon/:name' element={<PokemonDetails/>}></Route>
//     </Routes>
//     </BrowserRouter>
//     </div>
//   )
// }

// export default App