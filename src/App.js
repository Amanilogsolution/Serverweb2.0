import './App.css';
import {Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './Components/Login/Login';
import Pagenotfound from './Components/pagenotfound/Pagenotfound'
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Device_Type from './Components/Device_Type/Show_device_type/Device_Type';
import AddDevicetype from './Components/Device_Type/AddDecivetype/AddDevicetype';
import EditDevicetype from './Components/Device_Type/EditDevicetype/EditDevicetype';
import ShowDeviceservices from './Components/Device_services/Show_deviceservices';
import AddDeviceservices from './Components/Device_services/Add_deviceservices';
import EditDeviceservices from './Components/Device_services/Edit_deviceservices';

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
             <Route path='/ShowDeviceservices' component={ShowDeviceservices}/>
             <Route path='/AddDeviceservices' component={AddDeviceservices}/>
             <Route path='/EditDeviceservices' component={EditDeviceservices}/>
             <Route path='/form' component={ Form}/>
             <Route path='*' component={ Pagenotfound}/>
            </Switch>
    </Router>
    
    </div> 
  );
}

export default App;
