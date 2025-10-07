import axios from "axios"
import { fetchOrderFail, fetchOrdersStart, fetchOrderSuccess } from "../redux/ordenes/ordenesSlice"
import { api_base_url } from "../utilidades/constantes"

//  no se pueden utilizar hooks fuera de componentes
export const obtenerOrdenes = async (dispatch, usuarioActual) => {
    dispatch(fetchOrdersStart())
    try {
        const ordenes = await axios.get(`${api_base_url}/orders`, {
            headers: { "x-token": usuarioActual.token }
        })
        if (ordenes) {
            dispatch(fetchOrderSuccess(ordenes.data.data))
            // console.log(ordenes.data.data)
        }
    } catch (error) {
        console.error(error)
        dispatch(fetchOrderFail("Ups!, algo salió mal."))
    }
}

export const crearOrdenes = async(orden, dispatch, usuarioActual) => {
    console.log(usuarioActual.token)
    try {
        const response = await axios.post(`${api_base_url}/orders`, orden, {
            headers: { "x-token": usuarioActual.token }
        })
        if (response) {
            console.log(response)
            obtenerOrdenes(dispatch, usuarioActual)
        }
    } catch (error) {
        console.error(error)
        dispatch(fetchOrderFail("Ups!, algo salió muy mal"))
    }
}