import axios from 'axios';

export const UserLogin = async (userid, password) => {
   
    const url = `http://192.168.146.136:8003/api/login`
    return axios.post(url, { userid, password }).then(response => response.data).catch(error => console.log(error));
}

export const TotalDevicetype = async () => {
    const url = `http://192.168.146.136:8003/api/totaldevicetype`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const AddDevicetypeapi = async (devicetypeid,device_type,remark,username) => {
    console.log(devicetypeid,device_type,remark,username);
    const url = `http://192.168.146.136:8003/api/adddevicetype`
    return axios.post(url,{devicetypeid,device_type,remark,username}).then(response => response.data).catch(error => console.log(error));
}
export const Getdevicetype= async(sno)=>{
    console.log(sno)
    const url=`http://192.168.146.136:8003/api/getdevicetype`
    return axios.post(url,{sno}).then(response=>response.data).catch(error=>console.log(error));
}
export const TotalDevicegroup = async () => {
    const url = `http://192.168.146.136:8003/api/totaldevicegroup`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}
export const Adddevicegroup = async (devicegroupid,device_group,remark,username) => {
    console.log(devicegroupid,device_group,remark,username);
    const url = `http://192.168.146.136:8003/api/adddevicegroup`
    return axios.post(url,{devicegroupid,device_group,remark,username}).then(response => response.data).catch(error => console.log(error));
}
export const Getdevicegroup= async(sno)=>{
    console.log(sno)
    const url=`http://192.168.146.136:8003/api/getdevicegroup`
    return axios.post(url,{sno}).then(response=>response.data).catch(error=>console.log(error));
}

export const Updatedevicegroup = async (sno,devicegroupid,device_group,remark,username) => {
    console.log(sno,devicegroupid,device_group,remark,username);
    const url = `http://192.168.146.136:8003/api/updatedevicegroup`
    return axios.post(url,{sno,devicegroupid,device_group,remark,username}).then(response => response.data).catch(error => console.log(error));
}

export const DeviceGroupStatus = async (status,sno) => {
    console.log(status,sno);
    const url = `http://192.168.146.136:8003/api/updategroupstatus`
    return axios.post(url,{status,sno}).then(response => response.data).catch(error => console.log(error));
}

export const TotalOperatingSystem = async () => {
    const url = `http://192.168.146.136:8003/api/totaloperatingsystem`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const AddOperatingsystem = async (operatingsystemid,operatingsystem,remark,username) => {
    console.log(operatingsystemid,operatingsystem,remark,username);
    const url = `http://192.168.146.136:8003/api/addoperatingsystemmaster`
    return axios.post(url,{operatingsystemid,operatingsystem,remark,username}).then(response => response.data).catch(error => console.log(error));
}

export const GetOperatingSystem= async(sno)=>{
    console.log(sno)
    const url=`http://192.168.146.136:8003/api/getoperatingsystem`
    return axios.post(url,{sno}).then(response=>response.data).catch(error=>console.log(error));
}

export const EditOperatingsystem = async (sno,operatingsystemid,operatingsystem,remark,username) => {
    console.log(sno,operatingsystemid,operatingsystem,remark,username);
    const url = `http://192.168.146.136:8003/api/updateoperatingsystem`
    return axios.post(url,{sno,operatingsystemid,operatingsystem,remark,username}).then(response => response.data).catch(error => console.log(error));
}

export const OperatingSystemStatus = async (status,sno) => {
    console.log(status,sno);
    const url = `http://192.168.146.136:8003/api/updateoperatingstatusstatus`
    return axios.post(url,{status,sno}).then(response => response.data).catch(error => console.log(error));
}

export const ActiveDeviceService = async () => {
    const url = `http://192.168.146.136:8003/api/activedeviceservice`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const TotalServiceCompliance = async () => {
    const url = `http://192.168.146.136:8003/api/totalservicecompliance`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const Addservicecompliance = async (servicecomplianceid,device_service,services_compliance,remark,username) => {
    console.log(servicecomplianceid,device_service,services_compliance,remark,username);
    const url = `http://192.168.146.136:8003/api/addservicecompliance`
    return axios.post(url,{servicecomplianceid,device_service,services_compliance,remark,username}).then(response => response.data).catch(error => console.log(error));
}

export const GetServiceCompliance= async(sno)=>{
    console.log(sno)
    const url=`http://192.168.146.136:8003/api/getservicecompliance`
    return axios.post(url,{sno}).then(response=>response.data).catch(error=>console.log(error));
}

export const Updateservicecompliance = async (sno,servicecomplianceid,device_service,services_compliance,remark,username) => {
    console.log(sno,servicecomplianceid,device_service,services_compliance,remark,username);
    const url = `http://192.168.146.136:8003/api/updateservicecompliance`
    return axios.post(url,{sno,servicecomplianceid,device_service,services_compliance,remark,username}).then(response => response.data).catch(error => console.log(error));
}

export const ServiceComplianceStatus = async (status,sno) => {
    console.log(status,sno);
    const url = `http://192.168.146.136:8003/api/updateservicecompliancestatus`
    return axios.post(url,{status,sno}).then(response => response.data).catch(error => console.log(error));
}














