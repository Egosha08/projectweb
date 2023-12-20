import { configureStore } from "@reduxjs/toolkit";
import { todoSlicer } from "../features/Todo/todo";


const store = configureStore({
	reducer:{
			todo:todoSlicer
	}
})

export default store;
export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch