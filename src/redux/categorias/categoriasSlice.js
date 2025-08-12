import { createSlice } from "@reduxjs/toolkit";
import { categorias } from "../../data/categorias"

const initial_state = {
    categorias: categorias,
    selectedCategoria: null, 
}

export const categoriasSlice = createSlice({
    name: "categorias",
    initialState: initial_state,
    reducers: {
        getCategorias: state => {
            return state
        },

        seleccionarCategoria: (state, action) => {
            return {
                ...state,
                selectedCategoria: action.payload !== state.selectedCategoria ? action.payload: null,
            }
        } 
    }
})

export const { getCategorias, seleccionarCategoria } = categoriasSlice.actions
export default categoriasSlice.reducer