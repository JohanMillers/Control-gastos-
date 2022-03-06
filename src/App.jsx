import { useState } from 'react'
 import Header from './componetes/Header'


function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto ] = useState(false);
 

  return (
    <div>
        <Header 
          presupuesto = {presupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setPresupuesto = {setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        
        />
    </div>
  )
}

export default App
