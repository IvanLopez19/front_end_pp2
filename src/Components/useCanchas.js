import axios from "axios";
import React from "react";


function useCanchas(){
    //const [loadign, setLoading] = React.useState(true);
    const [busqueda, setBusqueda] = React.useState('');
    const [canchas, setCanchas] = React.useState('');

    const onSearch = (event)=>{
        console.log(event.target.value);
        setBusqueda(event.target.value);
    }

    let newcanchas = [];
    
      if(busqueda.length == 0){
        newcanchas = canchas;
      }
      else{
        newcanchas = canchas.filter(cancha=>cancha.Negocio.toLowerCase().includes(busqueda.toLowerCase()));
      }

      const hola ="hola";

      const CanchaEspecifica = (slug)=>
      {const index = newcanchas.findIndex(cancha => cancha.id == (slug+1));
       return(newcanchas[index])};

      console.log(Array.isArray(canchas));
    /*const cambiarbusqueda = (a)=>{
        setBusqueda()
    }*/

    const functions = {
      onSearch,
      setBusqueda,
      setCanchas,
      CanchaEspecifica
    }

    const variables = {
      busqueda,
      newcanchas,
      hola,
    }

    return {functions, variables};
}

export {useCanchas};