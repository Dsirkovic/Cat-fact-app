import './App.css'
import { Form } from "./components/Form"
import { Facts } from './pages/Facts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <div>
       <Router>
        <Routes>
          <Route path="/" element={<Form />}/>
          <Route path="/Facts" element={<Facts />} />
        </Routes>
       </Router>
      </div>
     
    </>
  )
}

export default App
