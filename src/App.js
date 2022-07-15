import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import Pagenotfound from './Components/pagenotfound/Pagenotfound'

import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Device_Type from './Components/Device_Type/Show_device_type/Device_Type';
import AddDevicetype from './Components/Device_Type/AddDecivetype/AddDevicetype';

function App() {
  return (
    <div className="App">
    <Router>
            <Routes>
              <Route path='/' element={ <Login/>}/>
              <Route path='*' element={ <Pagenotfound/>}/>
              <Route path='/Dashboard' element={ <Dashboard/>}/>
              <Route path='/Device-type' element={ <Device_Type/>}/>
              <Route path='/AddDevice-type' element={ <AddDevicetype/>}/>
              
              <Route path='/form' element={ <Form/>}/>
            </Routes>
    </Router>
    
    </div> 
  );
}

export default App;
