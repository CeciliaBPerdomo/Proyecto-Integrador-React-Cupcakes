import { createSlice } from "@reduxjs/toolkit";
import { recomendadosAleatorios } from "../../utilidades/recomendadosAleatorios";

const initial_state = {
    recomendados: recomendadosAleatorios(3)
}

export const recomendadosSlice = createSlice({
    name: "recomendados",
    initialState: initial_state,
    reducers: {
        getAleatorios: state => {
            return state
        }
    }
})

export const getAleatorios = recomendadosSlice.actions
export default recomendadosSlice.reducer