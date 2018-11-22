import _ from "lodash";
import i18n from "i18next";
import React, { Component } from "react";
import styled from "styled-components";
import { Repos, UserSearch, LinksPaginator } from "../../components";
import { Loader, Message } from "../../toolkit";
import ReposService from "../../services/repos";

const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    height: 100%;
`;

const Header = styled.h1`
    color: #fff;
    line-height: 1.5;
    margin: 0;
    background: linear-gradient(90deg, rgb(65, 106, 162), rgb(125, 96, 196));
    padding: 50px 20px 10px;
`;

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchInputValue: "",
            lastCommitedValue: "",
            isSubmitting: false,
            error: null,
            page: null
        };

        this.fetchRepos = _.debounce(this.fetchRepos, 250);
    }

    fetchRepos = async (userName, pageNumber) => {
        this.setState({ page: null, error: null, isSubmitting: true });

        try {
            const page = await ReposService.getPage(userName, pageNumber);

            this.setState({
                page,
                searchInputValue: "",
                lastCommitedValue: userName
            });
        } catch (err) {
            this.setState({ error: err });
        }

        this.setState({ isSubmitting: false });
    };

    handleChange = ({ target: { value } }) => {
        this.setState({ searchInputValue: value });
    };

    handleSubmit = () => {
        return this.fetchRepos(this.state.searchInputValue);
    };

    render() {
        if (process.env.NODE_ENV === "development" && this.state.error) {
            console.error(this.state.error);
        }

        return (
            <Wrapper>
                <Header>{i18n.t("profile.title")}</Header>
                <UserSearch
                    value={this.state.searchInputValue}
                    onChange={this.handleChange}
                    isSubmitting={this.state.isSubmitting}
                    onSubmit={this.handleSubmit}
                />
                {this.state.page ? (
                    <LinksPaginator
                        links={this.state.page && this.state.page.links}
                        onPaginate={(page) =>
                            this.fetchRepos(this.state.lastCommitedValue, page)
                        }
                    />
                ) : null}

                {this.state.error ? (
                    <Message level={Message.LEVEL.ERROR}>
                        {i18n.t("userSearch.error")}
                    </Message>
                ) : null}

                {this.state.isSubmitting ? (
                    <Loader align={Loader.ALIGN.LEFT} />
                ) : null}

                {this.state.page && this.state.page.data ? (
                    <Repos repos={this.state.page.data} />
                ) : null}
            </Wrapper>
        );
    }
}

export default Profile;
