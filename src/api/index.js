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
    // console.log(sno)
    const url=`http://192.168.146.136:8003/api/getdevicetype`
    return axios.post(url,{sno}).then(response=>response.data).catch(error=>console.log(error));
}

export const ActiveDevicetype = async () => {
    const url = `http://192.168.146.136:8003/api/activedevicetype`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
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

export const ActiveDevicegroup = async () => {
    const url = `http://192.168.146.136:8003/api/activedevicegroup`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
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
export const ActiveOperatingSystem = async () => {
    const url = `http://192.168.146.136:8003/api/activeoperatingsystem`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
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

export const ActiveServiceCompliance = async () => {
    const url = `http://192.168.146.136:8003/api/activeservicecompliance`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}



export const Statusdevicetype= async(status,sno)=>{
    // console.log(status,sno)
    const url=`http://192.168.146.136:8003/api/updatetypestatus`
    return axios.post(url,{status,sno}).then(response=>response.data).catch(error=>console.log(error));
}
export const Updatedevicetype= async(sno,devicetypeid,device_type,remark,username)=>{
    console.log(sno,devicetypeid,device_type,remark,username)
    const url=`http://192.168.146.136:8003/api/updatedevicetype`
    return axios.post(url,{sno,devicetypeid,device_type,remark,username}).then(response=>response.data).catch(error=>console.log(error));
}


export const Totaldeviceservices= async()=>{
    const url=`http://192.168.146.136:8003/api/totaldeviceservices`
    return axios.get(url).then(response=>response.data).catch(error=>console.log(error));
}
export const Adddeviceservice= async(deviceserviceid,device_service,remark,username)=>{
    const url=`http://192.168.146.136:8003/api/adddeviceservice`
    return axios.post(url,{deviceserviceid,device_service,remark,username}).then(response=>response.data).catch(error=>console.log(error));
}

export const Updatestatusdeviceservices= async(status,sno)=>{
    console.log(status,sno)
    const url=`http://192.168.146.136:8003/api/updatedeviceservicestatus`
    return axios.post(url,{status,sno}).then(response=>response.data).catch(error=>console.log(error));
}

export const Getdeviceservicesdata= async(sno)=>{
    const url=`http://192.168.146.136:8003/api/getdeviceservice`
    return axios.post(url,{sno}).then(response=>response.data).catch(error=>console.log(error));
}

export const Updatedeviceservice= async(sno,deviceserviceid,device_service,remark,username)=>{
    const url=`http://192.168.146.136:8003/api/updatedeviceservice`
    return axios.post(url,{sno,deviceserviceid,device_service,remark,username}).then(response=>response.data).catch(error=>console.log(error));
}


export const Totalagent= async()=>{
    const url=`http://192.168.146.136:8003/api/totalagent`
    return axios.get(url).then(response=>response.data).catch(error=>console.log(error));
}


export const Updateagentstatus= async(status,sno)=>{
    console.log(status,sno)
    const url=`http://192.168.146.136:8003/api/updateagentstatus`
    return axios.post(url,{status,sno}).then(response=>response.data).catch(error=>console.log(error));
}


export const Addagent= async(agentid,agent_name,agent_email,agent_phone,remark,username)=>{
    const url=`http://192.168.146.136:8003/api/addagent`
    return axios.post(url,{agentid,agent_name,agent_email,agent_phone,remark,username}).then(response=>response.data).catch(error=>console.log(error));
}

export const Getagent= async(sno)=>{
    console.log(sno)
    const url=`http://192.168.146.136:8003/api/getagent`
    return axios.post(url,{sno}).then(response=>response.data).catch(error=>console.log(error));
}

export const  updateagent= async(sno,agentid,agent_name,agent_email,agent_phone,remark,username)=>{
    const url=`http://192.168.146.136:8003/api/updateagent`
    return axios.post(url,{sno,agentid,agent_name,agent_email,agent_phone,remark,username}).then(response=>response.data).catch(error=>console.log(error));
}

export const ActiveAgent = async () => {
    const url = `http://192.168.146.136:8003/api/activeagent`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const Totaldevicetask= async()=>{
    const url=`http://192.168.146.136:8003/api/totaldevicetask`
    return axios.get(url).then(response=>response.data).catch(error=>console.log(error));
}

export const Updatedevicetaskstatus= async(status,sno)=>{
    const url=`http://192.168.146.136:8003/api/updatedevicetaskstatus`
    return axios.post(url,{status,sno}).then(response=>response.data).catch(error=>console.log(error));
}

export const Getdevicetask= async(sno)=>{
    console.log(sno)
    const url=`http://192.168.146.136:8003/api/getdevicetask`
    return axios.post(url,{sno}).then(response=>response.data).catch(error=>console.log(error));
}

export const Updatedevicetask= async(sno,devicetaskid,device_tasks,device_tasks_frequency,remark,username)=>{
    console.log(sno,devicetaskid,device_tasks,device_tasks_frequency,remark,username)
    const url=`http://192.168.146.136:8003/api/updatedevicetask`
    return axios.post(url,{sno,devicetaskid,device_tasks,device_tasks_frequency,remark,username}).then(response=>response.data).catch(error=>console.log(error));
}

export const Activedevicetask= async()=>{
    const url=`http://192.168.146.136:8003/api/activedevicetask`
    return axios.get(url).then(response=>response.data).catch(error=>console.log(error));
}

export const Adddevicetask= async(devicetaskid,device_tasks,device_tasks_frequency,remark,username)=>{
    const url=`http://192.168.146.136:8003/api/adddevicetask`
    return axios.post(url,{devicetaskid,device_tasks,device_tasks_frequency,remark,username}).then(response=>response.data).catch(error=>console.log(error));
}

export const Totalseriesapi= async()=>{
    const url=`http://192.168.146.136:8003/api/totalseries`
    return axios.get(url).then(response=>response.data).catch(error=>console.log(error));
}

export const Updateseriesstatus= async(status,sno)=>{
    console.log(status,sno)
    const url=`http://192.168.146.136:8003/api/updatesseriestatus`
    return axios.post(url,{status,sno}).then(response=>response.data).catch(error=>console.log(error));
}


export const Addseriesapi= async(type_id,services_id,task_id,agent_id,group_id,os_id,comp_id,device_id,taskandcomp_id,username)=>{
    const url=`http://192.168.146.136:8003/api/adddevicetask`
    return axios.post(url,{type_id,services_id,task_id,agent_id,group_id,os_id,comp_id,device_id,taskandcomp_id,username}).then(response=>response.data).catch(error=>console.log(error));
}


export const Getseries= async(sno)=>{
    const url=`http://192.168.146.136:8003/api/getseries`
    return axios.post(url,{sno}).then(response=>response.data).catch(error=>console.log(error));
}

export const Updateseries= async(sno,type_id,services_id,task_id,agent_id,group_id,os_id,comp_id,device_id,taskandcomp_id,username)=>{
    console.log(sno,type_id,services_id,task_id,agent_id,group_id,os_id,comp_id,device_id,taskandcomp_id,username)
    const url=`http://192.168.146.136:8003/api/updateseries`
    return axios.post(url,{sno,type_id,services_id,task_id,agent_id,group_id,os_id,comp_id,device_id,taskandcomp_id,username}).then(response=>response.data).catch(error=>console.log(error));
}
export const Adddevice= async(device_id,device_name,device_type,device_group,device_ip_address,device_host_master,device_os,services,device_creation_date,device_reg_date,agent,remark,username)=>{
    console.log(device_id,device_name,device_type,device_group,device_ip_address,device_host_master,device_os,services,device_creation_date,device_reg_date,agent,remark,username)
    const url=`http://192.168.146.136:8003/api/adddevice`
    return axios.post(url,{device_id,device_name,device_type,device_group,device_ip_address,device_host_master,device_os,services,device_creation_date,device_reg_date,agent,remark,username}).then(response=>response.data).catch(error=>console.log(error));
}
export const Activedevice = async () => {
    const url = `http://192.168.146.136:8003/api/activedevice`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const ActiveSeries = async () => {
    const url = `http://192.168.146.136:8003/api/activeseriesmaster`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const TotalCount = async(table)=>{
    console.log(table)
    const url=`http://192.168.146.136:8003/api/totalcount`
    return axios.post(url,{table}).then(response=>response.data).catch(error=>console.log(error));
}


export const  Getdevicetaskcompliancebyname= async(name)=>{
   console.log(name)
    const url=`http://192.168.146.136:8003/api/getdevicetaskcompliancebyname`
    return axios.post(url,{name}).then(response=>response.data).catch(error=>console.log(error));
}
 
export const Adddevicetaskcompliance= async(devicename,services,add_compliance,add_tasks,remark,username)=>{
    const url=`http://192.168.146.136:8003/api/adddeviceTaskcomp`
    return axios.post(url,{devicename,services,add_compliance,add_tasks,remark,username}).then(response=>response.data).catch(error=>console.log(error));
}

export const  getdevicetaskcomp= async(sno)=>{
    const url=`http://192.168.146.136:8003/api/getdevicetaskcomp`
    return axios.post(url,{sno}).then(response=>response.data).catch(error=>console.log(error));
}

export const  Updatedevicetaskcomp= async(sno,devicename,services,add_compliance,add_tasks,remark,username)=>{
    console.log(sno,devicename,services,add_compliance,add_tasks,remark,username)
    const url=`http://192.168.146.136:8003/api/updatedevicetaskcomp`
    return axios.post(url,{sno,devicename,services,add_compliance,add_tasks,remark,username}).then(response=>response.data).catch(error=>console.log(error));
}