import React from "react";
import { shallow } from "enzyme";
import Repos from "./Repos";
import { Repo } from "../Repo";

describe("Repos", function() {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Repos repos={[]} />);
    });

    it("renders without crashing", () => {
        expect(wrapper).toExist();
    });

    it("matches snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe("when provided repos", () => {
        it("renders Repos with correct props", () => {
            const repos = [
                { id: 1, full_name: "RepoName1", contributors: [] },
                { id: 2, full_name: "RepoName2", contributors: [] }
            ];

            const repoProp = {
                fullName: repos[0].full_name,
                contributors: repos[0].contributors
            };

            wrapper.setProps({ repos });

            expect(wrapper).toContainMatchingElements(2, Repo);
            expect(wrapper.find(Repo).first()).toHaveProp(repoProp);
        });
    });

    describe("when not provided repos", () => {
        it("renders no repos found block", () => {
            expect(wrapper).toContainExactlyOneMatchingElement(
                Repos.NoReposFound
            );
        });
    });
});
