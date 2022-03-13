import { useState,useEffect } from 'react'
import Header from './componetes/Header'
import Modal from './componetes/Modal';
import ListadosGasto from './componetes/ListadosGasto';

import { generarId } from './Helpers';

import IconoNuevoGasto from './img/nuevo-gasto.svg'



function App() {

  const [gastos, setGastos] = useState([]);

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false)
  const [gastoEditar, SetGastoEditar] = useState({})

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)
  
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
    
  },[gastoEditar])


  
  
  const handleNuevoGasto = () => {
    setModal(true)
    SetGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  }

  const guardarGasto = gasto => {

    if (gasto.id) {
      //Actualizar
      const gastoActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastoActualizados)
    } else {
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
    }

    setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
  }

  const eliminarGasto = id => {
    const gastoActualizado = gastos.filter( gasto => gasto.id !== id)
    setGastos(gastoActualizado)
  }
 

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
          gastos={gastos}
          presupuesto = {presupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setPresupuesto = {setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {/* //si la condicion es verdadera se ejecutar el codigo */}
    
      {isValidPresupuesto && (
        <>
          <main>
            <ListadosGasto
              gastos={gastos}
              SetGastoEditar={SetGastoEditar}
              eliminarGasto={eliminarGasto}
            
            />
          </main>
        <div className="nuevo-gasto">
        <img
          src={IconoNuevoGasto}
            alt='Incono nuevo gasto'
            onClick={handleNuevoGasto}
        />

          </div>
          </>
        
      )}

      {modal && <Modal
        animarModal={animarModal}
        setModal={setModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
        gastoEditar={gastoEditar}
                />}
      
    </div>
  )
}

export default App
