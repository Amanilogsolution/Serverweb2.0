import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/LandingPage/Login/Login'
import Signup from './components/LandingPage/Resister/Resister'
import LandingPage from './components/LandingPage/LandingPageHome/LandingPage'


import Dashboard from './components/pages/Dashboard/Dashboard.js';

import Totalseries from './components/pages/IperiscopeMaster/Series/Totalseries';
import Addseries from './components/pages/IperiscopeMaster/Series/Addseries';
import Editseries from './components/pages/IperiscopeMaster/Series/Editseries';

import TotalDeviceType from './components/pages/IperiscopeMaster/Device_Type/ShowDevice_Type';
import AddDevicetype from './components/pages/IperiscopeMaster/Device_Type/AddDevicetype';
import EditDevicetype from './components/pages/IperiscopeMaster/Device_Type/EditDevicetype';

import Showdevicegroup from './components/pages/IperiscopeMaster/Devicegroup/Showdevicegroup';
import AddDevicegroup from './components/pages/IperiscopeMaster/Devicegroup/AddDevicegroup';
import EditDevicegroup from './components/pages/IperiscopeMaster/Devicegroup/EditDevicegroup';

import TotalOperatingSystem from './components/pages/IperiscopeMaster/OperatingSystem/TotalOperatingSystem';
import AddOperatingSystem from './components/pages/IperiscopeMaster/OperatingSystem/AddOperatingSystem';
import EditOperatingSystem from './components/pages/IperiscopeMaster/OperatingSystem/EditOperatingSystem';

import ShowDeviceservices from './components/pages/IperiscopeMaster/Device_services/Show_deviceservices';
import AddDeviceservices from './components/pages/IperiscopeMaster/Device_services/Add_deviceservices';
import EditDeviceServices from './components/pages/IperiscopeMaster/Device_services/Edit_deviceservices';

import TotalServicecompliance from './components/pages/IperiscopeMaster/ServiceCompliance/TotalServiceCompliance';
import AddServicecompliance from './components/pages/IperiscopeMaster/ServiceCompliance/AddServiceCompliance';
import EditServiceCompliance from './components/pages/IperiscopeMaster/ServiceCompliance/EditServiceCompliance';

import TotalDeviceTask from './components/pages/IperiscopeMaster/Devicetask/TotalDevicetask';
import AddDevicetask from './components/pages/IperiscopeMaster/Devicetask/AddDevicetask';
import EditDevicetask from './components/pages/IperiscopeMaster/Devicetask/EditDevicetask';

import TotalAgent from './components/pages/IperiscopeMaster/Agent_master/TotalAgentmaster';
import AddAgent from './components/pages/IperiscopeMaster/Agent_master/AddAgent';
import EditAgent from './components/pages/IperiscopeMaster/Agent_master/EditAgent';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/Signin" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/Totalseries" element={<Totalseries />} />
        <Route path="/Addseries" element={<Addseries />} />
        <Route path="/Editseries" element={<Editseries />} />

        <Route path="/TotalDeviceType" element={<TotalDeviceType />} />
        <Route path="/AddDevicetype" element={<AddDevicetype />} />
        <Route path="/EditDevicetype" element={<EditDevicetype />} />

        <Route path="/Showdevicegroup" element={<Showdevicegroup />} />
        <Route path="/AddDevicegroup" element={<AddDevicegroup />} />
        <Route path="/EditDevicegroup" element={<EditDevicegroup />} />

        <Route path="/TotalOperatingSystem" element={<TotalOperatingSystem />} />
        <Route path="/AddOperatingSystem" element={<AddOperatingSystem />} />
        <Route path="/EditOperatingSystem" element={<EditOperatingSystem />} />

        <Route path="/ShowDeviceservices" element={<ShowDeviceservices />} />
        <Route path="/AddDeviceservices" element={<AddDeviceservices />} />
        <Route path="/EditDeviceServices" element={<EditDeviceServices />} />
        
        <Route path="/TotalServicecompliance" element={<TotalServicecompliance />} />
        <Route path="/AddServicecompliance" element={<AddServicecompliance />} />
        <Route path="/EditServiceCompliance" element={<EditServiceCompliance />} />

        <Route path="/TotalDeviceTask" element={<TotalDeviceTask />} />
        <Route path="/AddDevicetask" element={<AddDevicetask />} />
        <Route path="/EditDevicetask" element={<EditDevicetask />} />

        <Route path="/TotalAgent" element={<TotalAgent />} />
        <Route path="/AddAgent" element={<AddAgent />} />
        <Route path="/EditAgent" element={<EditAgent />} />
        
      </Routes>

    </BrowserRouter>
  );
};

export default App;

// njnjknd