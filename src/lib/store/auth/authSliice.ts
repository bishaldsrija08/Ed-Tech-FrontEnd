import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, IRegisterData, IUserData } from "./authSlice.type";
import { Status } from "@/lib/type/type";
import API from "@/lib/http";
import { AppDispatch } from "../store";

const initialState: IInitialState = {
    user: {
        username: "",
        password: ""
    },
    status: Status.LOADING
}


export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser(state: IInitialState, action: PayloadAction<IUserData>) {
            state.user = action.payload
        },
        setStatus(state: IInitialState, action: PayloadAction<Status>) {
            state.status = action.payload
        }
    }
})


const { setUser, setStatus } = authSlice.actions
export default authSlice.reducer

// API calls
export function registerUser(data: IRegisterData) {
    return async function registerUserThunk(dispatch: AppDispatch) {
        try {
            const response = await API.post("auth/register", data)
            if (response.status === 201) {
                dispatch(setStatus(Status.SUCCESS))
            } else {
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}