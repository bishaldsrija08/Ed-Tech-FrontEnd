

//collect all slices and store
import { configureStore } from '@reduxjs/toolkit';
import studentSlice from './studentSlice';
import teacherslice from './teacherslice';

const store = configureStore({
    reducer: {
        // Add your slices here
        student: studentSlice,
        teacher: teacherslice
    }  
})