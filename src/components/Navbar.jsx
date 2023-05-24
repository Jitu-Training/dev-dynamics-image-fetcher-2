import Search from "./Search"
import About from "./About"
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'

const Navbar =() =>{
    return(
   <nav className="nav">
           <Search/>
           <Link to="/about"className="link">About</Link>
        </nav>
    )  
}
export default Navbar