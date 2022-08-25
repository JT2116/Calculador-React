import './App.css';
import Boton from './components/Boton';
import BotonLimpiar from './components/BotonLimpiar';
import Valores from './components/Valores';
import { useState } from 'react'; 
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input+val);
  };

  const calcularResult = () => {
    if (input) {
      setInput(evaluate(input));      
    } else {
      alert("Por favor ingrese valores para realizar la operacion.");
    }
    
  };

  return (
    <div className="App">
      <div className='contenedor-titulo'>
        <h1 className='titulo'>
          Calculadora
        </h1>
      </div>
      <div className='cont-calculadora'>
        <Valores input={input}/>
        <div className='fila'>
          <Boton manejarClic={addInput}>1</Boton>
          <Boton manejarClic={addInput}>2</Boton>
          <Boton manejarClic={addInput}>3</Boton>
          <Boton manejarClic={addInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={addInput}>4</Boton>
          <Boton manejarClic={addInput}>5</Boton>
          <Boton manejarClic={addInput}>6</Boton>
          <Boton manejarClic={addInput}>-</Boton>          
        </div>
        <div className='fila'>
          <Boton manejarClic={addInput}>7</Boton>
          <Boton manejarClic={addInput}>8</Boton>
          <Boton manejarClic={addInput}>9</Boton>
          <Boton manejarClic={addInput}>*</Boton>           
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResult}>=</Boton>
          <Boton manejarClic={addInput}>0</Boton>
          <Boton manejarClic={addInput}>.</Boton>
          <Boton manejarClic={addInput}>/</Boton> 
        </div>
        <div className='fila'>
          <BotonLimpiar manejarClear={() => setInput('')}>
            Limpiar
          </BotonLimpiar>
        </div>
      </div>      
    </div>
  );
}

export default App;
