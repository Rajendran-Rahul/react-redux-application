import { rootReducer } from "@/redux/reducer";
import { legacy_createStore as createStore } from "redux";

const store = createStore(rootReducer);

export default store;
