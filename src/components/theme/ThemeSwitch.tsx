import React from "react";
import {Form} from "react-bootstrap";

import {AppState} from "../../store/rootStore";
import {useDispatch, useSelector} from "react-redux";
import {lightTheme, darkTheme} from "../../store/theme/ThemeAction";

import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'


const ThemeSwitch = () => {

    const theme = useSelector((state:AppState) => state.themeReducer.theme)
    //console.log(theme)
    const dispatch = useDispatch();

    const handleChange = () => {
        if (theme === "light") {
            dispatch(lightTheme());
        }
        else {
            dispatch(darkTheme());
        }
    }


    return (
        <div>
            <Form>
                <Form.Check inline
                    type="switch"
                    id="theme-switch"
                    label={theme}
                    value={theme}
                    onChange={handleChange}
                />
            </Form>
        </div>
    );
}

export default ThemeSwitch;
