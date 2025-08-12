import { createSlice } from "@reduxjs/toolkit";
import { cocineros } from "../../data/cocineros"

const initial_state = {
    cocineros: cocineros,
}

export const cocinerosSlice = createSlice({
    name: "cocineros", 
    initialState: initial_state,
    reducers: {
        getCocineros: state => {
            return state
        }
    }
})

export const { getCocineros } = cocinerosSlice.actions
export default cocinerosSlice.reducer