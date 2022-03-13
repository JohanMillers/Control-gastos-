import React from 'react'
import Gasto from './Gasto'

const ListadosGasto = ({
  gastos,
  filtror,
  SetGastoEditar,
  eliminarGasto,
  gastosFiltrado
}) => {
  return (
      <div className='listado-gastos contenedor'>
         
      
          {
        filtror ? (
          <>
            <h2>{gastosFiltrado.length ? 'Gastos' : 'No Hay Gastos en esta categoria'}</h2>
            {gastosFiltrado.map(gasto => (
              <Gasto
                key={gasto.id}
                gasto={gasto}
                SetGastoEditar={SetGastoEditar}
                eliminarGasto={eliminarGasto}
                
              />
            ))}
          </>
              
        ) : (
            <>
               <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos Aún'}</h2>
              {gastos.map(gasto => (
                  <Gasto
                  key={gasto.id}
                  gasto={gasto}
                  SetGastoEditar={SetGastoEditar}
                  eliminarGasto={eliminarGasto}
                  
                  />
              ))}
            </>
                )
          }
          
    </div>
  )
}

export default ListadosGasto