import { useState } from 'react'
import Header from './componetes/Header'
import Modal from './componetes/Modal';

import { generarId } from './Helpers';

import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  
  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  }

  const guardarGasto = gasto => {
    gasto.id = generarId();
    setGastos([...gastos, gasto])

    setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500
        );
  }
 

  return (
    <div>
        <Header 
          presupuesto = {presupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setPresupuesto = {setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {/* //si la condicion es verdadera se ejecutar el codigo */}
    
      {isValidPresupuesto && (
        <div className="nuevo-gasto">
        <img
          src={IconoNuevoGasto}
            alt='Incono nuevo gasto'
            onClick={handleNuevoGasto}
          
        />

      </div>
        
      )}

      {modal && <Modal
                   animarModal={animarModal}
                   setModal={setModal}
                   setAnimarModal={setAnimarModal}
                   guardarGasto={guardarGasto}
                />}
      
    </div>
  )
}

export default App
