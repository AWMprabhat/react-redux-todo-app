import * as types from "./actionTypes";

const getTodoListsRequest = () => {
  return { type: types.GET_TODO_LISTS_REQUEST };
};

const getTodoListsSuccess = (payload) => {
  return { type: types.GET_TODO_LISTS_SUCCESS, payload };
};

const getTodoListsFailure = () => {
  return { type: types.GET_TODO_LISTS_FAILURE };
};

const addTodoFailure = () => {
  return { type: types.ADD_TODO_FAILURE };
};
const addTodoSuccess = (payload) => {
  return { type: types.ADD_TODO_SUCCESS,payload };
};
const addTodoRequest = () => {
  return { type: types.ADD_TODO_REQUEST };
};

const toggleTodoFailure = () => {
  return { type: types.TOGGLE_TODO_FAILURE };
};
const toggleTodoSuccess = (payload) => {
  return { type: types.TOGGLE_TODO_SUCCESS, payload };
};
const toggleTodoRequest = () => {
  return { type: types.TOGGLE_TODO_REQUEST };
};

const removeTodoFailure = () => {
  return { type: types.REMOVE_TODO_FAILURE };
};
const removeTodoSuccess = (payload) => {
  return { type: types.REMOVE_TODO_SUCCESS, payload };
};
const removeTodoRequest = () => {
  return { type: types.REMOVE_TODO_REQUEST };
};


const updateTodoFailure = () => {
  return { type: types.UPDATE_TODO_FAILURE };
};
const updateTodoSuccess = (payload) => {
  return { type: types.UPDATE_TODO_SUCCESS, payload };
};
const updateTodoRequest = () => {
  return { type: types.UPDATE_TODO_REQUEST };
};
export {
  getTodoListsRequest,
  getTodoListsFailure,
  getTodoListsSuccess,
  addTodoFailure,
  addTodoSuccess,
  addTodoRequest,
  toggleTodoFailure,
  toggleTodoRequest,
  toggleTodoSuccess,
  removeTodoFailure,
  removeTodoRequest,
  removeTodoSuccess,
  updateTodoFailure,
  updateTodoRequest,
  updateTodoSuccess
};
