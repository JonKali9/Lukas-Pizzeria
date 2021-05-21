import './App.css';
import Info from './Components/Info';
import Break from './Components/Break';
import Locations from './Components/Locations';
import Order from './Components/Order';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <h1 id='title'>Luka's Pizzeria</h1>
      <Info />
      <Break />
      <Locations />
      <Break />
      <Order />
      <Footer />
    </div>
  );
}

export default App;
