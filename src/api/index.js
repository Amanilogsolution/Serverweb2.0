import axios from 'axios';

export const UserLogin = async (userid, password) => {
    const url = `http://192.168.146.136:8007/api/login`
    return axios.post(url, { userid, password }).then(response => response.data).catch(error => console.log(error));
}

//  Iperioscope Series start
export const Totalseriesapi = async () => {
    const url = `http://192.168.146.136:8007/api/totalseries`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const Updateseriesstatus = async (status, sno) => {
    const url = `http://182.76.62.178:8114/api/updatesseriestatus`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const Addseriesapi = async (type_id, services_id, task_id, agent_id, group_id, os_id, comp_id, device_id, taskandcomp_id, username) => {
    const url = `http://182.76.62.178:8114/api/addseries`
    return axios.post(url, { type_id, services_id, task_id, agent_id, group_id, os_id, comp_id, device_id, taskandcomp_id, username }).then(response => response.data).catch(error => console.log(error));
}
export const Getseries = async (sno) => {
    const url = `http://182.76.62.178:8114/api/getseries`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const Updateseries = async (sno, type_id, services_id, task_id, agent_id, group_id, os_id, comp_id, device_id, taskandcomp_id, username) => {
    const url = `http://182.76.62.178:8114/api/updateseries`
    return axios.post(url, { sno, type_id, services_id, task_id, agent_id, group_id, os_id, comp_id, device_id, taskandcomp_id, username }).then(response => response.data).catch(error => console.log(error));
}

export const ActiveSeries = async () => {
    const url = `http://182.76.62.178:8114/api/activeseriesmaster`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

//  Iperioscope Series End

export const TotalCount = async (table) => {
    const url = `http://182.76.62.178:8114/api/totalcount`
    return axios.post(url, { table }).then(response => response.data).catch(error => console.log(error));
}

//Device Type 
export const TotalDevicetype = async () => {
    const url = `http://182.76.62.178:8114/api/totaldevicetypemaster`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}
export const Statusdevicetype = async (status, sno) => {
    const url = `http://182.76.62.178:8114/api/updatetypestatusmaster`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const AddDevicetypeapi = async (devicetypeid, device_type, remark, username) => {
    const url = `http://182.76.62.178:8114/api/adddevicetypemaster`
    return axios.post(url, { devicetypeid, device_type, remark, username }).then(response => response.data).catch(error => console.log(error));
}
export const Getdevicetype = async (sno) => {
    const url = `http://182.76.62.178:8114/api/getdevicetypemaster`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}


export const Updatedevicetype = async (sno, devicetypeid, device_type, remark, username) => {
    const url = `http://182.76.62.178:8114/api/updatedevicetypemaster`
    return axios.post(url, { sno, devicetypeid, device_type, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const ActiveDevicetype = async () => {
    const url = `http://182.76.62.178:8114/api/activedevicetype`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}


//   Device Group Start
export const TotalDevicegroup = async () => {
    const url = `http://182.76.62.178:8114/api/totaldevicegroupmaster`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const DeviceGroupStatus = async (status, sno) => {
    const url = `http://182.76.62.178:8114/api/updategroupstatusmaster`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const Adddevicegroup = async (devicegroupid, device_group, remark, username) => {
    const url = `http://182.76.62.178:8114/api/adddevicegroupmaster`
    return axios.post(url, { devicegroupid, device_group, remark, username }).then(response => response.data).catch(error => console.log(error));
}
export const Getdevicegroup = async (sno) => {
    const url = `http://182.76.62.178:8114/api/getdevicegroupmaster`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const Updatedevicegroup = async (sno, devicegroupid, device_group, remark, username) => {
    const url = `http://182.76.62.178:8114/api/updatedevicegroupmaster`
    return axios.post(url, { sno, devicegroupid, device_group, remark, username }).then(response => response.data).catch(error => console.log(error));
}

//   Device Group End


export const ActiveDevicegroup = async () => {
    const url = `http://182.76.62.178:8114/api/activedevicegroup`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}


// //os Master

export const TotalOperatingSystemapi = async () => {
    const url = `http://182.76.62.178:8114/api/totaloperatingsystemmaster`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const AddOperatingsystem = async (operatingsystemid, operatingsystem, remark, username) => {
    const url = `http://182.76.62.178:8114/api/addoperatingsystemmaster`
    return axios.post(url, { operatingsystemid, operatingsystem, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const GetOperatingSystem = async (sno) => {
    const url = `http://182.76.62.178:8114/api/getoperatingsystemmaster`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const EditOperatingsystem = async (sno, operatingsystemid, operatingsystem, remark, username) => {
    const url = `http://182.76.62.178:8114/api/updateoperatingsystemmaster`
    return axios.post(url, { sno, operatingsystemid, operatingsystem, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const OperatingSystemStatus = async (status, sno) => {
    const url = `http://182.76.62.178:8114/api/updateoperatingstatusstatusmaster`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}
export const ActiveOperatingSystem = async () => {
    const url = `http://182.76.62.178:8114/api/activeoperatingsystem`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}



// // Device Services Compliance 

export const TotalServiceCompliance = async () => {
    const url = `http://182.76.62.178:8114/api/totalservicecompliancemaster`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const Addservicecompliance = async (servicecomplianceid, device_service, services_compliance, remark, username) => {
    const url = `http://182.76.62.178:8114/api/addservicecompliancemaster`
    return axios.post(url, { servicecomplianceid, device_service, services_compliance, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const GetServiceCompliance = async (sno) => {
    const url = `http://182.76.62.178:8114/api/getservicecompliancemaster`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const Updateservicecompliance = async (sno, servicecomplianceid, device_service, services_compliance, remark, username) => {
    const url = `http://182.76.62.178:8114/api/updateservicecompliancemaster`
    return axios.post(url, { sno, servicecomplianceid, device_service, services_compliance, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const ServiceComplianceStatus = async (status, sno) => {
    const url = `http://182.76.62.178:8114/api/updateservicecompliancestatusmaster`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const ActiveServiceCompliance = async () => {
    const url = `http://182.76.62.178:8114/api/activeservicecompliance`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}


// // Device Services

export const Totaldeviceservices = async () => {
    const url = `http://182.76.62.178:8114/api/totaldeviceservicesmaster`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}
export const Adddeviceservice = async (deviceserviceid, device_service, remark, username) => {
    const url = `http://182.76.62.178:8114/api/adddeviceservicemaster`
    return axios.post(url, { deviceserviceid, device_service, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const Updatestatusdeviceservices = async (status, sno) => {
    const url = `http://182.76.62.178:8114/api/updatedeviceservicestatusmaster`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const Getdeviceservicesdata = async (sno) => {
    const url = `http://182.76.62.178:8114/api/getdeviceservicemaster`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const Updatedeviceservice = async (sno, deviceserviceid, device_service, remark, username) => {
    const url = `http://182.76.62.178:8114/api/updatedeviceservicemaster`
    return axios.post(url, { sno, deviceserviceid, device_service, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const ActiveDeviceService = async () => {
    const url = `http://182.76.62.178:8114/api/activedeviceservice`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}



// // Agent Master
export const Totalagent = async () => {
    const url = `http://182.76.62.178:8114/api/totalagentmaster`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const Updateagentstatus = async (status, sno) => {
    const url = `http://182.76.62.178:8114/api/updateagentstatusmaster`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}


export const Addagent = async (agentid, agent_name, agent_email, agent_phone, remark, username) => {
    const url = `http://182.76.62.178:8114/api/addagentmaster`
    return axios.post(url, { agentid, agent_name, agent_email, agent_phone, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const Getagent = async (sno) => {
    const url = `http://182.76.62.178:8114/api/getagentmaster`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const updateagent = async (sno, agentid, agent_name, agent_email, agent_phone, remark, username) => {
    const url = `http://182.76.62.178:8114/api/updateagentmaster`
    return axios.post(url, { sno, agentid, agent_name, agent_email, agent_phone, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const ActiveAgent = async () => {
    const url = `http://182.76.62.178:8114/api/activeagent`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

// Device Task
export const Totaldevicetask = async () => {
    const url = `http://182.76.62.178:8114/api/totaldevicetaskmaster`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const Updatedevicetaskstatus = async (status, sno) => {
    const url = `http://182.76.62.178:8114/api/updatedevicetaskstatusmaster`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const Getdevicetask = async (sno) => {
    const url = `http://182.76.62.178:8114/api/getdevicetaskmaster`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}
export const AddDevicetaskapi = async (devicetaskid, device_tasks, device_tasks_frequency, remark, username) => {
    const url = `http://182.76.62.178:8114/api/adddevicetaskmaster`
    return axios.post(url, { devicetaskid, device_tasks, device_tasks_frequency, remark, username }).then(response => response.data).catch(error => console.log(error));
}


export const Updatedevicetask = async (sno, devicetaskid, device_tasks, device_tasks_frequency, remark, username) => {
    const url = `http://182.76.62.178:8114/api/updatedevicetaskmaster`
    return axios.post(url, { sno, devicetaskid, device_tasks, device_tasks_frequency, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const Activedevicetask = async () => {
    const url = `http://182.76.62.178:8114/api/activedevicetask`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const GetDevicetaskfrequency = async (task) => {
    const url = `http://182.76.62.178:8114/api/getdevicetaskfrequency`
    return axios.post(url, { task }).then(response => response.data).catch(error => console.log(error));
}



export const Adddevice = async (device_id, device_name, device_type, device_group, device_ip_address, device_host_master, device_os, services, device_creation_date, device_reg_date, agent, remark, username) => {
    const url = `http://182.76.62.178:8114/api/adddevice`
    return axios.post(url, { device_id, device_name, device_type, device_group, device_ip_address, device_host_master, device_os, services, device_creation_date, device_reg_date, agent, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const Totaldeviceapi = async () => {
    const url = `http://182.76.62.178:8114/api/totaldevice`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}

export const Updatedevicestatus = async (status, sno) => {
    const url = `http://182.76.62.178:8114/api/updatedevicestatus`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const Getdevice = async (sno) => {
    const url = `http://182.76.62.178:8114/api/getdevice`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const Updatedevice = async (sno, device_id, device_name, device_type, device_group, device_ip_address, device_host_master, device_os, services, device_creation_date, device_reg_date, agent, remark, username) => {
    const url = `http://182.76.62.178:8114/api/updatedevice`
    return axios.post(url, { sno, device_id, device_name, device_type, device_group, device_ip_address, device_host_master, device_os, services, device_creation_date, device_reg_date, agent, remark, username }).then(response => response.data).catch(error => console.log(error));
}



export const Activedevice = async () => {
    const url = `http://182.76.62.178:8114/api/activedevice`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}






export const Getdevicetaskcompliancebyname = async (name) => {
    const url = `http://182.76.62.178:8114/api/getdevicetaskcompliancebyname`
    return axios.post(url, { name }).then(response => response.data).catch(error => console.log(error));
}

export const AddDevicetaskCompliance = async (devicename, services, add_compliance, remark, username) => {
    const url = `http://182.76.62.178:8114/api/adddeviceTaskcomp`
    return axios.post(url, { devicename, services, add_compliance, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const getdevicetaskcomp = async (sno) => {
    const url = `http://182.76.62.178:8114/api/getdevicetaskcomp`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}

export const Updatedevicetaskcomp = async (sno, devicename, services, add_compliance, remark, username) => {
    const url = `http://182.76.62.178:8114/api/updatedevicetaskcomp`
    return axios.post(url, { sno, devicename, services, add_compliance, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const Updatedevicecompstatus = async (status, sno) => {
    const url = `http://182.76.62.178:8114/api/updatedevicecompstatus`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}

export const Getdevicetaskbyname = async (name) => {
    const url = `http://182.76.62.178:8114/api/getdevicetaskbyname`
    return axios.post(url, { name }).then(response => response.data).catch(error => console.log(error));
}

export const Adddevicetaskby = async (devicename, services, task, completion_date, remark, username) => {
    const url = `http://182.76.62.178:8114/api/adddevicetaskes`
    return axios.post(url, { devicename, services, task, completion_date, remark, username }).then(response => response.data).catch(error => console.log(error));
}

export const Updatedevicetaskastatus = async (status, sno) => {
    const url = `http://182.76.62.178:8114/api/updatedevicetaskastatus`
    return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
}


export const GetDevicestask = async (sno) => {
    const url = `http://182.76.62.178:8114/api/Getdevicestask`
    return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
}


export const UpdateDevicetaskes = async (sno, devicename, services, task, task_frequency, completion_date, remark, username) => {
    const url = `http://182.76.62.178:8114/api/updatedevicetaskes`
    return axios.post(url, { sno, devicename, services, task, task_frequency, completion_date, remark, username }).then(response => response.data).catch(error => console.log(error));
}



// Drizzle Master
//Organization

export const TotalOrganization = async () => {
    const url = `https://192.168.146.136:8007/api/totalorganization`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}


//Employee

export const TotalEmployees = async () => {
    const url = `http://192.168.146.136:8007/api/totalEmployee`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const AddEmployees = async (employee_id,employee_name,location,employee_email,employee_number,company,user_id) => {
    const url = `http://192.168.146.136:8007/api/insertEmployee`
    return axios.post(url,{employee_id,employee_name,location,employee_email,employee_number,company,user_id}).then(response => response.data).catch(error => console.log(error));
}
export const GetEmployees = async (sno) => {
    const url = `http://192.168.146.136:8007/api/getEmployee`
    return axios.post(url,{sno}).then(response => response.data).catch(error => console.log(error));
}

export const DeleteEmployees = async (status,sno) => {
    console.log(status,sno)
    const url = `http://192.168.146.136:8007/api/deleteEmployee`
    return axios.post(url,{status,sno}).then(response => response.data).catch(error => console.log(error));
}

export const UpdateEmployees = async (sno,employee_name,location,employee_email,employee_number,company,user_id) => {
    const url = `http://192.168.146.136:8007/api/updateEmployee`
    return axios.post(url,{sno,employee_name,location,employee_email,employee_number,company,user_id}).then(response => response.data).catch(error => console.log(error));
}

//Assets Type
export const TotalAssetTypeapi = async () => {
    const url = `http://192.168.146.136:8007/api/totalAssetType`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const AddAssetTypeapi = async (asset_type_id,asset_type,asset_description,user_id) => {
    const url = `http://192.168.146.136:8007/api/insertAssetType`
    return axios.post(url,{asset_type_id,asset_type,asset_description,user_id}).then(response => response.data).catch(error => console.log(error));
}

export const GetAssetTypeapi = async (sno) => {
    const url = `http://192.168.146.136:8007/api/getAssetType`
    return axios.post(url,{sno}).then(response => response.data).catch(error => console.log(error));
}

export const DeleteAssetTypeapi = async (status,sno) => {
    const url = `http://192.168.146.136:8007/api/deleteAssetType`
    return axios.post(url,{status,sno}).then(response => response.data).catch(error => console.log(error));
}

export const UpdateAssettypeapi = async (sno,asset_type,asset_description,user_id) => {
    const url = `http://192.168.146.136:8007/api/updateAssetType`
    return axios.post(url,{sno,asset_type,asset_description,user_id}).then(response => response.data).catch(error => console.log(error));
}

//Asset Status

export const TotalAssetStatusapi = async () => {
    const url = `http://192.168.146.136:8007/api/totalAssetStatus`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const AddAssetStatusapi = async (asset_status_id,asset_status,asset_status_description,user_id) => {
    const url = `http://192.168.146.136:8007/api/insertAssetStatus`
    return axios.post(url,{asset_status_id,asset_status,asset_status_description,user_id}).then(response => response.data).catch(error => console.log(error));
}

export const DeleteAssetStatusapi = async (status,sno) => {
    const url = `http://192.168.146.136:8007/api/deleteAssetStatus`
    return axios.post(url,{status,sno}).then(response => response.data).catch(error => console.log(error));
}

export const GetAssetStatusapi = async (sno) => {
    const url = `http://192.168.146.136:8007/api/getAssetStatus`
    return axios.post(url,{sno}).then(response => response.data).catch(error => console.log(error));
}

export const UpdateAssetStatusapi = async (sno,asset_status,asset_status_description,user_id) => {
    const url = `http://192.168.146.136:8007/api/updateAssetStatus`
    return axios.post(url,{sno,asset_status,asset_status_description,user_id}).then(response => response.data).catch(error => console.log(error));
}


// Software Master

export const TotalSoftwareapi = async () => {
    const url = `http://192.168.146.136:8007/api/totalSoftware`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const AddSoftwareapi = async (software_id,software_name,software_description,user_id) => {
    const url = `http://192.168.146.136:8007/api/insertSoftware`
    return axios.post(url,{software_id,software_name,software_description,user_id}).then(response => response.data).catch(error => console.log(error));
}

export const DeleteSoftwaresapi = async (status,sno) => {
    const url = `http://192.168.146.136:8007/api/deleteSoftware`
    return axios.post(url,{status,sno}).then(response => response.data).catch(error => console.log(error));
}

export const GetSoftwareapi = async (sno) => {
    const url = `http://192.168.146.136:8007/api/getSoftware`
    return axios.post(url,{sno}).then(response => response.data).catch(error => console.log(error));
}

export const UpdateSoftwareapi = async (sno,software_name,software_description,user_id) => {
    const url = `http://192.168.146.136:8007/api/updateSoftware`
    return axios.post(url,{sno,software_name,software_description,user_id}).then(response => response.data).catch(error => console.log(error));
}

// Purchase Master

export const TotalPurchaseTypeapi = async () => {
    const url = `http://192.168.146.136:8007/api/totalPurchaseType`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const AddPurchaseTypeeapi = async (purchase_id,purchase_type,purchase_description,user_id) => {
    const url = `http://192.168.146.136:8007/api/insertPurchaseType`
    return axios.post(url,{purchase_id,purchase_type,purchase_description,user_id}).then(response => response.data).catch(error => console.log(error));
}

export const DeletePurchaseTypeapi = async (status,sno) => {
    const url = `http://192.168.146.136:8007/api/deletePurchaseType`
    return axios.post(url,{status,sno}).then(response => response.data).catch(error => console.log(error));
}

export const GetPurchaseTypeapi = async (sno) => {
    console.log(sno)
    const url = `http://192.168.146.136:8007/api/getPurchaseType`
    return axios.post(url,{sno}).then(response => response.data).catch(error => console.log(error));
}

export const UpdatePurchaseapi = async (sno,purchase_type,purchase_description,user_id) => {
    const url = `http://192.168.146.136:8007/api/updatePurchaseType`
    return axios.post(url,{sno,purchase_type,purchase_description,user_id}).then(response => response.data).catch(error => console.log(error));
}

// Priority Master

export const TotalPriorityapi = async () => {
    const url = `http://192.168.146.136:8007/api/totalPriority`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const AddPriorityapi = async (priority_id,priority_type,priority_description,user_id) => {
    const url = `http://192.168.146.136:8007/api/insertPriority`
    return axios.post(url,{priority_id,priority_type,priority_description,user_id}).then(response => response.data).catch(error => console.log(error));
}


export const DeletePriorityapi = async (status,sno) => {
    const url = `http://192.168.146.136:8007/api/deletePriority`
    return axios.post(url,{status,sno}).then(response => response.data).catch(error => console.log(error));
}

export const GetPriorityapi = async (sno) => {
    console.log(sno)
    const url = `http://192.168.146.136:8007/api/getPriority`
    return axios.post(url,{sno}).then(response => response.data).catch(error => console.log(error));
}
export const UpdatePriorityapi = async (sno,priority_type,priority_description,user_id) => {
    console.log(sno,priority_type)
    const url = `http://192.168.146.136:8007/api/updatePriority`
    return axios.post(url,{sno,priority_type,priority_description,user_id}).then(response => response.data).catch(error => console.log(error));
}

// Billing Frequency
export const TotalBillingFreqapi = async () => {
    const url = `http://192.168.146.136:8007/api/totalBillingFrequency`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const DeleteBillingFreqapi = async (status,sno) => {
    const url = `http://192.168.146.136:8007/api/deleteBillingFrequency`
    return axios.post(url,{status,sno}).then(response => response.data).catch(error => console.log(error));
}
export const AddBillingFreqapi = async (billing_freq_id,billing_freq,billing_freq_description,user_id) => {
    const url = ` http://192.168.146.136:8007/api/insertBillingFrequency`
    return axios.post(url,{billing_freq_id,billing_freq,billing_freq_description,user_id}).then(response => response.data).catch(error => console.log(error));
}
export const GetBillingFreqapi = async (sno) => {
    console.log(sno)
    const url = `http://192.168.146.136:8007/api/getBillingFrequency`
    return axios.post(url,{sno}).then(response => response.data).catch(error => console.log(error));
}

export const UpdateBillingFreqapi = async (sno,billing_freq,billing_freq_description,user_id) => {
    console.log(sno,billing_freq)
    const url = `http://192.168.146.136:8007/api/updateBillingFrequency`
    return axios.post(url,{sno,billing_freq,billing_freq_description,user_id}).then(response => response.data).catch(error => console.log(error));
}

// Vendor Category
export const TotalVendorCategoryapi = async () => {
    const url = `http://192.168.146.136:8007/api/totalVendorCategory`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}
export const DeleteVendorCategoryapi = async (status,sno) => {
    const url = `http://192.168.146.136:8007/api/deleteVendorCategory`
    return axios.post(url,{status,sno}).then(response => response.data).catch(error => console.log(error));
}

export const AddVendorCategoryapi = async (vendor_category_id,vendor_category,vendor_category_description,user_id) => {
    const url = ` http://192.168.146.136:8007/api/insertVendorCategory`
    return axios.post(url,{vendor_category_id,vendor_category,vendor_category_description,user_id}).then(response => response.data).catch(error => console.log(error));
}

export const GetVendorCategoryapi = async (sno) => {
    console.log(sno)
    const url = `http://192.168.146.136:8007/api/getVendorCategory`
    return axios.post(url,{sno}).then(response => response.data).catch(error => console.log(error));
}

export const UpdateVendorCategoryapi = async (sno,vendor_category,vendor_category_description,user_id) => {
    console.log(sno,vendor_category)
    const url = `http://192.168.146.136:8007/api/updateVendorCategory`
    return axios.post(url,{sno,vendor_category,vendor_category_description,user_id}).then(response => response.data).catch(error => console.log(error));
}



//  Location Master

export const TotalLocation = async () => {
    const url = `https://192.168.146.136:8007/api/totalLocation`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const UpdateLocationStatus = async (status,sno) => {
    const url = ` https://192.168.146.136:8007/api/deleteLocation`
    return axios.post(url,{status,sno}).then(response => response.data).catch(error => console.log(error));
}

export const AddLocationapi = async (location_id,company_name,location_code,location_name,location_address_line1,location_address_line2,location_city,location_state,location_pin_code,location_gst,contact_person,contact_person_email,contact_person_number,location_latitude,location_longitude,user_id) => {
    const url = ` https://192.168.146.136:8007/api/insertLocation`
    return axios.post(url,{location_id,company_name,location_code,location_name,location_address_line1,location_address_line2,location_city,location_state,location_pin_code,location_gst,contact_person,contact_person_email,contact_person_number,location_latitude,location_longitude,user_id}).then(response => response.data).catch(error => console.log(error));
}

export const GetLocation = async (sno) => {
    const url = ` https://192.168.146.136:8007/api/getLocation`
    return axios.post(url,{sno}).then(response => response.data).catch(error => console.log(error));
}

export const UpdateLocation = async (sno,company_name,location_code,location_name,location_address_line1,location_address_line2,location_city,location_state,location_pin_code,location_gst,contact_person,contact_person_email,contact_person_number,location_latitude,location_longitude,user_id) => {
    const url = ` https://192.168.146.136:8007/api/insertLocation`
    return axios.post(url,{sno,company_name,location_code,location_name,location_address_line1,location_address_line2,location_city,location_state,location_pin_code,location_gst,contact_person,contact_person_email,contact_person_number,location_latitude,location_longitude,user_id}).then(response => response.data).catch(error => console.log(error));
}


// Manufacturer Master

export const TotalManufacturerapi = async () => {
    const url = `http://192.168.146.136:8007/api/totalManufacturer`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}


export const UpdateManufacturerStatus = async (status,sno) => {
    const url = `http://192.168.146.136:8007/api/deleteManufacturer`
    return axios.post(url,{status,sno}).then(response => response.data).catch(error => console.log(error));
}


export const InsertManufacturer = async (manufacturer_id,manufacturer_name,manufacturer_description,user_id) => {
    const url = `http://192.168.146.136:8007/api/insertManufacturer`
    return axios.post(url,{manufacturer_id,manufacturer_name,manufacturer_description,user_id}).then(response => response.data).catch(error => console.log(error));
}


export const GetManufacturer = async (sno) => {
    const url = ` http://192.168.146.136:8007/api/getManufacturer`
    return axios.post(url,{sno}).then(response => response.data).catch(error => console.log(error));
}

export const UpdateManufacturer = async (sno,manufacturer_name,manufacturer_description,user_id) => {
    const url = `http://192.168.146.136:8007/api/updateManufacturer`
    return axios.post(url,{sno,manufacturer_name,manufacturer_description,user_id}).then(response => response.data).catch(error => console.log(error));
}


// Issue Type Master

export const TotalIssueTypeapi = async () => {
    const url = `http://192.168.146.136:8007/api/totalIssueType`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}


export const UpdateIssueTypeStatus = async (status,sno) => {
    const url = `http://192.168.146.136:8007/api/deleteIssueType`
    return axios.post(url,{status,sno}).then(response => response.data).catch(error => console.log(error));
}

export const InsertIssueType = async (issue_id,issue_type,issue_description,user_id) => {
    const url = `http://192.168.146.136:8007/api/insertIssueType`
    return axios.post(url,{issue_id,issue_type,issue_description,user_id}).then(response => response.data).catch(error => console.log(error));
}

export const GetIssueType = async (sno) => {
    const url = ` http://192.168.146.136:8007/api/getIssueType`
    return axios.post(url,{sno}).then(response => response.data).catch(error => console.log(error));
}

export const UpdateIssueType = async (sno,issue_type,issue_description,user_id) => {
    const url = `http://192.168.146.136:8007/api/updateIssueType`
    return axios.post(url,{sno,issue_type,issue_description,user_id}).then(response => response.data).catch(error => console.log(error));
}


// Contract Type Master

export const TotalContractTypeapi = async () => {
    const url = `http://192.168.146.136:8007/api/totalContractType`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const UpdateContractTypeStatus = async (status,sno) => {
    const url = `http://192.168.146.136:8007/api/deleteContractType`
    return axios.post(url,{status,sno}).then(response => response.data).catch(error => console.log(error));
}

export const InsertContractType = async (contract_id,contract_type,contract_description,user_id) => {
    const url = `http://192.168.146.136:8007/api/insertContractType`
    return axios.post(url,{contract_id,contract_type,contract_description,user_id}).then(response => response.data).catch(error => console.log(error));
}

export const GetContractType= async (sno) => {
    const url = ` http://192.168.146.136:8007/api/getContractType`
    return axios.post(url,{sno}).then(response => response.data).catch(error => console.log(error));
}

export const UpdateContractType = async (sno,contract_type,contract_description,user_id) => {
    const url = `http://192.168.146.136:8007/api/updateContractType`
    return axios.post(url,{sno,contract_type,contract_description,user_id}).then(response => response.data).catch(error => console.log(error));
}

// Ticket Status Master

export const TotalTicketstatusapi = async () => {
    const url = `http://192.168.146.136:8007/api/totalTicketStatus`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const UpdateTicketstatusActive = async (status,sno) => {
    const url = `http://192.168.146.136:8007/api/deleteTicketStatus`
    return axios.post(url,{status,sno}).then(response => response.data).catch(error => console.log(error));
}

export const InsertTicketstatus = async (ticket_id,ticket_status,ticket_description,user_id) => {
    const url = `http://192.168.146.136:8007/api/insertTicketStatus`
    return axios.post(url,{ticket_id,ticket_status,ticket_description,user_id}).then(response => response.data).catch(error => console.log(error));
}

export const GetTicketstatus= async (sno) => {
    const url = ` http://192.168.146.136:8007/api/getTicketStatus`
    return axios.post(url,{sno}).then(response => response.data).catch(error => console.log(error));
}

export const UpdateTicketstatus = async (sno,ticket_status,ticket_description,user_id) => {
    const url = `http://192.168.146.136:8007/api/updateTicketStatus`
    return axios.post(url,{sno,ticket_status,ticket_description,user_id}).then(response => response.data).catch(error => console.log(error));
}



// Vendor Sub Category Master

export const TotalVendSubCateapi = async () => {
    const url = `http://192.168.146.136:8007/api/totalVendorSubCategory`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const DeleteVendSubCateStatus = async (status,sno) => {
    const url = `http://192.168.146.136:8007/api/deleteVendorSubCategory`
    return axios.post(url,{status,sno}).then(response => response.data).catch(error => console.log(error));
}

export const InsertVendSubCate = async (vendor_sub_category_id,vendor_category,vendor_sub_category,vendor_sub_category_description,user_id) => {
    const url = `http://192.168.146.136:8007/api/insertVendorSubCategory`
    return axios.post(url,{vendor_sub_category_id,vendor_category,vendor_sub_category,vendor_sub_category_description,user_id}).then(response => response.data).catch(error => console.log(error));
}

export const GetVendSubCate= async (sno) => {
    const url = ` http://192.168.146.136:8007/api/getVendorSubCategory`
    return axios.post(url,{sno}).then(response => response.data).catch(error => console.log(error));
}

export const UpdateVendSubCate = async (sno,vendor_category,vendor_sub_category,vendor_sub_category_description,user_id) => {
    const url = `http://192.168.146.136:8007/api/updateVendorSubCategory`
    return axios.post(url,{sno,vendor_category,vendor_sub_category,vendor_sub_category_description,user_id}).then(response => response.data).catch(error => console.log(error));
}


// Service Action Type Master

export const TotalServiceActionTypeapi = async () => {
    const url = `http://192.168.146.136:8007/api/totalServiceAction`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const DeleteServiceActionTypeStatus = async (status,sno) => {
    const url = `http://192.168.146.136:8007/api/deleteServiceAction`
    return axios.post(url,{status,sno}).then(response => response.data).catch(error => console.log(error));
}

export const InsertServiceActionType = async (service_action_id,service_action_type,service_action__description,user_id) => {
    console.log(service_action_id,service_action_type,service_action__description,user_id)
    const url = `http://192.168.146.136:8007/api/insertServiceAction`
    return axios.post(url,{service_action_id,service_action_type,service_action__description,user_id}).then(response => response.data).catch(error => console.log(error));
}

export const GetServiceActionType= async (sno) => {
    const url = ` http://192.168.146.136:8007/api/getServiceAction`
    return axios.post(url,{sno}).then(response => response.data).catch(error => console.log(error));
}

export const UpdateServiceActionType = async (sno,service_action_type,service_action__description,user_id) => {
    const url = `http://192.168.146.136:8007/api/updateServiceAction`
    return axios.post(url,{sno,service_action_type,service_action__description,user_id}).then(response => response.data).catch(error => console.log(error));
}