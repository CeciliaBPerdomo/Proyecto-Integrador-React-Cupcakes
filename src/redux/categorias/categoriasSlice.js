import { createSlice } from "@reduxjs/toolkit";
import { categorias } from "../../data/categorias"

const initial_state = {
    categorias: categorias,
}

export const categoriasSlice = createSlice({
    name: "categorias",
    initialState: initial_state,
    reducers: {
        getCategorias: state => {
            return state
        }
    }
})

export const { getCategorias } = categoriasSlice.actions
export default categoriasSlice.reducer