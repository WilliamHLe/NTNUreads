import {LIGHT_THEME, DARK_THEME, ThemeActionTypes} from "./models/actions";
import {Theme} from "./models/Theme";
import {Action, Reducer} from "redux";

const defaultState: Theme = {
    theme: "LIGHT"
}

export const themeReducer: Reducer<Theme, Action> = (state = defaultState, action: ThemeActionTypes) => {
    //takes in the dispatched action, find type and return different states according to type
    //here we only have one type, and the default state

    const nextState = {
        theme: state.theme
    }

    switch (action.type) {
        case LIGHT_THEME:
            nextState.theme = "DARK";
            return nextState
        case DARK_THEME:
            nextState.theme = "LIGHT";
            return nextState
        default:
            return state
    }
}
