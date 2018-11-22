import React from "react";
import { shallow } from "enzyme";
import Contributors from "./Contributors";
import { Contributor } from "../Contributor";

describe("Contributors", function() {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Contributors contributors={[]} />);
    });

    it("renders without crashing", () => {
        expect(wrapper).toExist();
    });

    it("matches snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe("when provided contributors", () => {
        it("renders Contributors with correct props", () => {
            const contributors = [
                { id: 1, login: "loginName1", contributions: 100 },
                { id: 2, login: "loginName2", contributions: 200 }
            ];

            const contributorProp = {
                login: contributors[0].login,
                contributions: contributors[0].contributions
            };

            wrapper.setProps({ contributors });

            expect(wrapper).toContainMatchingElements(2, Contributor);
            expect(wrapper.find(Contributor).first()).toHaveProp(
                contributorProp
            );
        });
    });

    describe("when not provided repos", () => {
        it("renders no contributors found block", () => {
            expect(wrapper).toContainExactlyOneMatchingElement(
                Contributors.NoContributions
            );
        });
    });
});
