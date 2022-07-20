import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './Components/HOC/PrivateRoute'
import Login from './Components/Login/Login';
import Pagenotfound from './Components/pagenotfound/Pagenotfound'
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';


import ShowDeviceservices from './Components/Master/Device_services/Show_deviceservices';
import AddDeviceservices from './Components/Master/Device_services/Add_deviceservices';
import EditDeviceservices from './Components/Master/Device_services/Edit_deviceservices';
import ShowDevicetask from './Components/Master/Devicetask/ShowDevicetask';
import AddDevicetask from './Components/Master/Devicetask/AddDevicetask';
import EditDevicetask from './Components/Master/Devicetask/EditDevicetask';
import ShowAgent from './Components/Master/Agent_master/Show_agent';
import AddAgent from './Components/Master/Agent_master/AddAgent';
import EditAgent from './Components/Master/Agent_master/EditAgent';


import Device_Type from './Components/Master/Device_Type/Show_device_type/Device_Type';
import AddDevicetype from './Components/Master/Device_Type/AddDecivetype/AddDevicetype';
import EditDevicetype from './Components/Master/Device_Type/EditDevicetype/EditDevicetype';

import Showdevicegroup from './Components/Master/Devicegroup/ShowDevicegroup/Showdevicegroup'
import AddDevicegroup from './Components/Master/Devicegroup/AddDeviceGroup/Adddevicegroup'
import EditDevicegroup from './Components/Master/Devicegroup/EditDeviceGroup/Editdevicegroup'

import Showoperatingsystem from './Components/Master/OperatingSystem/ShowOperatingSystem/ShowOperatingSystem';
import AddOperatingSystem from './Components/Master/OperatingSystem/AddOperatingSystem/AddOperatingSystem';
import EditOperatingSystem from './Components/Master/OperatingSystem/EditOperatingSystem/EditOperatingSystem';

import Showservicecompliance from './Components/Master/ServiceCompliance/ShowServiceCompliance/ShowServiceCompliance';
import AddServiceCompliance from './Components/Master/ServiceCompliance/AddServiceCompliance/AddServiceCompliance';
import EditServiceCompliance from './Components/Master/ServiceCompliance/EditServiceCompliance/EditServiceCompliance';

import AddDevice from './Components/Device/AddDevice'
import ShowDevice from './Components/Device/ShowDevice'
import EditDevice from './Components/Device/EditDevice'

import AddDeviceTaskComp from './Components/DeviceTaskComp/Devicetask&comp'
import UpdateDeviceTaskComp from './Components/DeviceTaskComp/UpdateDevicetask&comp'
import EditDeviceTaskComp from './Components/DeviceTaskComp/EditDevicetask&comp'

import Totalseries from './Components/Master/Seies/Totalseries'
import Addseries from './Components/Master/Seies/Addseries'
import Editseries from './Components/Master/Seies/Editseries'




function App() {
  return (
    <div className="App">


      <Router>
        <Switch>
          <Route exact path="/" restricted={false} component={Login} />
          <PrivateRoute path='/Dashboard' component={Dashboard} />
          <PrivateRoute path='/ShowDeviceservices' component={ShowDeviceservices} />
          <PrivateRoute path='/AddDeviceservices' component={AddDeviceservices} />
          <PrivateRoute path='/EditDeviceservices' component={EditDeviceservices} />
          <PrivateRoute path='/ShowDevicetask' component={ShowDevicetask} />
          <PrivateRoute path='/AddDevicetask' component={AddDevicetask} />
          <PrivateRoute path='/EditDevicetask' component={EditDevicetask} />
          <PrivateRoute path='/ShowAgent' component={ShowAgent} />
          <PrivateRoute path='/AddAgent' component={AddAgent} />
          <PrivateRoute path='/EditAgent' component={EditAgent} />
          <PrivateRoute path='/Device-type' component={Device_Type} />
          <PrivateRoute path='/AddDevice-type' component={AddDevicetype} />
          <PrivateRoute path='/EditDeviceType' component={EditDevicetype} />
          <PrivateRoute path='/Showdevicegroup' component={Showdevicegroup} />
          <PrivateRoute path='/adddevicegroup' component={AddDevicegroup} />
          <PrivateRoute path='/editdevicegroup' component={EditDevicegroup} />
          <PrivateRoute path='/showoperatingsystem' component={Showoperatingsystem} />
          <PrivateRoute path='/addoperatingsystem' component={AddOperatingSystem} />
          <PrivateRoute path='/editoperatingsystem' component={EditOperatingSystem} />
          <PrivateRoute path='/showservicecompliance' component={Showservicecompliance} />
          <PrivateRoute path='/AddServiceCompliance' component={AddServiceCompliance} />
          <PrivateRoute path='/EditServiceCompliance' component={EditServiceCompliance} />
          <PrivateRoute path='/AddDevice' component={AddDevice} />
          <PrivateRoute path='/ShowDevice' component={ShowDevice} />
          <PrivateRoute path='/EditDevice' component={EditDevice} />
          
          
          <PrivateRoute path='/DeviceTask&Compliances' component={AddDeviceTaskComp} />
          <PrivateRoute path='/ UpdateDeviceTask&Compliances' component={ UpdateDeviceTaskComp} />
         

          <PrivateRoute path='/Totalseries' component={Totalseries} />
          <PrivateRoute path='/Addseries' component={Addseries} />
          <PrivateRoute path='/Editseries' component={Editseries} />
          

          
          

          <PrivateRoute path='/form' component={Form} />
          <Route path='*' component={Pagenotfound} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
