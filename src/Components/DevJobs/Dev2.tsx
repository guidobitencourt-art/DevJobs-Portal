import TarjetaEmpleo from "./TarjetaEmpleo"

const Dev2 = () => {

  const ofertas = [
    {
      id: 1,
      titulo: "Frontend Developer",
      empresa: "TechNova",
      modalidad: "Remoto",
      esUrgente: true
    },
    {
      id: 2,
      titulo: "Backend Developer",
      empresa: "CodeWorks",
      modalidad: "Presencial",
      esUrgente: false
    },
    {
      id: 3,
      titulo: "Full Stack Developer",
      empresa: "DevSolutions",
      modalidad: "Remoto",
      esUrgente: false
    },
    {
      id: 4,
      titulo: "React Developer",
      empresa: "StartupX",
      modalidad: "Presencial",
      esUrgente: true
    }
  ];

  return (
    <div>
      <h2>Ofertas de Trabajo</h2>

      {ofertas.map((oferta) => (
        <TarjetaEmpleo
          key={oferta.id}
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
