import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Register from "./pages/Register"
import Login from "./pages/Login"
// import User from "./pages/User"

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/user' element={<User />} /> */}
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>

  </>
}

export default App