import './App.css';
import Header from './Header';
import Bienvenido from "./Bienvenido";
import Conocenos from "./Conocenos";
import Galeria from "./Galeria";
import Compañia from "./Compañia";
import Contacto from "./Contacto";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header/>
      
      <Router>
        <Switch>
          <Route path="/Conocenos">
            <Conocenos/>
          </Route>

          <Route path="/Galeria">
            <Galeria/>
          </Route>

          <Route path="/Compañia">
            <Compañia/>
          </Route>

          <Route path="/Contacto">
            <Contacto/>
          </Route>
          
          <Route path="/">
            <Bienvenido/>
          </Route>
        </Switch>
      </Router>
      


      
      


    </div>
  );
}

export default App;
