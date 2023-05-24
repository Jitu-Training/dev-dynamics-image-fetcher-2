import React from 'react'
import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import App from './App';
import About from './components/About';
const index = () => {
  return (
<Routes>
    <Route path='/' element={<App />}/>
    <Route path='/about' element={<About />} />
</Routes>
  )
}

export default index