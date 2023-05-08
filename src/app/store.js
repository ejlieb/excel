import {
    configureStore,
    ThunkAction,
    Action,
    getDefaultMiddleware,
} from '@reduxjs/toolkit';
import dataReducer from '../features/dataSlice';
export const store = configureStore({
    // Reducer 등록
    reducer: {
        data: dataReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});
