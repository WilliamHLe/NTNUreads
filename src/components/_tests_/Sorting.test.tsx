import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from "enzyme";
import {Button, Form, FormControl} from "react-bootstrap";
import Sorting from "../Sorting";
import Search from "../search/Search";

const props = jest.fn()

it("check whether function prop is correctly passed through the component", () => {

    const wrapper = mount(<Sorting changeSort={props} />);
    expect(wrapper.props().changeSort).toEqual(props);
});



it("renders form", () => {
    const wrapper = shallow(<Sorting changeSort={props}/>);
    const header = <div className="my-3">Sorter etter:</div>
    const option = wrapper.find("option");

    expect(option).toHaveLength(4)
    expect(wrapper.contains(header)).toEqual(true);
});