import {createStore, combineReducers} from "redux";
import {themeReducer} from "./theme/ThemeReducer";

export const rootReducer = combineReducers({ themeReducer })
//rootReducer will include all our reducers

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
