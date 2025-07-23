import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialState } from "./types";
import API from "../http";



const userInitialState: IUserInitialState = {
    name: null,
    address: null
}

const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitialState,
    reducers: {
        // state --> mathi ko intialState 
        // action --> trigger garda pathaune data aaune kura 
        setName(state: IUserInitialState, action: PayloadAction<string>) {
            state.name = action.payload
        },

        setAddress(state: IUserInitialState, action: PayloadAction<string>) {
            state.address = action.payload
        },
        sethaha(state, action) {

        }
    }
})

// action 
const { setName, setAddress, sethaha } = userSlice.actions
export default userSlice.reducer
export { setName, setAddress, sethaha }

/*
const [name,setName] = useState(null)
const [age,setAge]
const [address,setAddress]= useState()

reducers --> kunai function jasko through bata hami kehi programmed 

*/

//Register User
function registerUser() {
    return async function registerUserThunk() {
        try {
            const response = await API.post("/user/register")
            if (response.status === 200) {
                dispatchEvent(setName(response.data.name))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

//Login Usser
function loginUser() {
    return async function loginUserThunk() {
        const response = await API.post("/user/login")
    }
}

//Forgot password
function forgotPassword() {
    return async function forgotPasswordThunk() {
        const response = await API.post("/user/forgot-password")
        console.log(response)
    }
}