import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addemployee from './components/Addemployee';
import Searchemployee from './components/Searchemployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewemployee from './components/Viewemployee';
function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
<Route path="/" exact element={<Addemployee/>}/>
<Route path="/search" exact element={<Searchemployee/>}/>
<Route path="/view" exact element={<Viewemployee/>}/>
</Routes>

</BrowserRouter>
    </div>
  );
}

export default App;
