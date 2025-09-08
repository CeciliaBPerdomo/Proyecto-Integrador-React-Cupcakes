import axios from "axios";
import { api_base_url } from "../utilidades/constantes"

export const createUser = async (nombre, email, password) => {
    try {
        const response = await axios.post(`${api_base_url}/auth/register`, {
            nombre,
            email,
            password,
        })
        console.log(response)
        return response.data
    } catch (error) {
        console.error(error)
        return alert(error.response.data.errors[0].msg)
    }
} 

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${api_base_url}/auth/login`, {
            email,
            password
        })
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        return alert(error.response.data.msg)
    }
}