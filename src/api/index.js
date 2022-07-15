import axios from 'axios';

export const UserLogin = async (userid, password) => {
    console.log('Login', userid, password)
    const url = `http://192.168.146.136:8003/api/login`
    return axios.post(url, { userid, password }).then(response => response.data).catch(error => console.log(error));
}

export const TotalDevicetype = async () => {
    const url = `http://192.168.146.136:8003/api/totaldevicetype`
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
}


