import { createSlice } from "@reduxjs/toolkit";
const photosSlice = createSlice({
    name: 'photo',
    initialState: {
        photo: []
    },
    reducers: {
        savePhoto(state, action) {
            state.photo = action.payload.file;
            console.log(action.payload.file);
        }
    }
})


export const {savePhoto} = photosSlice.actions

export default photosSlice.reducer