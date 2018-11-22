import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", function() {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it("renders without crashing", () => {
        expect(wrapper).toExist();
    });

    it("matches snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
