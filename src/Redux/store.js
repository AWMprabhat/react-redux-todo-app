import { legacy_createStore } from "redux";
import { reducer as TodoReducer } from "./reducer";

const store=legacy_createStore(TodoReducer);
export{ store };