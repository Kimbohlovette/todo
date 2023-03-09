import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../fbConfig";
import { TodoType } from "../../types";
import { AppDispatch } from "../../app/store";

interface InitialState {
	status: string;
	todos: TodoType[];
	statusMge?: string;
}

export const addTodo = createAsyncThunk(
	"todo/createTodo",
	async (todo: TodoType, dispatch) => {
		await addDoc(collection(db, "todos"), todo)
			.then((response) => {
				dispatch.dispatch(todoActions.addTodo({...todo, id: response.id}));
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				console.log("fulfilled");
			});
	}
);

export const fetchTodos = createAsyncThunk(
	"todo/fetchTodos",
	async (dispatch: AppDispatch) => {
		const docsRef = collection(db, "todos");
		const docsSnapshot = await getDocs(docsRef);

		const newTodos: TodoType[] = [];

		docsSnapshot.forEach((doc) => {
			console.log("doc", doc.data());

			const data = doc.data();
			const todo = {
				id: doc.id,
				title: data["title"],
				desc: data["desc"],
				completed: data["completed"],
				dateAdded: data["dateAdded"]
			};
			newTodos.push(todo);
		});
		dispatch(todoActions.overideTodo(newTodos));

		console.log("done");
	}
);

console.log("Lovette");

const initialState: InitialState = {
	status: "idle",
	todos: []
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.todos = [...state.todos, action.payload];
		},
		overideTodo: (state, action) => {
			state.todos = [...action.payload];
		},
		clearTodos: (state) => {
			state.todos = [];
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(addTodo.pending, (state) => {
				state.status = "loading";
			})
			.addCase(addTodo.fulfilled, (state) => {
				state.status = "idle";
				state.statusMge += "Todo added successfully";
			})
			.addCase(addTodo.rejected, (state) => {
				state.status = "failed";
				state.statusMge =
					"An error occured while adding the todo! Try again later.";
			});
	}
});

export default todoSlice.reducer;
export const todoActions = todoSlice.actions;
