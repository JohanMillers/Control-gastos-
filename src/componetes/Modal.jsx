import { useState, useEffect } from 'react'
import Mensaje from './Mensaje';

import CerrarBtn from '../img/cerrar.svg'


const Modal = ({
    animarModal,
    setAnimarModal,
    setModal,
    guardarGasto,
    gastoEditar,
    SetGastoEditar
}) => {

    const [mensaje, setMensaje] = useState('');
    
    const [nombre, setNombre] = useState('');
    const [cantidad, SetCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [fecha, setfecha] = useState('')
    const [id, setId] = useState('')


    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            SetCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setfecha(gastoEditar.fecha)
          }
          
        
    },[])

    const ocultarModal = () => {
        setAnimarModal(false)
        SetGastoEditar({})
        setTimeout(() => {
            setModal(false)
        }, 500
        );
    }

    const handleSubmit = e => {
        e.preventDefault();

        //validando que todas la variable no tenga un script vacio

        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('');
            }, 2500)
            return
        }

        guardarGasto({nombre, cantidad, categoria, id, fecha})

    }


  return (
      <div className='modal'>
          <div className="cerrar-modal">
              <img
                  src={CerrarBtn}
                  alt="cerrar modal"
                  onClick={ocultarModal}
              />
          </div>

          <form
              onSubmit={handleSubmit}
              className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
              <legend>{ gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
              {mensaje && <Mensaje tipo="error">{ mensaje}</Mensaje>}
              <div className="campo">
                  <label htmlFor="nombre">Nombre Gasto</label>
                  <input
                      id="nombre"
                      type="text"
                      placeholder="A??ader el Nombre del gasto"
                      value={nombre}
                      onChange={e => setNombre(e.target.value)}
                  />

                  <label htmlFor="cantidad">Cantidad</label>
                  <input
                      id="cantidad"
                      type="number"
                      placeholder="A??ader la cantidad del gasto: ej. 300"
                      value={cantidad}
                      onChange={e => SetCantidad(Number(e.target.value))}
                  />

                  <label htmlFor="categoria">Categoria</label>

                  <select
                      id="categoria"
                      value={categoria}
                      onChange={e => setCategoria(e.target.value)}
                  >
                      <option value="">-- Seleccione --</option>
                      <option value="ahorro">Ahorro</option>
                      <option value="comida">Comida</option>
                      <option value="casa">Casa</option>
                      <option value="gastos">Gastos Varios</option>
                      <option value="ocio">Ocios</option>
                      <option value="salud">Salud</option>
                      <option value="suscripciones">Suscripciones</option>
                  </select>
              </div>


              <input
                  type="submit"
                  value={ gastoEditar.nombre ? 'Guardar Cambios' : 'A??adir Gasto'}

              
              />



          </form>
    </div>
  )
}

export default Modal