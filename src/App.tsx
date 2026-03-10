import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Offer from './Components/Pages/Offer/Offer';
import Dev2 from './Components/Pages/DevJobs/Dev2';

const App = () => {
  return (
    <>
      {/* Barra de navegación */}
      <nav className="bg-pink-600 px-8 py-4 flex gap-6 items-center shadow-md">
        <Link to="/" className="px-3 py-1 rounded-md text-white font-semibold hover:bg-pink-400 transition">Home</Link>
        <Link to="/offer" className="px-3 py-1 rounded-md text-white font-semibold hover:bg-pink-400 transition">Offer</Link>
        <Link to="/devjobs" className="px-3 py-1 rounded-md text-white font-semibold hover:bg-pink-400 transition">DevJobs</Link>
      </nav>

      {/* Rutas */}
      <div className="p-8 bg-gray-100 min-h-screen">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/offer' element={<Offer />}></Route>
          <Route path='/devjobs' element={<Dev2 />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;