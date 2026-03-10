// Dev3(Diseñador UI/Componente):
// Rutas: / (Bienvenida) y /ofertas (Listado de trabajos)
//Props: El componente TarjetaEmpleo debe recibir la informacion mediante props.
// Encargado de crear el componente TarjetaEmpleo que recibira las props y usara renderizado condicional con tailwind para que cada tarjeta se vea distinta segun los datos. Renderizado condicional: Si es "remoto" mostrar un badge verde. Si es "presencial" uno azul. si es urgente es true , debe aparecer un icono o texto rojo que diga "Urgente" (usar &&)



interface TarjetaEmpleo {
    titulo: string;
    compañia: string;
    modalidad: 'remoto' | 'presencial';
    esUrgente: boolean;
}

const TarjetaEmpleo = (props: TarjetaEmpleo) => {

    const { titulo, compañia, modalidad, esUrgente } = props;

    return (
        <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow flex justify-between items-center">
            <div>
                <h3 className="text-lg font-bold">{titulo}</h3>
                <p className="text-gray-600">{compañia}</p>
            </div>
            <div className="flex items-center gap-2">
                <span
                    className={`px-2 py-1 rounded-full text-sm font-semibold ${
                        modalidad === 'remoto'
                            ? <p className="bg-green-100 text-green-700">Remoto</p>
                            : <p className="bg-blue-100 text-blue-700">Presencial</p>
                    }`}
                >
                </span>
               
            </div>
           
            {esUrgente === true && <p className="text-red-500 font-bold">Urgente</p>}
        </div>
    )

}



export default TarjetaEmpleo