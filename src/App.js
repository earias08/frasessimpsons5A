import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Frase from "./components/Frase";

function App() {
  return (
   <section className='container text-center my-5'>
     <article className='d-flex flex-column align-items-center'>
       <img src={process.env.PUBLIC_URL + 'logo.png'} alt="Logo de los simpsons" className='w-75 mb-5'/>
       <Button variant="warning" className='w-50 mb-5'>Obtener Frase</Button>
     </article>
     <Frase></Frase>
   </section>
  );
}

export default App;
