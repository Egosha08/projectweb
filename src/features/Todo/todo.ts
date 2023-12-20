import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosTodo from "../../api/axiosTodo";
import {AxiosRequestConfig, AxiosResponse} from "axios";



type todoState = {
	
	loading: boolean;
  error: Error | null;
	todos:ITodo[]
	
};
interface ITodo {
	key?: string
	text: string

}

const initialState: todoState = {
	
	loading: false,
  error: null,
  todos: [],
	
};

export const fetchTodo = createAsyncThunk("todo/fetch", async () => {
  const response = await axiosTodo.get<AxiosRequestConfig, AxiosResponse>("todo.json");
	if(response != null) {
		const data = Object.keys(response.data).map(key => {
			return {key: key,...response.data[key]}
		});

		return data;
	} else {
		return [];
	}
	
});

export const postTodo = createAsyncThunk("todo/post", async (payload: ITodo, {dispatch}) => {
  await axiosTodo.post<AxiosRequestConfig, AxiosResponse>("todo.json", payload);
	await dispatch(fetchTodo());
});

export const deleteTodo = createAsyncThunk(
	"todo/delete", 
	async (key:string | undefined) => {
		return await axiosTodo.delete<AxiosRequestConfig, AxiosResponse>(`todo/${key}.json`);
	}
	);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(postTodo.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(postTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error as Error;
      }).addCase(fetchTodo.pending,(state) => {
					state.loading = true;
					
			})
			.addCase(fetchTodo.fulfilled,(state,action) => {
				state.loading = false;
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				state.todos = action.payload
			}).addCase(fetchTodo.rejected,(state,action) => {
				state.loading = false;
				state.error = action.error as Error
				
			})
			.addCase(deleteTodo.pending,(state) => {
				state.loading = true
			})
			.addCase(deleteTodo.fulfilled,(state) => {
				state.loading = false;
				
			})
			.addCase(deleteTodo.rejected,(state,action) => {
				state.loading = false;
				state.error = action.error as Error;
			})

  },
});

export const todoSlicer = todoSlice.reducer;
