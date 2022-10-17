import axios from 'axios';

export const UserLogin = async (userid, password) => {
    const url = `http://182.76.62.178:8114/api/login`
    return axios.post(url, { userid, password }).then(response => response.data).catch(error => console.log(error));
}

//  Iperioscope Series start
export const Totalseriesapi = async () => {
    const url = `http://182.76.62.178:8114/api/totalseries`
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

// export const ActiveServiceCompliance = async () => {
//     const url = `http://182.76.62.178:8114/api/activeservicecompliance`
//     return axios.get(url).then(response => response.data).catch(error => console.log(error));
// }


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

// export const Activedevicetask = async () => {
//     const url = `http://182.76.62.178:8114/api/activedevicetask`
//     return axios.get(url).then(response => response.data).catch(error => console.log(error));
// }

// export const GetDevicetaskfrequency = async (task) => {
//     const url = `http://182.76.62.178:8114/api/getdevicetaskfrequency`
//     return axios.post(url, { task }).then(response => response.data).catch(error => console.log(error));
// }











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



// export const Activedevice = async () => {
//     const url = `http://182.76.62.178:8114/api/activedevice`
//     return axios.get(url).then(response => response.data).catch(error => console.log(error));
// }






// export const Getdevicetaskcompliancebyname = async (name) => {
//     const url = `http://182.76.62.178:8114/api/getdevicetaskcompliancebyname`
//     return axios.post(url, { name }).then(response => response.data).catch(error => console.log(error));
// }

// export const Adddevicetaskcompliance = async (devicename, services, add_compliance, remark, username) => {
//     const url = `http://182.76.62.178:8114/api/adddeviceTaskcomp`
//     return axios.post(url, { devicename, services, add_compliance, remark, username }).then(response => response.data).catch(error => console.log(error));
// }

// export const getdevicetaskcomp = async (sno) => {
//     const url = `http://182.76.62.178:8114/api/getdevicetaskcomp`
//     return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
// }

// export const Updatedevicetaskcomp = async (sno, devicename, services, add_compliance, remark, username) => {
//     const url = `http://182.76.62.178:8114/api/updatedevicetaskcomp`
//     return axios.post(url, { sno, devicename, services, add_compliance, remark, username }).then(response => response.data).catch(error => console.log(error));
// }

// export const Updatedevicecompstatus = async (status, sno) => {
//     const url = `http://182.76.62.178:8114/api/updatedevicecompstatus`
//     return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
// }

// export const Getdevicetaskbyname = async (name) => {
//     const url = `http://182.76.62.178:8114/api/getdevicetaskbyname`
//     return axios.post(url, { name }).then(response => response.data).catch(error => console.log(error));
// }

// export const Adddevicetaskby = async (devicename, services, task, completion_date, remark, username) => {
//     const url = `http://182.76.62.178:8114/api/adddevicetaskes`
//     return axios.post(url, { devicename, services, task, completion_date, remark, username }).then(response => response.data).catch(error => console.log(error));
// }

// export const Updatedevicetaskastatus = async (status, sno) => {
//     const url = `http://182.76.62.178:8114/api/updatedevicetaskastatus`
//     return axios.post(url, { status, sno }).then(response => response.data).catch(error => console.log(error));
// }


// export const GetDevicestask = async (sno) => {
//     const url = `http://182.76.62.178:8114/api/Getdevicestask`
//     return axios.post(url, { sno }).then(response => response.data).catch(error => console.log(error));
// }


// export const UpdateDevicetaskes = async (sno, devicename, services, task, task_frequency, completion_date, remark, username) => {
//     const url = `http://182.76.62.178:8114/api/updatedevicetaskes`
//     return axios.post(url, { sno, devicename, services, task, task_frequency, completion_date, remark, username }).then(response => response.data).catch(error => console.log(error));
// }



