
import  './DescripcionCiudad.css'

const Descripcion = ({ciudades,asignarId}) => {

  function agregarSeparadorDecimal(numero){
    let numeroALetra ="";
    numeroALetra = numero.toString();
    
    let cantidadDeNumeros=0;
    cantidadDeNumeros = numeroALetra.length-1;

    let flat=false;
    let cantTotCeros=0;

     while (!flat) {
         if(cantidadDeNumeros%3==0){
           flat=true;
           cantTotCeros=cantidadDeNumeros;
         } else {
          cantidadDeNumeros--;
         }
     }

    let tamañoArreglo = numeroALetra.length + parseInt(cantTotCeros)/3;

    let arreglo = new Array(tamañoArreglo);

    let cont=1;

      for (let i = arreglo.length-1; i >= 0 ; i--) {
          if(cont%4==0){
              arreglo[i]=".";
          }
          cont++;
      }

      let ubicacionNumero=0;

      for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i]!="."){
          arreglo[i]=numeroALetra.charAt(ubicacionNumero);
        } else {
          ubicacionNumero--;
        }
        ubicacionNumero++;
      }
    let valorFinal = arreglo.join("");

    return valorFinal;

  }

  

   if( asignarId == -1){
      return(
        <>
          <div className='posicion'>
          <h1>Conozca las maravillas de las ciudades en Cuba</h1>
          <p>Identifiquese con nuestra cubania</p>
          <h3>Disfrute de cada una de ellas</h3>
          </div>
        </>
      )
   } else {
     return (
       <>
       <div className="posicion">
       <h1>{ciudades[asignarId].nombre}</h1>
       <p>Descripción: {ciudades[asignarId].descripción}</p>
       <p>Cantidad de Habitantes: <b>{agregarSeparadorDecimal(ciudades[asignarId].cantidadHabitantes)}</b> </p>
       </div>
     </>
     )
   }
   }


export default Descripcion;

