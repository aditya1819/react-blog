import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to react blog';

  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Home />
        <p>{ title }</p>
      </div>

     
    </div>
  );
}

export default App;
