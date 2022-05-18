import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addemployee from './components/Addemployee';
import Searchemployee from './components/Searchemployee';
function App() {
  return (
    <div>

<Addemployee/>
<Searchemployee/>

    </div>
  );
}

export default App;
