import React from 'react';
import NuevosPresupuesto from './NuevosPresupuesto';
import ControlPresupuesto from './ControlPresupuesto';

const Header = ({
    gastos,
    setGastos,
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto
}) => {
    return ( 
        <header>
            <h1>Planificacion de Gastos</h1>
             
            {isValidPresupuesto ? (
                <ControlPresupuesto
                    gastos={gastos}
                    setGastos={setGastos}
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                
                />
            ) : (
                <NuevosPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
             
                />

            )}
        </header>
    )
}
 
export default Header;