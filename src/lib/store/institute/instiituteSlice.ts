import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Status } from "@/lib/type/type"
import { IInstitute, IInstituteInitialData } from "./instituteSlice.type"

const initialState: IInstituteInitialData = {
  institute: {
    instituteAddress: "",
    instituteEmail: "",
    institutePhoneNumber: "",
    instituteName: ""
  },
  status: Status.LOADING
}

const instituteSlice = createSlice({
  name: "institute",
  initialState,
  reducers: {
    setInstitute(state, action: PayloadAction<IInstitute>) {
      state.institute = action.payload
    },
    setStatus(state, action: PayloadAction<Status>) {
      state.status = action.payload
    }
  }
})

export const { setInstitute, setStatus } = instituteSlice.actions
export default instituteSlice.reducer



// API custom thunk
