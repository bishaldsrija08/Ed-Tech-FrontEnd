import { createSlice } from "@reduxjs/toolkit";

createSlice({
    name: "userSlice",
    initialState: {
        name: null,
        address: null
    },
    reducers: {
        //state is the current state, action is the dispatched action
        setName(state, action) {
            state.name= "bishal"
        },
        setAddress() {

        }
    }
})