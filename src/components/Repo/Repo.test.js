import React from "react";
import { shallow } from "enzyme";
import Repo from "./Repo";
import { Contributors } from "../Contributors";

describe("Repo", function() {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Repo fullName={"fullName"} contirbutors={[]} />);
    });

    it("renders without crashing", () => {
        expect(wrapper).toExist();
    });

    it("matches snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("renders contributors with correct props", () => {
        const contributors = [];

        wrapper.setProps({ contributors });

        expect(wrapper).toContainExactlyOneMatchingElement(Contributors);
        expect(wrapper.find(Contributors).first()).toHaveProp({ contributors });
    });
});
