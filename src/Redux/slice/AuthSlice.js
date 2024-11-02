import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoggedin: localStorage.getItem('isLoggedin') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:  {

    }
})

// export {} = authSlice.actions;
export default authSlice.reducer;



