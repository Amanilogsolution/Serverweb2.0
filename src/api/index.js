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


export const Statusdevicetype= async(status,sno)=>{
    // console.log(status,sno)
    const url=`http://192.168.146.136:8003/api/updatetypestatus`
    return axios.post(url,{status,sno}).then(response=>response.data).catch(error=>console.log(error));
}
