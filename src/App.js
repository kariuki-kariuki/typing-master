import './App.css';
import Nav from './components/navigation/Nav';
// import Home from './components/home/Home';
import Test from './components/test/Test';

function App() {
  return (
    <div className='container-main h-100'>
      <div className='row'>
          <div className='col-sm-3'>
            <Nav />
          </div>
          <div className='col-sm-9'>
            {/* <Home /> */}
            <Test />
          </div>
      </div>
    </div>
  );
}

export default App;
