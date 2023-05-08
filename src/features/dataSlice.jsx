import { createSlice } from '@reduxjs/toolkit';

// type지정

// export interface dumpData {
//     dump: string
//     dump2: number | null
// }

// Initial State

const initialState = {
    data: [],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        // Reducer 작성
        setData: (state, action) => {
            console.log(action);
            state.data = action.payload;
        },
    },
});

const { reducer, actions } = dataSlice;
export const { setData } = actions;
export default dataSlice.reducer;
