import * as types from "./actionTypes"


const intialState = {
    todos:[],
    isLoading:false,
    isError:false
}

const reducer=(state={...intialState},action)=>{
    const {type,payload}=action;
    switch (type) {
      case types.GET_TODO_LISTS_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case types.GET_TODO_LISTS_SUCCESS:
        return {
          ...state,
          todos: payload,
          isLoading: false,
          isError: false,
        };
      case types.GET_TODO_LISTS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };

      case types.ADD_TODO_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case types.ADD_TODO_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.ADD_TODO_SUCCESS:
        let newtodo = [...state.todos, payload];
        return {
          ...state,
          todos: newtodo,
          isLoading: true,
          isError: false,
        };

      case types.TOGGLE_TODO_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case types.TOGGLE_TODO_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.TOGGLE_TODO_SUCCESS:
        let newToggledTodos = state.todos.map((el) =>
          el.id === payload.id ? payload : el
        );
        return {
          ...state,
          todos: newToggledTodos,
          isLoading: true,
          isError: false,
        };

      case types.REMOVE_TODO_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case types.REMOVE_TODO_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.REMOVE_TODO_SUCCESS:
        console.log(payload);
        let lefttodos = state.todos.filter((item) => item.id !== payload);
        return {
          ...state,
          todos: lefttodos,
          isLoading: true,
          isError: false,
        };

      case types.UPDATE_TODO_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case types.UPDATE_TODO_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case types.UPDATE_TODO_SUCCESS:
        let updatetodo = state.todos.map((item) => {
            if(item.id===payload.id)
            {
                item=payload
            }
            return item;
        });
        return {
          ...state,
          todos: updatetodo,
          isLoading: true,
          isError: false,
        };

      default:
        return state;
    }

}
export {reducer}