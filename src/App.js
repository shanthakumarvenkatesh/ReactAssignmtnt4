
import './App.css'
import Students from './components/Students'
import ContactUs from './components/ContactUs'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    
      <div className="navbar navbar-expand-lg bg-dark" id='navBar'>
          <div><Link to="/"><button className='btn btn-outline-success'>Home </button></Link></div>
          <div><Link to={'/students'}><button className='btn btn-outline-success'>Student </button></Link></div>
          <div><Link to={'contactus'}><button className='btn btn-outline-success'>Contact Us </button></Link></div>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>

  );
}
export default App;