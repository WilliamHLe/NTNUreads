import React from "react";
import {Form} from "react-bootstrap";

/*
interface ThemeSwitchProps {
    light: () => void;
    dark: () => void;
    theme: string;
}
 */

const ThemeSwitch = () => {

    return (
        <div>
            <Form>
                <Form.Check inline
                    type="switch"
                    id="theme-switch"
                    label="Theme"
                    //value={theme}
                    //onChange={theme==="light" ? light : dark}
                />
            </Form>
        </div>
    );
}

export default ThemeSwitch;
