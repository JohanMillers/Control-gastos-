import {useState, useEffect} from 'react'

const Filtros = ({filtror,setFiltror}) => {
  return (
    <div className='filtros sombra contenedor'>
      <form>
        <div className="campo">
          <label>Filtrar Gastos</label>
          <select
            value={filtror}
            onChange={e => setFiltror(e.target.value)}
          >
                      <option value="">-- Todas las categorias --</option>
                      <option value="ahorro">Ahorro</option>
                      <option value="comida">Comida</option>
                      <option value="casa">Casa</option>
                      <option value="gastos">Gastos Varios</option>
                      <option value="ocio">Ocios</option>
                      <option value="salud">Salud</option>
                      <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

      </form>

    </div>
  )
}

export default Filtros