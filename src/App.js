import logo from './logo.svg';
import './App.css';
import Nav from './components/navigation/Nav';

function App() {
  return (
    <div className='container-main h-100'>
      <div className='row'>
          <div className='col-sm-3'>
            <Nav />
          </div>
          <div className='col-sm-9'>
            body Goes here
          </div>
      </div>
    </div>
  );
}

export default App;
