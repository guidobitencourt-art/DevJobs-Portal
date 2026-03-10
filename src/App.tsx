import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Offer from './Pages/Offer/Offer'

import Dev2 from "./Components/DevJobs/Dev2";


const App = () => {
  return (
    <BrowserRouter>
      {/* Barra de navegación */}
      <nav className="bg-pink-600 px-8 py-4 flex gap-6 items-center shadow-md">
        <Link to="/" className="px-3 py-1 rounded-md text-white font-semibold hover:bg-pink-400 transition">Home</Link>
        <Link to="/offer" className="px-3 py-1 rounded-md text-white font-semibold hover:bg-pink-400 transition">Offer</Link>
      </nav>

      {/* Rutas */}
      <div className="p-8 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="*" element={<h2 className="text-center text-2xl font-bold text-red-500">404 - Not Found</h2>} />
        </Routes>
      </div>

    </BrowserRouter>

    )
    <div className="App">
      <h1>Bienvenido a DevJobs</h1>
      <Dev2 />
    </div>
  );
}

export default App;