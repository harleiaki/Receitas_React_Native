import axios from 'axios';
/*
//Rodar com ipv4 json-server --watch -d 180 --host 192.168.0.11 db.json
*/

const api  = axios.create({
    baseURL:'http://192.168.0.11:3000'
})

export default api;
