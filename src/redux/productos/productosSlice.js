import { createSlice } from "@reduxjs/toolkit";
import { TotalProductos, cupcakes } from "../../data/productos"

const initial_state = {
    productos: cupcakes,
    totalProductos: TotalProductos
}

export const productosSilce = createSlice({
    name: "productos",
    initialState: initial_state,
    reducers: {
        getProductos: state => {
            return state
        }
    }
})

export const { getProductos } = productosSilce.actions
export default productosSilce.reducer