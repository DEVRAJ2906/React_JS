import { createContext, useContext } from "react";

export const TodoContext = createContext(
    {
        todos : [
            {
                id : 1,
                todo : "todo message",
                completed : false
            }
        ],
        addTodo : (todo) => {},
        deleteTodo : (id) => {},
        updateTodo : (id, todo) => {},
        isToggleComplete : (id) => {}
    }
);

export const useTodo = () => {
   return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.Provider;