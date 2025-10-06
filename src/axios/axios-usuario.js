import axios from "axios";
import { api_base_url } from "../utilidades/constantes"

// Sweet Alert 
import Swal from 'sweetalert2'

export const createUser = async (nombre, email, password) => {
    try {
        const response = await axios.post(`${api_base_url}/auth/register`, {
            nombre,
            email,
            password,
        })
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
        return response.data
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Ocurrió un error 😢: ${error.response.data.msg}`,
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
            position: 'center',
            background: "var(--color-primary-light)",
        });
        return false
    }
}