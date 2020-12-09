import { createStore } from "redux";
import reducer from "./reducer";
import initialState from "./initial";

// setup store
const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;