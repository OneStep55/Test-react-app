import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

//  async function to get all users from url
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function (_, {rejectWithValue}) {

        try {
            const res = await fetch('https://reqres.in/api/users?page=2')
            if (!res.ok) {
                throw new Error('Eror when fetching users')
            }
            const data = await res.json();
            return data.data;
        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
)

// Create user slise 

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        loggedIn: false,
        loadedUsers: [],
        eror: ''
    },
    reducers: {
        // function for adding new user / register
        addUser(state, action) {
            console.log(state)
            console.log(action)
            state.users.push(action.payload);
        },

        //function for login
        login(state) {
            state.loggedIn = true
        },

        // function for logout
        logout(state) {
            state.loggedIn = false
        },
    },

    // extra redusers for fetchUsers function
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.eror = ''
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.loadedUsers = action.payload
        },
        [fetchUsers.rejected]: (state, action) => {
            state.eror = action.payload
        }
    }
})

// export all actions
export const { addUser, login, logout } = userSlice.actions

export default userSlice.reducer;