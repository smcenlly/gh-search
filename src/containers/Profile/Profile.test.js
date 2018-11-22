import React from "react";
import { shallow } from "enzyme";
import { Loader, Message } from "../../toolkit";
import { Repos, UserSearch } from "../../components";
import Profile from "./Profile";
import ReposService from "../../services/repos";

describe("Profile", () => {
    let wrapper,
        getUserSearch = () => wrapper.find(UserSearch).get(0),
        getLoader = () => wrapper.find(Loader).get(0),
        getMessage = () => wrapper.find(Message).get(0),
        commitUserSearch = () => {
            getUserSearch().props.onChange({ target: { value: "Sample" } });
            return getUserSearch().props.onSubmit();
        };

    beforeEach(() => {
        wrapper = shallow(<Profile />);
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.clearAllTimers();
    });

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe("Given submitting UserSearch", () => {
        it("should show <Loader />", () => {
            jest.spyOn(ReposService, "getAll").mockImplementationOnce(
                () => new Promise((resolve) => setTimeout(resolve))
            );

            commitUserSearch();

            expect(wrapper).toContainMatchingElements(1, Loader);
        });

        describe("when successful", () => {
            it("shows list of repos", async () => {
                const repos = [{ id: 1 }, { id: 2 }];
                jest.spyOn(ReposService, "getAll").mockImplementationOnce(() =>
                    Promise.resolve(repos)
                );

                await commitUserSearch();

                expect(wrapper).toContainMatchingElements(1, Repos);
                expect(wrapper.find(Repos).first()).toHaveProp({
                    repos
                });
            });
        });
        describe("when unsuccessful", () => {
            it("shows error <Message />", async () => {
                jest.spyOn(ReposService, "getAll").mockImplementationOnce(() =>
                    Promise.reject("error")
                );

                await commitUserSearch();

                expect(wrapper).toContainMatchingElements(1, Message);
                expect(wrapper.find(Message).first()).toHaveProp({
                    level: Message.LEVEL.ERROR
                });
            });
        });
    });
});
