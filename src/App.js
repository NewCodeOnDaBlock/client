import './App.css';
import Product from './components/Product';
import Detail from './components/Detail';
import Edit from './components/Edit';


import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
          <Link to="/"></Link>
          <Link to="/results/id"></Link>
          <Link to="/edit/id"></Link>

            <Switch>
              <Route path="/results/:id">
                <Product />
                <Detail />
              </Route>
              <Route path="/edit/:id">
                  <Edit />
              </Route>
              <Route path="/">
                <Product />             
              </Route>


        
            </Switch>

    </BrowserRouter>
  );
}

export default App;
