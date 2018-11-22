import React from "react";
import { shallow } from "enzyme";
import Message from "./Message";

describe("Message", function() {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Message />);
    });

    it("renders without crashing", () => {
        expect(wrapper).toExist();
    });

    it("matches snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
