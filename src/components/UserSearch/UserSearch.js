import React from "react";
import i18n from "i18next";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Button } from "../../toolkit";
import profilePicUrl from "./assets/profile.svg";
import { colors } from "../../styles";

const UserForm = styled.form`
    display: flex;
    flex-shrink: 0;
    padding: 20px;
    border-bottom: 1px solid ${colors.separator};
`;

const Img = styled.img.attrs({
    src: profilePicUrl,
    width: "15px",
    height: "15px"
})`
    vertical-align: middle;
`;

const Label = styled.label.attrs({
    htmlFor: "UserSearch"
})`
    vertical-align: middle;
    margin-left: 5px;
`;

const UserFormItem = styled.div`
    & + & {
        margin-left: 12px;
    }
`;

const SearchInput = styled.input`
    padding: 2px 5px;
    background: none;
    outline: none;
    border-radius: 3px;
    border: 1px solid ${colors.separator};
`;

class UserSearch extends React.PureComponent {
    static propTypes = {
        onChange: PropTypes.func,
        onSubmit: PropTypes.func,
        value: PropTypes.string,
        isSubmitting: PropTypes.bool
    };

    static defaultProps = {
        value: "",
        isSubmitting: false
    };

    static SearchInput = SearchInput;
    static SearchButton = Button;

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit && this.props.onSubmit(e);
    };

    isValid = () => {
        return this.props.value && !this.props.isSubmitting;
    };

    render() {
        return (
            <UserForm
                className={this.props.className}
                onSubmit={this.handleSubmit}
            >
                <UserFormItem>
                    <Img />
                    <Label>{i18n.t("userSearch.label")}</Label>
                </UserFormItem>
                <UserFormItem>
                    <SearchInput
                        id="UserSearch"
                        onChange={this.props.onChange}
                        value={this.props.value}
                    />
                </UserFormItem>
                <UserFormItem>
                    <Button disabled={!this.isValid()} type="submit">
                        {i18n.t("userSearch.submit")}
                    </Button>
                </UserFormItem>
            </UserForm>
        );
    }
}

export default UserSearch;
