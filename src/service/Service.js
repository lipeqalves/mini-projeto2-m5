import axios from "axios";

export const Api = 
    axios.create({
        baseURL:"http://viacep.com.br/ws"
    })
