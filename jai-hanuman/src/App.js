//npmimport logo from './logo.svg';
import hanuman from './Hanuman.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Jai Sita Ram (_/\_)
        </p>
        <img src={hanuman}  alt="logo" />
        <p>        
          Jai Hanuman (_/\_)
        </p>
        <p>        
          Tvasmin Karya Niryoge, Pramanam Hari Sathamma <br/>
          Hanuman Yathna maasthaya, Dukha khshya Karo bhava!!!<br/>
          <br/>
          Tvasmin Karya Niryoge, Pramanam Hari Sathamma<br/>
          Raghavasthavatsamarambath, Mayi yathna paro bhavet!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
