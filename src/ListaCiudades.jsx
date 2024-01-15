import { useEffect, useState } from "react";
import "./ListaCiudades.css";

const ListaCiudades = ({ciudades,identificadorCambiar}) => {

  const [ciudad, setCiudad] = useState([]);

  useEffect(() => {
    setCiudad(ciudades);
  }, []);


  function asignarId(ciudad) {
    identificadorCambiar(ciudad.id);
  }

  return (
    <>
      <div className="listaCiudades">
        <ol className="lista">
          {ciudad.map((e) => (
            <li onClick={ ()=>  asignarId(e) } key={e.id} className="ciudad">
              {e.nombre}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default ListaCiudades;
