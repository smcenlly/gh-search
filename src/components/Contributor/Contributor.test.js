import React from "react";
import { shallow } from "enzyme";
import Contributor from "./Contributor";

describe("Contributor", function() {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Contributor />);
    });

    it("renders without crashing", () => {
        expect(wrapper).toExist();
    });

    it("matches snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
