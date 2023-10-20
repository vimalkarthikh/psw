import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Frogot from './Frogot'
import Reset from './Reset'
import Lp from './Lp'
import Todo from './Todo'

function App() {

  return (
    <>
     <Router>
      <Routes>
      <Route path='/' element={<Lp></Lp>}></Route>
      <Route path='/login' element={<Home></Home>}></Route>
      <Route path='/register' element={<Register/>}></Route>      
      <Route path='/rp/reset/:token' element={<Reset/>}></Route>    
      <Route path='/rp/forgotpassword' element={<Frogot/>}></Route>
      <Route path='/welcome' element={<Todo></Todo>}></Route>
    
      </Routes>
      
     </Router>
    </>
  )
}

export default App
