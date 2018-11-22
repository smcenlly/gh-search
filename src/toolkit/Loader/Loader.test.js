import React from "react";
import { shallow } from "enzyme";
import Loader from "./Loader";

describe("Loader", function() {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Loader />);
    });

    it("renders without crashing", () => {
        expect(wrapper).toExist();
    });

    it("matches snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
