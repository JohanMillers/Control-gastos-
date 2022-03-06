import React from 'react'
import CerrarBtn from '../img/cerrar.svg'


const Modal = ({animarModal,setAnimarModal,setModal}) => {

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500
        );
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

          <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
              <legend>Nuevo Gasto</legend>
              <div className="campo">
                  <label htmlFor="nombre">Nombre Gasto</label>
                  <input
                      id="nombre"
                      type="text"
                      placeholder="Añader el Nombre del gasto"
                  />

                  <label htmlFor="cantidad">Cantidad</label>
                  <input
                      id="cantidad"
                      type="number"
                      placeholder="Añader la cantidad del gasto: ej. 300"
                  />

                  <label htmlFor="categoria">Categoria</label>

                  <select
                      id="categoria"
                  >
                      <option value="">-- Seleccione --</option>
                      <option value="ahorro">Ahorro</option>
                      <option value="comida">Comida</option>
                      <option value="casa">Casa</option>
                      <option value="gasto varios">Gastos Varios</option>
                      <option value="ocio">Ocios</option>
                      <option value="salud">Salud</option>
                      <option value="supcriones">Supcriones</option>
                      <option value="transporte">Transporte</option>
                  </select>
              </div>


              <input
                  type="submit"
                  value="Añadir gasto"
              
              />



          </form>
    </div>
  )
}

export default Modal