//npmimport logo from './logo.svg';
//import hanuman from './Hanuman.jpg';
import './App.css';
import { Greet } from './Components/Greet'
// import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import './appStyles.css'
import Styles from "./app.module.css"

function App() {
  return (
    <div className="App">
          <h1 className='error'>Error text</h1>
          <h1 className={Styles.success}>Success text</h1>
      <Hello/>
    </div>
  );
}

export default App;
