import {createSlice} from "@reduxjs/toolkit"

const itemSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        addInitialItems: (state, action) => {
            console.log("Reducer", state, action)
            return action.payload;
        }
    }
})

export const itemsActions = itemSlice.actions; 

export default itemSlice;
