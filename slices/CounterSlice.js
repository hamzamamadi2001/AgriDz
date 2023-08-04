import { createSlice, current } from '@reduxjs/toolkit'
 


export const counterSlice = createSlice({
    name: 'name',
    initialState:{name: "تاست",num:1},
    reducers: {
        changeTheName: (state, action) => {
            //passing the index in action.payload
            console.log(current(state), action.payload)
            state.name = action.payload.name
            state.num = action.payload.numm


        },
    },
})

// Action creators are generated for each case reducer function
export const { changeTheName} = counterSlice.actions

export default counterSlice.reducer