import React from 'react'
import Gasto from './Gasto'

const ListadosGasto = ({gastos,SetGastoEditar,eliminarGasto}) => {
  return (
      <div className='listado-gastos contenedor'>
          <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos Aún'}</h2>


          {gastos.map(gasto => (
              <Gasto
              key={gasto.id}
              gasto={gasto}
              SetGastoEditar={SetGastoEditar}
              eliminarGasto={eliminarGasto}
              
              />
          ))}
          
    </div>
  )
}

export default ListadosGasto