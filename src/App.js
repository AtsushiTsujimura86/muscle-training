import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Schedule from './components/Schedule';
import Register from './components/Register';
import Log from './components/Log';

function App() {
  return (
    <div className="App container">
      <Header />
      <Schedule />
      <div className='row'>
        <div className='col-6'>
          <Register />
        </div>
        <div className='col-6'>``
          <Log />
        </div>
      </div>
    </div>
  );
}

export default App;
