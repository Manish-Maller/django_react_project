import logo from './logo.svg';
import './App.css';
import ShowProducts from './components/ShowProducts';
import AddProducts from './components/AddProducts';
import UpdateProducts from './components/UpdateProducts';
import DetailedProducts from './components/DetailedProduct';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import NavbarMenu from './components/NavbarMenu';


function App() {
  return (
    <div className="App">
      <Router>
        <NavbarMenu/>
        <Routes>
          <Route exact path="/" Component={ShowProducts}/>
          <Route exact path="/add" Component={AddProducts}/>
          {/* <Route exact path="/update" Component={UpdateProducts}/>
          <Route exact path="/" Component={ShowProducts}/> */}
          <Route exact path="/:id/" Component={DetailedProducts}/>
          <Route exact path="/update/:id/" Component={UpdateProducts}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
