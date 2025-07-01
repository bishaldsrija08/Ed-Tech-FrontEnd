import { createSlice } from "@reduxjs/toolkit";

const teacherSlice = createSlice({
    name: "teacherSlice",
    initialState: {
        teacherName: "",
        teacherPassword: "",
    },
    reducers: {
        setTeacherName(state, action) {
            state.teacherName = "Bishal Rijal"
        },
        setTeacherPassword(state, action) {
            state.teacherPassword = "password123"
        }
    }
})

const { setTeacherName, teacherPassword } = teacherSlice.actions;
setTeacherName()