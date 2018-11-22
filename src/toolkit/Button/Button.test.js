import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("Button", function() {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Button />);
    });

    it("renders without crashing", () => {
        expect(wrapper).toExist();
    });

    it("matches snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
