import {configureStore} from '@reduxjs/toolkit';
import { todoSlice } from '../feature/todos/todoSlice';

export const store = configureStore({
    reducer: todoSlice.reducer
});