import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const response = await fetch("http://localhost:9999/todos/todolist");
    if (response.ok) {
      const todos = await response.json();
      return { todos };
    }
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload) => {
    const response = await fetch("http://localhost:9999/todos/todolist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        taxValue: payload.taxValue,
        priceValue: payload.priceValue,
      }),
    });
    if (response.ok) {
      const todo = await response.json();
      return { todo };
    }
  }
);

export const editTodoAsync = createAsyncThunk(
  "todos/editTodoAsync",
  async (payload) => {
    const response = await fetch(
      `http://localhost:9999/todos/editTodolist/${payload.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          taxValue: payload.taxValue,
          priceValue: payload.priceValue,
        }),
      }
    );
    if (response.ok) {
      await response.json();
      return {
        id: payload.id,
        taxValue: payload.taxValue,
        priceValue: payload.priceValue,
      };
    }
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (payload) => {
    fetch(`http://localhost:9999/todos/todolist/${payload.id}`, {
      method: "DELETE",
    });
    return { id: payload.id };
  }
);

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    editTodoAsyncFulfilled: (state, action) => {
      const { id, taxValue, priceValue } = action.payload;
      const todoToEdit = state.find((todo) => todo.id === id);

      if (todoToEdit) {
        todoToEdit.taxValue = taxValue;
        todoToEdit.priceValue = priceValue;
      }
      console.log("edit...");
    },
  },
  extraReducers: {
    [addTodoAsync.fulfilled]: (state, action) => {
      console.log("เพิ่ม");
      state.push(action.payload.todo);
    },
    [deleteTodoAsync.fulfilled]: (state, action) => {
      console.log("Deleted...");
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    [editTodoAsync.fulfilled]: (state, action) => {
      // Call the editTodoAsyncFulfilled reducer from here
      // This helps ensure that the payload structure is handled correctly
      todoSlice.caseReducers.editTodoAsyncFulfilled(state, action);
    },
    [editTodoAsync.fulfilled]: (state, action) => {
      const updatedTodo = action.payload; // Check the payload structure
      const index = state.findIndex((todo) => todo.id === updatedTodo.id);

      if (index !== -1) {
        // Update the specific todo item
        state[index] = updatedTodo;
      }
    },
  },
});
export const { addTodo, editTodo, deleteTodo, editTodoAsyncFulfilled } =
  todoSlice.actions;
export default todoSlice.reducer;
