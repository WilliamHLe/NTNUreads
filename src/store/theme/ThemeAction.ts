import { LIGHT_THEME, DARK_THEME } from "./models/actions";

export const lightTheme = () => ({
    type: LIGHT_THEME
})

export const darkTheme = () => ({
    type: DARK_THEME
})
