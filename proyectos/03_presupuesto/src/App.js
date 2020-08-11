import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  // Definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  // UseEffect que actualiza el restante
  useEffect(() => {
    if (crearGasto) {
      // Agrega el nuevo presupuesto
      guardarGastos(
        [...gastos, gasto]
      );
      // Restar gasto del presupueto actual
      const presupuetoRestante = restante - gasto.cantidad;
      guardarRestante(presupuetoRestante);
      // Resetear control
      guardarCrearGasto(false);
      console.log('Gasto: ', gasto);
    }

  }); // Saque el arreglo de dependencias porque solo funcionaba con 'gasto0 pero marcaba un warning, si agregaba todos los demas andaba mal la app

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>

        <div className="contenido-principal contenido">

          {mostrarPregunta ?
            (
              <Pregunta
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
              />
            ) :
            <div className="row">
              <div className="one-half column">
                <Formulario            
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                />
              </div>

              <div className="one-half column">
                <Listado
                  gastos={gastos}
                />

                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          }

        </div>

      </header>
    </div>
  );
}

export default App;
