import { Link, Route, Routes } from 'react-router-dom'
import Dev2 from './Components/DevJobs/Dev2'
import TarjetaEmpleo from './Components/DevJobs/TarjetaEmpleo'


function App() {
  return (
    <div>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/ofertas">Ofertas</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dev2 />} />
        <Route
          path="/ofertas"
          element={
            <TarjetaEmpleo
              id={1}
              titulo="Desarrollador Frontend"
              modalidad="remoto"
              esUrgente={true}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App