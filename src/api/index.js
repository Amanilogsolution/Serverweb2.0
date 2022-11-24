import axios from 'axios';

export const UserLogin = async (userid, password) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/login`
    return axios.post(url, { userid, password }).then(response => response.data).catch(error => console.log(error));
}

export const changePassword = async (user_id, password,CurrentPassword) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/ChangePassword`
    return axios.post(url, { user_id, password,CurrentPassword }).then(response => response.data).catch(error => console.log(error));
}

export const TotalCountry = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalcountry`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}
export const TotalState = async (country_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalstate`
    return axios.post(url,{country_id}).then(response => response.data).catch(error => console.log(error));
}
export const TotalCity = async (state_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalcity`
    return axios.post(url,{state_id}).then(response => response.data).catch(error => console.log(error));
}

// export const UploadCountry = async (datas) => {
//     const url = `https://drizzlebackend.awlworldwide.com/api/UploadCountry`
//     return axios.post(url,{datas}).then(response => response.data).catch(error => console.log(error));
// }
// export const UploadState = async (datas) => {
//     const url = `https://drizzlebackend.awlworldwide.com/api/UploadState`
//     return axios.post(url,{datas}).then(response => response.data).catch(error => console.log(error));
// }

export const UploadCity = async (datas) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/UploadCity`
    return axios.post(url,{datas}).then(response => response.data).catch(error => console.log(error));
}


//  Iperioscope Series start
export const Totalseriesapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalseries`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const Updateseriesstatus = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updatesseriestatus`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const Addseriesapi = async (type_id, services_id, task_id, agent_id, group_id, os_id, comp_id, device_id, taskandcomp_id, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/addseries`
    return axios.post(url, { type_id, services_id, task_id, agent_id, group_id, os_id, comp_id, device_id, taskandcomp_id, username }).then(response => response.data).catch(error => console.log(error));
}
export const Getseries = async (sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getseries`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const Updateseries = async (sno, type_id, services_id, task_id, agent_id, group_id, os_id, comp_id, device_id, taskandcomp_id, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateseries`
    return axios.post(url, { sno, type_id, services_id, task_id, agent_id, group_id, os_id, comp_id, device_id, taskandcomp_id, username }).then(response => response.data).catch(error => console.log(error));
}

export const ActiveSeries = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/activeseriesmaster`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

//  Iperioscope Series End

export const TotalCount = async (table) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalcount`
    return axios.post(url, { table }).then(response => response.data).catch(error => console.log(error));
}

//Device Type 
export const TotalDevicetype = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totaldevicetypemaster`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}
export const Statusdevicetype = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updatetypestatusmaster`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const AddDevicetypeapi = async (devicetypeid, device_type, remark, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/adddevicetypemaster`
    return axios.post(url, { devicetypeid, device_type, remark, username }).then(response => response.data).catch(error => console.log(error));
}
export const Getdevicetype = async (sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getdevicetypemaster`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const Updatedevicetype = async (sno, devicetypeid, device_type, remark, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updatedevicetypemaster`
    return axios.post(url, { sno, devicetypeid, device_type, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const ActiveDevicetype = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/activedevicetype`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}


//   Device Group Start
export const TotalDevicegroup = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totaldevicegroupmaster`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const DeviceGroupStatus = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updategroupstatusmaster`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const Adddevicegroup = async (devicegroupid, device_group, remark, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/adddevicegroupmaster`
    return axios.post(url, { devicegroupid, device_group, remark, username }).then(response => response.data).catch(error => console.log(error));
}
export const Getdevicegroup = async (sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getdevicegroupmaster`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const Updatedevicegroup = async (sno, devicegroupid, device_group, remark, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updatedevicegroupmaster`
    return axios.post(url, { sno, devicegroupid, device_group, remark, username }).then(response => response.data).catch(error => console.log(error));
}

//   Device Group End


export const ActiveDevicegroup = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/activedevicegroup`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}


// //os Master

export const TotalOperatingSystemapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totaloperatingsystemmaster`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const AddOperatingsystem = async (operatingsystemid, operatingsystem, remark, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/addoperatingsystemmaster`
    return axios.post(url, { operatingsystemid, operatingsystem, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const GetOperatingSystem = async (sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getoperatingsystemmaster`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const EditOperatingsystem = async (sno, operatingsystemid, operatingsystem, remark, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateoperatingsystemmaster`
    return axios.post(url, { sno, operatingsystemid, operatingsystem, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const OperatingSystemStatus = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateoperatingstatusstatusmaster`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}
export const ActiveOperatingSystem = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/activeoperatingsystem`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}



// // Device Services Compliance 

export const TotalServiceCompliance = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalservicecompliancemaster`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const Addservicecompliance = async (servicecomplianceid, device_service, services_compliance, remark, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/addservicecompliancemaster`
    return axios.post(url, { servicecomplianceid, device_service, services_compliance, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const GetServiceCompliance = async (sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getservicecompliancemaster`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const Updateservicecompliance = async (sno, servicecomplianceid, device_service, services_compliance, remark, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateservicecompliancemaster`
    return axios.post(url, { sno, servicecomplianceid, device_service, services_compliance, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const ServiceComplianceStatus = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateservicecompliancestatusmaster`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const ActiveServiceCompliance = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/activeservicecompliance`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}


// // Device Services

export const Totaldeviceservices = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totaldeviceservicesmaster`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}
export const Adddeviceservice = async (deviceserviceid, device_service, remark, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/adddeviceservicemaster`
    return axios.post(url, { deviceserviceid, device_service, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const Updatestatusdeviceservices = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updatedeviceservicestatusmaster`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const Getdeviceservicesdata = async (sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getdeviceservicemaster`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const Updatedeviceservice = async (sno, deviceserviceid, device_service, remark, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updatedeviceservicemaster`
    return axios.post(url, { sno, deviceserviceid, device_service, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const ActiveDeviceService = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/activedeviceservice`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}



// // Agent Master
export const Totalagent = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalagentmaster`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const Updateagentstatus = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateagentstatusmaster`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}


export const Addagent = async (agentid, agent_name, agent_email, agent_phone, remark, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/addagentmaster`
    return axios.post(url, { agentid, agent_name, agent_email, agent_phone, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const Getagent = async (sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getagentmaster`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const updateagent = async (sno, agentid, agent_name, agent_email, agent_phone, remark, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateagentmaster`
    return axios.post(url, { sno, agentid, agent_name, agent_email, agent_phone, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const ActiveAgent = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/activeagent`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

// Device Task
export const Totaldevicetask = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totaldevicetaskmaster`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const Updatedevicetaskstatus = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updatedevicetaskstatusmaster`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const Getdevicetask = async (sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getdevicetaskmaster`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}
export const AddDevicetaskapi = async (devicetaskid, device_tasks, device_tasks_frequency, remark, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/adddevicetaskmaster`
    return axios.post(url, { devicetaskid, device_tasks, device_tasks_frequency, remark, username }).then(response => response.data).catch(error => console.log(error));
}


export const Updatedevicetask = async (sno, devicetaskid, device_tasks, device_tasks_frequency, remark, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updatedevicetaskmaster`
    return axios.post(url, { sno, devicetaskid, device_tasks, device_tasks_frequency, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const Activedevicetask = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/activedevicetask`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const GetDevicetaskfrequency = async (task) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getdevicetaskfrequency`
    return axios.post(url, { task }).then(response => response.data).catch(error => console.log(error));
}

export const Adddevice = async (device_id, device_name, device_type, device_group, device_ip_address, device_host_master, device_os, services, device_creation_date, device_reg_date, agent, remark, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/adddevice`
    return axios.post(url, { device_id, device_name, device_type, device_group, device_ip_address, device_host_master, device_os, services, device_creation_date, device_reg_date, agent, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const Totaldeviceapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totaldevice`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const Updatedevicestatus = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updatedevicestatus`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const Getdevice = async (sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getdevice`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const Updatedevice = async (sno, device_id, device_name, device_type, device_group, device_ip_address, device_host_master, device_os, services, device_creation_date, device_reg_date, agent, remark, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updatedevice`
    return axios.post(url, { sno, device_id, device_name, device_type, device_group, device_ip_address, device_host_master, device_os, services, device_creation_date, device_reg_date, agent, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const Activedevice = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/activedevice`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const Getdevicetaskcompliancebyname = async (name) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getdevicetaskcompliancebyname`
    return axios.post(url, { name }).then(response => response.data).catch(error => console.log(error));
}

export const AddDevicetaskCompliance = async (devicename, services, add_compliance, remark, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/adddeviceTaskcomp`
    return axios.post(url, { devicename, services, add_compliance, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const getdevicetaskcomp = async (sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getdevicetaskcomp`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const Updatedevicetaskcomp = async (sno, devicename, services, add_compliance, remark, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updatedevicetaskcomp`
    return axios.post(url, { sno, devicename, services, add_compliance, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const Updatedevicecompstatus = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updatedevicecompstatus`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const Getdevicetaskbyname = async (name) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getdevicetaskbyname`
    return axios.post(url, { name }).then(response => response.data).catch(error => console.log(error));
}

export const Adddevicetaskby = async (devicename, services, task, completion_date, remark, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/adddevicetaskes`
    return axios.post(url, { devicename, services, task, completion_date, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const Updatedevicetaskastatus = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updatedevicetaskastatus`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}


export const GetDevicestask = async (sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/Getdevicestask`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}


export const UpdateDevicetaskes = async (sno, devicename, services, task, task_frequency, completion_date, remark, username) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updatedevicetaskes`
    return axios.post(url, { sno, devicename, services, task, task_frequency, completion_date, remark, username }).then(response => response.data).catch(error => console.log(error));
}



// Drizzle Master
//Organization

export const TotalOrganization = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalorganization`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

//Employee

export const TotalEmployees = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalEmployee`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const AddEmployees = async (employee_id, employee_name, location, employee_email, employee_number, company, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/insertEmployee`
    return axios.post(url, { employee_id, employee_name, location, employee_email, employee_number, company, user_id }).then(response => response.data).catch(error => console.log(error));
}
export const GetEmployees = async (sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getEmployee`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const DeleteEmployees = async (status, sno) => {
    console.log(status, sno)
    const url = `https://drizzlebackend.awlworldwide.com/api/deleteEmployee`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const UpdateEmployees = async (sno, employee_name, location, employee_email, employee_number, company, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateEmployee`
    return axios.post(url, { sno, employee_name, location, employee_email, employee_number, company, user_id }).then(response => response.data).catch(error => console.log(error));
}


export const ActiveEmployees = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/ActiveEmployee`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}


export const EmployeesDetail = async (empid) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/EmployeeDetail`
    return axios.post(url, { empid }).then(response => response.data).catch(error => console.log(error));
}


//Assets Type
export const TotalAssetTypeapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalAssetType`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const AddAssetTypeapi = async (asset_type_id, asset_type, asset_description, user_id) => {
    const url = `http://drizzlebackend.awlworldwide.com/api/insertAssetType`
    return axios.post(url, { asset_type_id, asset_type, asset_description, user_id }).then(response => response.data).catch(error => console.log(error));
}

export const GetAssetTypeapi = async (sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getAssetType`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const DeleteAssetTypeapi = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/deleteAssetType`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const UpdateAssettypeapi = async (sno, asset_type, asset_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateAssetType`
    return axios.post(url, { sno, asset_type, asset_description, user_id }).then(response => response.data).catch(error => console.log(error));
}

export const ActiveAssetesType = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/ActiveAssetesType`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

//Asset Status

export const TotalAssetStatusapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalAssetStatus`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const AddAssetStatusapi = async (asset_status_id, asset_status, asset_status_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/insertAssetStatus`
    return axios.post(url, { asset_status_id, asset_status, asset_status_description, user_id }).then(response => response.data).catch(error => console.log(error));
}

export const DeleteAssetStatusapi = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/deleteAssetStatus`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const GetAssetStatusapi = async (sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getAssetStatus`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const UpdateAssetStatusapi = async (sno, asset_status, asset_status_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateAssetStatus`
    return axios.post(url, { sno, asset_status, asset_status_description, user_id }).then(response => response.data).catch(error => console.log(error));
}


export const ActiveAssetStatus = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/ActiveAssetesStatus`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}


// Software Master

export const TotalSoftwareapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalSoftware`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const AddSoftwareapi = async (software_id, software_name, software_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/insertSoftware`
    return axios.post(url, { software_id, software_name, software_description, user_id }).then(response => response.data).catch(error => console.log(error));
}

export const DeleteSoftwaresapi = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/deleteSoftware`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const GetSoftwareapi = async (sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getSoftware`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const UpdateSoftwareapi = async (sno, software_name, software_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateSoftware`
    return axios.post(url, { sno, software_name, software_description, user_id }).then(response => response.data).catch(error => console.log(error));
}


export const ActiveSoftware = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/ActiveSoftware`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}


// Purchase Master

export const TotalPurchaseTypeapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalPurchaseType`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const AddPurchaseTypeeapi = async (purchase_id, purchase_type, purchase_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/insertPurchaseType`
    return axios.post(url, { purchase_id, purchase_type, purchase_description, user_id }).then(response => response.data).catch(error => console.log(error));
}

export const DeletePurchaseTypeapi = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/deletePurchaseType`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const GetPurchaseTypeapi = async (sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getPurchaseType`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const UpdatePurchaseapi = async (sno, purchase_type, purchase_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updatePurchaseType`
    return axios.post(url, { sno, purchase_type, purchase_description, user_id }).then(response => response.data).catch(error => console.log(error));
}

export const ActivePurchaseTypeapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/ActivePurchasetype`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}


// Priority Master

export const TotalPriorityapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalPriority`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const AddPriorityapi = async (priority_id, priority_type, priority_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/insertPriority`
    return axios.post(url, { priority_id, priority_type, priority_description, user_id }).then(response => response.data).catch(error => console.log(error));
}


export const DeletePriorityapi = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/deletePriority`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const GetPriorityapi = async (sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getPriority`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}
export const UpdatePriorityapi = async (sno, priority_type, priority_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updatePriority`
    return axios.post(url, { sno, priority_type, priority_description, user_id }).then(response => response.data).catch(error => console.log(error));
}


export const ActivePriority = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/ActivePriority`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}


// Billing Frequency
export const TotalBillingFreqapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalBillingFrequency`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const DeleteBillingFreqapi = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/deleteBillingFrequency`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}
export const AddBillingFreqapi = async (billing_freq_id, billing_freq, billing_freq_description, user_id) => {
    const url = ` https://drizzlebackend.awlworldwide.com/api/insertBillingFrequency`
    return axios.post(url, { billing_freq_id, billing_freq, billing_freq_description, user_id }).then(response => response.data).catch(error => console.log(error));
}
export const GetBillingFreqapi = async (sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getBillingFrequency`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const UpdateBillingFreqapi = async (sno, billing_freq, billing_freq_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateBillingFrequency`
    return axios.post(url, { sno, billing_freq, billing_freq_description, user_id }).then(response => response.data).catch(error => console.log(error));
}

export const ActiveBillingFreq = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/ActiveBillingFreq`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}


// Vendor Category
export const TotalVendorCategoryapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalVendorCategory`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}
export const DeleteVendorCategoryapi = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/deleteVendorCategory`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const AddVendorCategoryapi = async (vendor_category_id, vendor_category, vendor_category_description, user_id) => {
    const url = ` https://drizzlebackend.awlworldwide.com/api/insertVendorCategory`
    return axios.post(url, { vendor_category_id, vendor_category, vendor_category_description, user_id }).then(response => response.data).catch(error => console.log(error));
}

export const GetVendorCategoryapi = async (sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getVendorCategory`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const UpdateVendorCategoryapi = async (sno, vendor_category, vendor_category_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateVendorCategory`
    return axios.post(url, { sno, vendor_category, vendor_category_description, user_id }).then(response => response.data).catch(error => console.log(error));
}

export const ActiveVendorCategory = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getallvendorcategory`
    return axios.post(url, {}).then(response => response.data).catch(error => console.log(error));
}

//  Location Master

export const TotalLocation = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalLocation`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const UpdateLocationStatus = async (status, sno) => {
    const url = ` https://drizzlebackend.awlworldwide.com/api/deleteLocation`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const AddLocationapi = async (location_id, company_name, location_code, location_name, location_address_line1, location_address_line2, location_city, location_state, location_pin_code, location_gst, contact_person, contact_person_email, contact_person_number, location_latitude, location_longitude, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/insertLocation`
    return axios.post(url, { location_id, company_name, location_code, location_name, location_address_line1, location_address_line2, location_city, location_state, location_pin_code, location_gst, contact_person, contact_person_email, contact_person_number, location_latitude, location_longitude, user_id }).then(response => response.data).catch(error => console.log(error));
}

export const GetLocation = async (sno) => {
    const url = ` https://drizzlebackend.awlworldwide.com/api/getLocation`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const UpdateLocation = async (sno, company_name, location_code, location_name, location_address_line1, location_address_line2, location_city, location_state, location_pin_code, location_gst, contact_person, contact_person_email, contact_person_number, location_latitude, location_longitude, user_id) => {
    const url = ` https://drizzlebackend.awlworldwide.com/api/updateLocation`
    return axios.post(url, { sno, company_name, location_code, location_name, location_address_line1, location_address_line2, location_city, location_state, location_pin_code, location_gst, contact_person, contact_person_email, contact_person_number, location_latitude, location_longitude, user_id }).then(response => response.data).catch(error => console.log(error));
}

export const ActiveLocation = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getalllocation`
    return axios.post(url, {}).then(response => response.data).catch(error => console.log(error));
}


// Manufacturer Master

export const TotalManufacturerapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalManufacturer`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}


export const UpdateManufacturerStatus = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/deleteManufacturer`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}


export const InsertManufacturer = async (manufacturer_id, manufacturer_name, manufacturer_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/insertManufacturer`
    return axios.post(url, { manufacturer_id, manufacturer_name, manufacturer_description, user_id }).then(response => response.data).catch(error => console.log(error));
}


export const GetManufacturer = async (sno) => {
    const url = ` https://drizzlebackend.awlworldwide.com/api/getManufacturer`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const UpdateManufacturer = async (sno, manufacturer_name, manufacturer_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateManufacturer`
    return axios.post(url, { sno, manufacturer_name, manufacturer_description, user_id }).then(response => response.data).catch(error => console.log(error));
}


export const ActiveManufacturer = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/ActiveManufacturer`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

// Issue Type Master

export const TotalIssueTypeapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalIssueType`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}


export const UpdateIssueTypeStatus = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/deleteIssueType`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const InsertIssueType = async (issue_id, issue_type, issue_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/insertIssueType`
    return axios.post(url, { issue_id, issue_type, issue_description, user_id }).then(response => response.data).catch(error => console.log(error));
}

export const GetIssueType = async (sno) => {
    const url = ` https://drizzlebackend.awlworldwide.com/api/getIssueType`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const UpdateIssueType = async (sno, issue_type, issue_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateIssueType`
    return axios.post(url, { sno, issue_type, issue_description, user_id }).then(response => response.data).catch(error => console.log(error));
}

export const ActiveIssue = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/ActiveIssue`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}


// Contract Type Master

export const TotalContractTypeapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalContractType`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const UpdateContractTypeStatus = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/deleteContractType`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const InsertContractType = async (contract_id, contract_type, contract_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/insertContractType`
    return axios.post(url, { contract_id, contract_type, contract_description, user_id }).then(response => response.data).catch(error => console.log(error));
}

export const GetContractType = async (sno) => {
    const url = ` https://drizzlebackend.awlworldwide.com/api/getContractType`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const UpdateContractType = async (sno, contract_type, contract_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateContractType`
    return axios.post(url, { sno, contract_type, contract_description, user_id }).then(response => response.data).catch(error => console.log(error));
}
export const ActiveContractType = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getallcontracttype`
    return axios.post(url, {}).then(response => response.data).catch(error => console.log(error));
}


// Ticket Status Master

export const TotalTicketstatusapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalTicketStatus`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const UpdateTicketstatusActive = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/deleteTicketStatus`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const InsertTicketstatus = async (ticket_id, ticket_status, ticket_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/insertTicketStatus`
    return axios.post(url, { ticket_id, ticket_status, ticket_description, user_id }).then(response => response.data).catch(error => console.log(error));
}

export const GetTicketstatus = async (sno) => {
    const url = ` https://drizzlebackend.awlworldwide.com/api/getTicketStatus`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const UpdateTicketstatus = async (sno, ticket_status, ticket_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateTicketStatus`
    return axios.post(url, { sno, ticket_status, ticket_description, user_id }).then(response => response.data).catch(error => console.log(error));
}

export const ActiveTicketStatus = async () => {
    const url = ` https://drizzlebackend.awlworldwide.com/api/ActiveTicketStatus`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

// Vendor Sub Category Master

export const TotalVendSubCateapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalVendorSubCategory`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const DeleteVendSubCateStatus = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/deleteVendorSubCategory`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const InsertVendSubCate = async (vendor_sub_category_id, vendor_category, vendor_sub_category, vendor_sub_category_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/insertVendorSubCategory`
    return axios.post(url, { vendor_sub_category_id, vendor_category, vendor_sub_category, vendor_sub_category_description, user_id }).then(response => response.data).catch(error => console.log(error));
}

export const GetVendSubCate = async (sno) => {
    const url = ` https://drizzlebackend.awlworldwide.com/api/getVendorSubCategory`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const UpdateVendSubCate = async (sno, vendor_category, vendor_sub_category, vendor_sub_category_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateVendorSubCategory`
    return axios.post(url, { sno, vendor_category, vendor_sub_category, vendor_sub_category_description, user_id }).then(response => response.data).catch(error => console.log(error));
}
export const ActiveVendSubCate = async (vendor_category) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getvendorsubcategorybyvend`
    return axios.post(url, { vendor_category }).then(response => response.data).catch(error => console.log(error));
}

// Service Action Type Master

export const TotalServiceActionTypeapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalServiceAction`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const DeleteServiceActionTypeStatus = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/deleteServiceAction`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const InsertServiceActionType = async (service_action_id, service_action_type, service_action_type_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/insertServiceAction`
    return axios.post(url, { service_action_id, service_action_type, service_action_type_description, user_id }).then(response => response.data).catch(error => console.log(error));
}

export const GetServiceActionType = async (sno) => {
    const url = ` https://drizzlebackend.awlworldwide.com/api/getServiceAction`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const UpdateServiceActionType = async (sno, service_action_type, service_action_type_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateServiceAction`
    return axios.post(url, { sno, service_action_type, service_action_type_description, user_id }).then(response => response.data).catch(error => console.log(error));
}


// Service Group Master

export const TotalServiceGroupapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalServiceGroup`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const DeleteServiceGroupStatus = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/deleteServiceGroup`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const InsertServiceGroup = async (service_group_id, service_group_type, service_group_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/insertServiceGroup`
    return axios.post(url, { service_group_id, service_group_type, service_group_description, user_id }).then(response => response.data).catch(error => console.log(error));
}

export const GetServiceGroup = async (sno) => {
    const url = ` https://drizzlebackend.awlworldwide.com/api/getServiceGroup`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const UpdateServiceGroup = async (sno, service_group_type, service_group_description, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateServiceGroup`
    return axios.post(url, { sno, service_group_type, service_group_description, user_id }).then(response => response.data).catch(error => console.log(error));
}



// Vendor Code Master

export const TotalVendorCodeapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalVendorCode`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const DeleteVendorCode = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/deleteVendorCode`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const InsertVendorCode = async (vendor_code_id, vendor_code, vendor_name, comp_email, comp_website, comp_gst,
    comp_phone, company_country_id, comp_country, comp_state_id,comp_state, comp_city, comp_pincode, comp_addr1, comp_addr2,
    vendor_portal, contact_person, contact_no, contact_email, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/insertVendorCode`
    return axios.post(url, { vendor_code_id, vendor_code, vendor_name, comp_email, comp_website, comp_gst,
        comp_phone, company_country_id, comp_country, comp_state_id,comp_state, comp_city, comp_pincode, comp_addr1, comp_addr2,
        vendor_portal, contact_person, contact_no, contact_email, user_id}).then(response => response.data).catch(error => console.log(error));
}

export const GetVendorCode = async (sno) => {
    const url = ` https://drizzlebackend.awlworldwide.com/api/getVendorCode`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const UpdateVendorCode = async (sno, vendor_code,vendor_name,comp_gst,comp_website,comp_email,comp_phone,comp_country_id,comp_country,
    comp_state_id,comp_state,comp_city,comp_addr1,comp_addr2,comp_pincode,vendor_portal,contact_person,contact_no,contact_email,user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/updateVendorCode`
    return axios.post(url, { sno, vendor_code,vendor_name,comp_gst,comp_website,comp_email,comp_phone,comp_country_id,comp_country,
        comp_state_id,comp_state,comp_city,comp_addr1,comp_addr2,comp_pincode,vendor_portal,contact_person,contact_no,contact_email,user_id}).then(response => response.data).catch(error => console.log(error));
}

export const ActiveVendorCode = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/getallvendor`
    return axios.post(url, {}).then(response => response.data).catch(error => console.log(error));
}


// Vendor Contract Master

export const TotalVendorContractapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/totalVendorContract`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}
export const InsertVendorContract = async (vendor_contract_id, vendor, type_of_contract,
    major_category, sub_category, location, company, customer_account_no, reference_no, contact_plain_details,
    rate_per_month, contract_start_date, invoice_generation_date, billing_freq, payee_name, tds, link_id_no,
    help_desk_no, userid) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/InsertVendorContract`
    return axios.post(url, {
        vendor_contract_id, vendor, type_of_contract,
        major_category, sub_category, location, company, customer_account_no, reference_no, contact_plain_details,
        rate_per_month, contract_start_date, invoice_generation_date, billing_freq, payee_name, tds, link_id_no,
        help_desk_no, userid
    }).then(response => response.data).catch(error => console.log(error));
}

export const UpdateVendorContract = async (sno, vendor, type_of_contract,
    major_category, sub_category, location, company, customer_account_no, reference_no, contact_plain_details,
    rate_per_month, contract_start_date, invoice_generation_date, billing_freq, payee_name, tds, link_id_no,
    help_desk_no, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/UpdateVendorContract`
    return axios.post(url, {
        sno, vendor, type_of_contract,
        major_category, sub_category, location, company, customer_account_no, reference_no, contact_plain_details,
        rate_per_month, contract_start_date, invoice_generation_date, billing_freq, payee_name, tds, link_id_no,
        help_desk_no, user_id
    }).then(response => response.data).catch(error => console.log(error));
}

export const DeleteVendorContract = async (status, sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/deleteVendorContract`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const GetVendorContract = async (sno) => {
    const url = ` https://drizzlebackend.awlworldwide.com/api/getVendorContract`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const ActiveVendorContract = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/ActiveVendorContract`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const VendorContractDetail = async (sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/VendorContractDetail`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}


//  #########################   New Assets ##############################


export const TotalNewAssets = async (org) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/TotalNewAssets`
    return axios.post(url,{org}).then(response => response.data).catch(error => console.log(error));
}


export const InsertNewAssets = async (org,new_asset_type_id, asset_type, asset_tag, serial_no, location, manufacture,
    software, model, asset_status, description, purchase_type, purchase_date, company, vendor, invoice_no,
    rent_per_month, purchases_price, latest_inventory, asset_name, asset_assign, asset_assign_empid, remarks, userid) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/InsertNewAssets`
    return axios.post(url, {
        org,new_asset_type_id, asset_type, asset_tag, serial_no, location, manufacture,
        software, model, asset_status, description, purchase_type, purchase_date, company, vendor, invoice_no,
        rent_per_month, purchases_price, latest_inventory, asset_name, asset_assign, asset_assign_empid, remarks, userid
    }).then(response => response.data).catch(error => console.log(error));
}


export const DeleteNewAssets = async (org,status, sno) => {
    const url =`https://drizzlebackend.awlworldwide.com/api/DeleteNewAssets`
    return axios.post(url, {org, status, sno }).then(response => response.data).catch(error => console.log(error));
}
export const GetNewAssets = async (org,sno) => {
    const url =`https://drizzlebackend.awlworldwide.com/api/GetNewAssets`
    return axios.post(url, {org,sno }).then(response => response.data).catch(error => console.log(error));
}

export const CountNewAssets = async (org,asset_type) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/CountNewAssets`
    return axios.post(url, {org, asset_type }).then(response => response.data).catch(error => console.log(error));
}

export const GetNewAssetAssign = async (org,asset_assign_empid) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/GetNewAssetAssign`
    return axios.post(url, { org,asset_assign_empid }).then(response => response.data).catch(error => console.log(error));
}
export const UpdateNewAssets = async ( org, asset_type, assetetag, serialno, location, manufacture, software,
    model, assetstatus, description, purchase_type, purchasesdate, company, vendor, invoiceno,
    rentpermonth, purchaseprice, latestinventory, assetname, assetassign,asset_assign_empid, remark, userid,sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/UpdateNewAssets`
    return axios.post(url, {
        org,asset_type, assetetag, serialno, location, manufacture, software,
        model, assetstatus, description, purchase_type, purchasesdate, company, vendor, invoiceno,
        rentpermonth, purchaseprice, latestinventory, assetname, assetassign,asset_assign_empid, remark, userid,sno
    }).then(response => response.data).catch(error => console.log(error));
}

//  #########################   Ticketes ##############################

export const InsertTicket = async (emp_id, emp_name, asset_type, asset_serial, location, assign_ticket, type_of_issue, email_id,
    ticket_date, ticket_status, ticket_subject, priority, issue_discription, remarks, user_id) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/InsertTicket`
    return axios.post(url, {
        emp_id, emp_name, asset_type, asset_serial, location, assign_ticket, type_of_issue, email_id,
        ticket_date, ticket_status, ticket_subject, priority, issue_discription, remarks, user_id
    }).then(response => response.data).catch(error => console.log(error));
}

export const CountTickets = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/CountTickets`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}




export const TotalTicket = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/TotalTicket`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const DeleteTickets = async (status, sno) => {
    const url =`https://drizzlebackend.awlworldwide.com/api/DeleteTickets`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}
export const getTickets = async (sno) => {
    const url =`https://drizzlebackend.awlworldwide.com/api/getTickets`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const UpdateTicket = async (emp_id, emp_name, asset_type, asset_serial, location, assign_ticket, type_of_issue, email_id,
    ticket_date, ticket_status, ticket_subject, priority, issue_discription, remarks, user_id,sno) => {
    const url =`https://drizzlebackend.awlworldwide.com/api/UpdateTicket`
    return axios.post(url, { emp_id, emp_name, asset_type, asset_serial, location, assign_ticket, type_of_issue, email_id,
        ticket_date, ticket_status, ticket_subject, priority, issue_discription, remarks, user_id,sno }).then(response => response.data).catch(error => console.log(error));
}

//     Voice Invoice

export const InsertVendorInvoice = async (data, userid) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/InsertVendorInvoice`
    return axios.post(url, { data, userid }).then(response => response.data).catch(error => console.log(error));
}
export const GetVendorInvoice = async (sno) => {
    const url =`https://drizzlebackend.awlworldwide.com/api/GetVendorInvoice`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}


export const PendingVendorInvoice = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/PendingVendorInvoice`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const UpdateVendorInvoice = async (data, userid) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/UpdateVendorInvoice`
    return axios.post(url, { data, userid }).then(response => response.data).catch(error => console.log(error));
}
export const UpdatePendingVendorInvoice = async (vendor,accountno,invno,invamt,invdate,invduedate,invsubdate,remark,refno,printercount,sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/UpdatePendingVendorInvoice`
    return axios.post(url, { vendor,accountno,invno,invamt,invdate,invduedate,invsubdate,remark,refno,printercount,sno }).then(response => response.data).catch(error => console.log(error));
}

export const TotalVendorPaymentapi = async () => {
    const url = `https://drizzlebackend.awlworldwide.com/api/TotalVendorPayment`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const GetVendorPayment = async (sno) => {
    const url =`https://drizzlebackend.awlworldwide.com/api/GetVendorPayment`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const UpdateVendorPayment = async (paymentdetail,paymentamt,paymentdate,remark,sno) => {
    const url = `https://drizzlebackend.awlworldwide.com/api/UpdateVendorPayment`
    return axios.post(url, { paymentdetail,paymentamt,paymentdate,remark,sno }).then(response => response.data).catch(error => console.log(error));
}
