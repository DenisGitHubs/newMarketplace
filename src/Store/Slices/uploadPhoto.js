
import { createSlice } from "@reduxjs/toolkit";
const photosUploadSlice = createSlice({
    name: 'uploadPhoto',
    initialState: {
        photoUpload: [null, null, null, null, null]
    },
    reducers: {
        saveUploadPhoto(state, action) {
            const i = action.payload.file.i
            state.photoUpload[i] = action.payload.file;
            console.log(action.payload.file);
        }
    }
})
export const {saveUploadPhoto} = photosUploadSlice.actions
export default photosUploadSlice.reducer