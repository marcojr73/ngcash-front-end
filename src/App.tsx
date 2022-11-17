import { BrowserRouter, Routes, Route } from "react-router-dom"

import SignUp from "./pages/Sign-up"

import "./assets/styles/reset.css"
import "./assets/styles/main.css"
import SignIn from "./pages/Sign-In"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="/home"></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
