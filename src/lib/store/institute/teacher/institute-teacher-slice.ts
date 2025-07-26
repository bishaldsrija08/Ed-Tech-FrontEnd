// Institute le teacher create, update and delete jasto kam haru garney

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstituteTeacherInitialData, IInstituteTeacherInitialDataTeacher, TeacherExpertise } from "./institute-teacher-type";
import { Status } from "@/lib/type/type";
import { AppDispatch } from "../../store";
import API from "@/lib/http";


const initialState: IInstituteTeacherInitialData = {
    teacher: {
        course: {
            courseName: "",
            coursePrice: "",
            courseThumbnail: ""
        },
        teacherEmail: "",
        teacherExpertise: TeacherExpertise.Beginner,
        teacherPhoneNumber: "",
        teacherJoinDate: "",
        teacherName: "",
        teacherSalary: "",
        teacherPhoto: ""
    },
    status: Status.LOADING
}

const instituteTeacherSlice = createSlice({
    name: "institute-teacher",
    initialState: initialState,
    reducers: {
        setStatus(state: IInstituteTeacherInitialData, action: PayloadAction<Status>) {
            state.status = action.payload
        },
        setTeacher(state: IInstituteTeacherInitialData, action: PayloadAction<IInstituteTeacherInitialDataTeacher>) {
            state.teacher = action.payload
        }
    }

})

const { setStatus, setTeacher } = instituteTeacherSlice.actions
export default instituteTeacherSlice.reducer



//Api cll
export function createInstituteTeacher(data: IInstituteTeacherInitialDataTeacher) {
    return async function createInstituteTeacherThunk(dispatch: AppDispatch) {
        try {
            const response = await API.post("/institute/teacher", data)
            if (response.status === 200) {
                dispatch(setStatus(Status.SUCCESS))
            } else {
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR))
            console.log(error)
        }
    }
}

export function fetchInstituteTeacher() {
    return async function fetchInstituteTeacherThunk(dispatch: AppDispatch) {
        try {
            const response = await API.post("/institute/teacher")
            if (response.status === 200) {
                response.data.data.length>0 && dispatch(setTeacher(response.data.data))
                dispatch(setStatus(Status.SUCCESS))
            } else {
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR))
            console.log(error)
        }
    }
}

export function deleteInstituteTeacherById(id:string) {
    return async function deleteInstituteTeacherByIdThunk(dispatch: AppDispatch) {
        try {
            const response = await API.delete("/institute/teacher"+id)
            if (response.status === 200) {
                dispatch(setStatus(Status.SUCCESS))
                // Pop out that teacher from state
            } else {
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR))
            console.log(error)
        }
    }
}