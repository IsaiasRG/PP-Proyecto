import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name:"counter",
    initialState: {
        value:0,
    },
    reducers: {
        sumar: (state) => {
            state.value++
        },
        restar: (state) => {
            state.value--
        }
    }
})

export const { sumar, restar } = counterSlice.actions
export default counterSlice.reducer