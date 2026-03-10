import TarjetaEmpleo from "./TarjetaEmpleo"

const Dev2 = () => {

  const ofertas: Array<{ id: number; titulo: string; empresa: string; modalidad: 'remoto' | 'presencial'; esUrgente: boolean }> = [
    {
      id: 1,
      titulo: "Frontend Developer",
      empresa: "TechNova",
      modalidad: "remoto",
      esUrgente: true
    },
    {
      id: 2,
      titulo: "Backend Developer",
      empresa: "CodeWorks",
      modalidad: "presencial",
      esUrgente: false
    },
    {
      id: 3,
      titulo: "Full Stack Developer",
      empresa: "DevSolutions",
      modalidad: "remoto",
      esUrgente: false
    },
    {
      id: 4,
      titulo: "React Developer",
      empresa: "StartupX",
      modalidad: "presencial",
      esUrgente: true
    }
  ];

  return (
    <div>
      <h2>Ofertas de Trabajo</h2>

      {ofertas.map((oferta) => (
        <TarjetaEmpleo
          key={oferta.id}
          id={oferta.id}
          titulo={oferta.titulo}
          empresa={oferta.empresa}
          modalidad={oferta.modalidad}
          esUrgente={oferta.esUrgente}
        />
      ))}

    </div>
  );
}

export default Dev2;