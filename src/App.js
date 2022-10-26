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


import TotalDevice from './components/pages/Device/TotalDevice';
import AddDevice from './components/pages/Device/AddDevice';
import EditDevice from './components/pages/Device/EditDevice';

import TotalDeviceComp from './components/pages/DeviceTask&Comp/DeviceComp/TotalDeviceComp';
import AddDeviceComp from './components/pages/DeviceTask&Comp/DeviceComp/AddDeviceComp';
import EditDeviceComp from './components/pages/DeviceTask&Comp/DeviceComp/Editdevicecomp';

import TotalDeviceServiceTask from './components/pages/DeviceTask&Comp/DeviceTask/TotalDeviceTask';
import AddDeviceServiceTask from './components/pages/DeviceTask&Comp/DeviceTask/AddDeviceServiceTask';
import EditDeviceServiceTask from './components/pages/DeviceTask&Comp/DeviceTask/EditDeviceServiceTask';

import  TotalOrganization  from './components/pages/DrizzleMaster/organization/Totalorganization'

import  TotalEmployee  from './components/pages/DrizzleMaster/Employee/TotalEmployee'
import AddEmployee from './components/pages/DrizzleMaster/Employee/AddEmployee'
import EditEmployee from './components/pages/DrizzleMaster/Employee/Editemployee';

import TotalAssetType from './components/pages/DrizzleMaster/AssetTypeMaster/TotalAssetType';
import AddAssetType from './components/pages/DrizzleMaster/AssetTypeMaster/AddAssetType';
import EditAssetType from './components/pages/DrizzleMaster/AssetTypeMaster/EditAssetType';

import TotalAssetStatus from './components/pages/DrizzleMaster/AssetStatusMaster/TotalAssetStatus';
import AddAssetStatus from './components/pages/DrizzleMaster/AssetStatusMaster/AddAssetStatus';
import EditAssetStatus from './components/pages/DrizzleMaster/AssetStatusMaster/EditAssetStatus';

import TotalSoftware from './components/pages/DrizzleMaster/SoftwareMaster/TotalSoftware'
import AddSoftware from './components/pages/DrizzleMaster/SoftwareMaster/AddSoftware';
import EditSoftware from './components/pages/DrizzleMaster/SoftwareMaster/EditSoftware';

import TotalPurchaseType from './components/pages/DrizzleMaster/PurchaseTypeMaster/TotalIPurchaseType';
import AddPurchaseType from './components/pages/DrizzleMaster/PurchaseTypeMaster/AddPurchaseType';
import EditPurchaseType from './components/pages/DrizzleMaster/PurchaseTypeMaster/EditPurchaseType';

import TotalPriority from './components/pages/DrizzleMaster/PriorityMaster/TotalPriority';
import AddPriority from './components/pages/DrizzleMaster/PriorityMaster/AddPriority';
import EditPriority from './components/pages/DrizzleMaster/PriorityMaster/EditPriority';

import TotalBillingFreq from './components/pages/DrizzleMaster/BillingFrequency/Totalbillingfreq';
import AddBillingFreq from './components/pages/DrizzleMaster/BillingFrequency/AddBillingfreq';
import EditBillingFreq from './components/pages/DrizzleMaster/BillingFrequency/EditBillingfreq';

import TotalLocations from './components/pages/DrizzleMaster/Location/TotalLocation';
import AddLocation from './components/pages/DrizzleMaster/Location/AddLocation';
import EditLocation from './components/pages/DrizzleMaster/Location/EditLocation';


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

        <Route path="/TotalDevice" element={<TotalDevice />} />
        <Route path="/AddDevice" element={<AddDevice />} />
        <Route path="/EditDevice" element={<EditDevice />} />


        <Route path="/TotalDeviceComp" element={<TotalDeviceComp />} />
        <Route path="/AddDeviceComp" element={<AddDeviceComp />} />
        <Route path="/EditDeviceComp" element={<EditDeviceComp />} />

        <Route path="/TotalDeviceServiceTask" element={<TotalDeviceServiceTask />} />
        <Route path="/AddDeviceServiceTask" element={<AddDeviceServiceTask />} />
        <Route path="/EditDeviceServiceTask" element={<EditDeviceServiceTask />} />

        <Route path="/TotalOrganization" element={<TotalOrganization />} />



        <Route path="/TotalLocations" element={<TotalLocations />} />
        <Route path="/AddLocation" element={<AddLocation />} />
        <Route path="/EditLocation" element={<EditLocation />} />
        
        <Route path="/TotalEmployee" element={<TotalEmployee />} />
        <Route path="/AddEmployee" element={<AddEmployee />} />
        <Route path="/EditEmployee" element={<EditEmployee />} />

        <Route path="/TotalAssetType" element={<TotalAssetType />} />
        <Route path="/AddAssetType" element={<AddAssetType />} />
        <Route path="/EditAssetType" element={<EditAssetType />} />

        <Route path="/TotalAssetStatus" element={<TotalAssetStatus />} />
        <Route path="/AddAssetStatus" element={<AddAssetStatus />} />
        <Route path="/EditAssetStatus" element={<EditAssetStatus />} />


        <Route path="/TotalSoftware" element={<TotalSoftware />} />
        <Route path="/AddSoftware" element={<AddSoftware />} />
        <Route path="/EditSoftware" element={<EditSoftware />} />

        <Route path="/TotalPurchaseType" element={<TotalPurchaseType />} />
        <Route path="/AddPurchaseType" element={<AddPurchaseType />} />
        <Route path="/EditPurchaseType" element={<EditPurchaseType />} />

        <Route path="/TotalPriority" element={<TotalPriority />} />
        <Route path="/AddPriority" element={<AddPriority />} />
        <Route path="/EditPriority" element={<EditPriority />} />

        <Route path="/TotalBillingFreq" element={<TotalBillingFreq />} />
        <Route path="/AddBillingFreq" element={<AddBillingFreq />} />
        <Route path="/EditBillingFreq" element={<EditBillingFreq />} />


        


        

        
        


      </Routes>

    </BrowserRouter>
  );
};

export default App;