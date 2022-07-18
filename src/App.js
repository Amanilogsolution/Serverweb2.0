import './App.css';
import {Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './Components/Login/Login';
import Pagenotfound from './Components/pagenotfound/Pagenotfound'
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Device_Type from './Components/Device_Type/Show_device_type/Device_Type';
import AddDevicetype from './Components/Device_Type/AddDecivetype/AddDevicetype';
import EditDevicetype from './Components/Device_Type/EditDevicetype/EditDevicetype';

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
             <Route exact path="/" restricted={false} component={Login}/>
             <Route path='/Dashboard' component={Dashboard}/>
             <Route path='/Device-type' component={ Device_Type}/>
             <Route path='/AddDevice-type' component={ AddDevicetype}/>
             <Route path='/EditDeviceType' component={ EditDevicetype}/>
             <Route path='/form' component={ Form}/>
             <Route path='*' component={ Pagenotfound}/>
            </Switch>
    </Router>
    
    </div> 
  );
}

export default App;
