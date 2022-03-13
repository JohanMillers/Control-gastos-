import { useState,useEffect } from 'react'
import Header from './componetes/Header'
import Modal from './componetes/Modal';
import ListadosGasto from './componetes/ListadosGasto';
import Filtros from './componetes/Filtros';

import { generarId } from './Helpers';

import IconoNuevoGasto from './img/nuevo-gasto.svg'



function App() {

  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto'))?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false)
  const [gastoEditar, SetGastoEditar] = useState({})
  const [filtror, setFiltror] = useState('')
  const [gastosFiltrado, setGastosFiltrado] = useState([])

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
    
  }, [gastoEditar])
  
  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    if (filtror) {
      const gastosFiltrado = gastos.filter(gasto => gasto.categoria === filtror)
      setGastosFiltrado(gastosFiltrado)
    }
    
  },[filtror])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;

    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true)
    }
    
  },[])


  
  
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
      SetGastoEditar({})
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
        setGastos={setGastos}
          presupuesto = {presupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setPresupuesto = {setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {/* //si la condicion es verdadera se ejecutar el codigo */}
    
      {isValidPresupuesto && (
        <>
          <main>
            <Filtros
              filtror={filtror}
              setFiltror={setFiltror}
            
            
            />

            <ListadosGasto
              gastos={gastos}
              SetGastoEditar={SetGastoEditar}
              eliminarGasto={eliminarGasto}
              filtror={filtror}
              gastosFiltrado={gastosFiltrado}
            
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
        gastoEditar={gastoEditar}
        setModal={setModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
        SetGastoEditar={SetGastoEditar}
                />}
      
    </div>
  )
}

export default App
