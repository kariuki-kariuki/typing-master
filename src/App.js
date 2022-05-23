import logo from './logo.svg';
import './App.css';
import Nav from './components/navigation/Nav';

function App() {
  return (
    <div className='container-main'>
      <div className='row'>
          <div className='col-sm-2 bg-dark'>
            <Nav />
          </div>
          <div className='col-sm-10'>
            body Goes here
          </div>
      </div>
    </div>
  );
}

export default App;
