// Dev3(Diseñador UI/Componente):
// Rutas: / (Bienvenida) y /ofertas (Listado de trabajos)
//Props: El componente TarjetaEmpleo debe recibir la informacion mediante props.
// Encargado de crear el componente TarjetaEmpleo que recibira las props y usara renderizado condicional con tailwind para que cada tarjeta se vea distinta segun los datos. Renderizado condicional: Si es "remoto" mostrar un badge verde. Si es "presencial" uno azul. si es urgente es true , debe aparecer un icono o texto rojo que diga "Urgente" (usar &&)



interface TarjetaEmpleo {
 
    modalidad: 'remoto' | 'presencial';
    esUrgente: boolean;
}

const TarjetaEmpleo = (props: TarjetaEmpleo) => {

    const { modalidad, esUrgente } = props;

    return (
        <div>
            {modalidad === 'remoto' ? (
                <div className="badge badge-green">Remoto</div>
            ) : (
                <div className="badge badge-blue">Presencial</div>
            )}
           
            {esUrgente === true && <p className="text-red-500 font-bold">Urgente</p>}
        </div>
    )

}



export default TarjetaEmpleo