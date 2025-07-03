import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITeacherInitialState {
    teacherName: string;
    teacherPassword: string;
}

const teacherInitialState: ITeacherInitialState = {
    teacherName: "",
    teacherPassword: "",
}

const teacherSlice = createSlice({
    name: "teacherSlice",
    initialState: teacherInitialState,
    reducers: {
        setTeacherName(state: ITeacherInitialState, action: PayloadAction<ITeacherInitialState>) {
            state.teacherName = "Bishal Rijal"
        },
        setTeacherPassword(state, action) {
            state.teacherPassword = action.payload.teacherPassword;
        }
    }
})

export { setTeacherName, teacherPassword }

export default teacherSlice.reducer;