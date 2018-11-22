import React from "react";
import { shallow } from "enzyme";
import UserSearch from "./UserSearch";

describe("UserSearch", () => {
    let wrapper,
        getSearchButton = () => wrapper.find(UserSearch.SearchButton),
        getSearchInput = () => wrapper.find(UserSearch.SearchInput);

    beforeEach(() => {
        wrapper = shallow(<UserSearch />);
    });

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("initializes empty", () => {
        expect(wrapper.instance().props).toEqual({
            value: "",
            isSubmitting: false
        });
    });

    it("renders SearchInput with correct props", () => {
        const props = { onChange: () => {}, value: "test" };

        wrapper.setProps(props);

        expect(wrapper).toContainExactlyOneMatchingElement(
            UserSearch.SearchInput
        );
        expect(wrapper.find(UserSearch.SearchInput).first()).toHaveProp(props);
    });

    it("renders SearchButton", () => {
        expect(wrapper).toContainExactlyOneMatchingElement(
            UserSearch.SearchButton
        );
    });

    describe("when not having value", () => {
        it("disables submit", () => {
            wrapper.setProps({ value: "", isSubmitting: false });
            expect(getSearchButton()).toHaveProp({ disabled: true });
        });
    });

    describe("when is submitting", () => {
        it("disables submit", () => {
            wrapper.setProps({ value: "Something", isSubmitting: true });
            expect(getSearchButton()).toHaveProp({ disabled: true });
        });
    });

    describe("when typing in search input", () => {
        it("calls onChange", () => {
            const onChange = jest.fn();
            wrapper.setProps({ onChange, value: "Tex" });

            const changeEvent = { target: { value: "Text" } };

            getSearchInput().simulate("change", changeEvent);

            expect(onChange).toHaveBeenCalled();
            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith(changeEvent);
        });
    });

    describe("when valid and submitting", () => {
        it("calls onSubmit", () => {
            const onSubmit = jest.fn();
            wrapper.setProps({ onSubmit, value: "Text", isSubmitting: false });

            const submitEvent = { preventDefault: jest.fn() };

            wrapper.simulate("submit", submitEvent);

            expect(submitEvent.preventDefault).toHaveBeenCalled();
            expect(submitEvent.preventDefault).toHaveBeenCalledTimes(1);
            expect(onSubmit).toHaveBeenCalled();
            expect(onSubmit).toHaveBeenCalledTimes(1);
            expect(onSubmit).toHaveBeenCalledWith(submitEvent);
        });
    });
});
