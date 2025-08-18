import { createSlice } from "@reduxjs/toolkit";
import { precio_envio } from "../../utilidades/constantes";
import { agregarCupcake, borrarCupacke, resetEnvio } from "./utilesCarrito";


const inital_state = {
    hidden: true,
    itemsCarrito: [],
    envio: 0,
}

const carritoSlice = createSlice({
    name: 'carrito',
    initialState: inital_state,

    reducers: {
        agregarCarrito: (state, actions) => {
            return {
                ...state,
                envio: precio_envio,
                itemsCarrito: agregarCupcake(state.itemsCarrito, actions.payload)
            }
        },

        borrarDelCarrito: (state, actions) => {
            return {
                ...state,
                itemsCarrito: borrarCupacke(state.itemsCarrito, actions.payload),
                envio: resetEnvio(state.itemsCarrito, precio_envio),
            }
        },

        vaciarCarrito: (state) => {
            return {
                ...state,
                envio: 0,
                itemsCarrito: []
            }
        },

        toggleCarrito: (state) => {
            return {
                ...state,
                hidden: !state.hidden,
            }
        }
    }
})

export const { 
    agregarCarrito, 
    borrarDelCarrito, 
    vaciarCarrito, 
    toggleCarrito 
} = carritoSlice.actions

export default carritoSlice.reducer