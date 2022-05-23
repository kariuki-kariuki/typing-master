import './App.css';
import Nav from './components/navigation/Nav';
import Home from './components/home/Home';

function App() {
  return (
    <div className='container-main h-100'>
      <div className='row'>
          <div className='col-sm-3'>
            <Nav />
          </div>
          <div className='col-sm-9'>
            <Home />
          </div>
      </div>
    </div>
  );
}

export default App;
