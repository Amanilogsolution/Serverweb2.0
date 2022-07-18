import './App.css';
import {Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './Components/Login/Login';
import Pagenotfound from './Components/pagenotfound/Pagenotfound'
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

import Device_Type from './Components/Master/Device_Type/Show_device_type/Device_Type';
import AddDevicetype from './Components/Master/Device_Type/AddDecivetype/AddDevicetype';
import EditDevicetype from './Components/Master/Device_Type/EditDevicetype/EditDevicetype';

import Showdevicegroup from './Components/Master/Devicegroup/ShowDevicegroup/Showdevicegroup'
import AddDevicegroup from './Components/Master/Devicegroup/AddDeviceGroup/Adddevicegroup'
import EditDevicegroup from './Components/Master/Devicegroup/EditDeviceGroup/Editdevicegroup'

import Showoperatingsystem from './Components/Master/OperatingSystem/ShowOperatingSystem/ShowOperatingSystem';
import  AddOperatingSystem  from './Components/Master/OperatingSystem/AddOperatingSystem/AddOperatingSystem';
import EditOperatingSystem from './Components/Master/OperatingSystem/EditOperatingSystem/EditOperatingSystem';

import Showservicecompliance from './Components/Master/ServiceCompliance/ShowServiceCompliance/ShowServiceCompliance';
import AddServiceCompliance from './Components/Master/ServiceCompliance/AddServiceCompliance/AddServiceCompliance';
import EditServiceCompliance from './Components/Master/ServiceCompliance/EditServiceCompliance/EditServiceCompliance';

import AddDevice from './Components/Device/AddDevice'

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
             <Route path='/Showdevicegroup' component={Showdevicegroup}/>
             <Route path='/adddevicegroup' component={AddDevicegroup}/>
             <Route path='/editdevicegroup' component={EditDevicegroup}/>
             <Route path='/showoperatingsystem' component={Showoperatingsystem}/>
             <Route path='/addoperatingsystem' component={AddOperatingSystem}/>
             <Route path='/editoperatingsystem' component={EditOperatingSystem}/>
             <Route path='/showservicecompliance' component={Showservicecompliance}/>
             <Route path='/AddServiceCompliance' component={AddServiceCompliance}/>
             <Route path='/EditServiceCompliance' component={EditServiceCompliance}/>
             <Route path='/AddDevice' component={AddDevice}/>

             <Route path='/form' component={ Form}/>
             <Route path='*' component={ Pagenotfound}/>
            </Switch>
    </Router>
    
    </div> 
  );
}

export default App;
