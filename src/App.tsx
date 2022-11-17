import { BrowserRouter, Routes, Route } from "react-router-dom"

import SignUp from "./pages/Sign-up"

import "./assets/styles/reset.css"
import "./assets/styles/main.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>}></Route>
        <Route path="/sign-up"></Route>
        <Route path="/home"></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
