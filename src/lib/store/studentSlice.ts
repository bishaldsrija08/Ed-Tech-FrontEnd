import { createSlice } from "@reduxjs/toolkit";

createSlice({
    name: "studentSlice",
    initialState: {
        studentName: "",
        studentPassword: ""
    },
    reducers: {
        setStudentName(state, action) {
            state.studentName = "Hello"
        }
    }
})

const { setStudentName, studentPassword } = studentSlice.actions;

// dispatch(setStudentName());

export { setStudentName, studentPassword }
export default studentSlice.reducer;