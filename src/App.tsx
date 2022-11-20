import { BrowserRouter, Routes, Route } from "react-router-dom"

import SignUp from "./pages/Sign-up"

import "./assets/styles/reset.css"
import "./assets/styles/main.css"
import SignIn from "./pages/Sign-In"
import { Toastify } from "./utils/Toastify"
import Home from "./pages/Home"
import { UserContextProvider } from "./provider/UserProvider"

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>}></Route>
          <Route path="/sign-up" element={<SignUp/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
        <Toastify/>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
