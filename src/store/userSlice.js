import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        loggedIn: false
    },
    reducers: {
        addUser(state, action){
            console.log(state)
            console.log(action)
            state.users.push(action.payload);
        },
        login (state) {
            state.loggedIn = true
        },
        logout(state ){
            state.loggedIn = true
        },
    },
})

export const {addUser, login, logout} = userSlice.actions

export const selectUser = (state) => state.users.users

export default userSlice.reducer;