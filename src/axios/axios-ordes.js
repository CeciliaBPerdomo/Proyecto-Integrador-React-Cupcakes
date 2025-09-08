import axios from "axios"
import { fetchOrderFail, fetchOrdersStart } from "../redux/ordenes/ordenesSlice"
import { api_base_url } from "../utilidades/constantes"

//  no se pueden utilizar hooks fuera de componentes
export const getOrders = async (dispatch) => {
    dispatch(fetchOrdersStart())
    try {
        const orders = await axios.get(`${api_base_url}/orders`)
    } catch (error) {
        console.log(error)
        dispatch(fetchOrderFail("Ups!, algo salió mal."))
    }
}