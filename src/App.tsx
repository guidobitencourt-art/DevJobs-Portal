import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Offer from './Pages/Offer/Offer'



function App() {
  return (
    <BrowserRouter>
      {/* Barra de navegación */}
      <nav className="p-4 bg-indigo-600 text-white flex gap-4 shadow-lg">
        <Link to="/" className="hover:underline font-bold">Home</Link>
        <Link to="/Offer" className="hover:underline font-bold">Offer</Link>
      </nav>

      {/* Path */}
      <div className="p-10">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/offer' element={<Offer />}></Route>
        {/* 404 - Si no encuentra la ruta */}
        <Route path='*' element={<h2 className='text-red-500'>404 - Not Found</h2>}></Route>
        </Routes>
      </div>

    </BrowserRouter>  )
}

export default App