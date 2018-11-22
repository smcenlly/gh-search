import React from "react";
import i18n from "i18next";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Repo } from "../Repo";

const Wrapper = styled.div`
    overflow-y: auto;
`;

const NoReposFound = styled.div`
    padding: 20px;
`;

class Repos extends React.PureComponent {
    static propTypes = { repos: PropTypes.arrayOf(PropTypes.object) };
    static NoReposFound = NoReposFound;

    render() {
        let { className, repos } = this.props;
        return (
            <Wrapper className={className}>
                {repos.length ? (
                    repos.map(({ id, full_name, contributors }) => {
                        return (
                            <Repo
                                key={id}
                                fullName={full_name}
                                contributors={contributors}
                            />
                        );
                    })
                ) : (
                    <NoReposFound>{i18n.t("repos.notFound")}</NoReposFound>
                )}
            </Wrapper>
        );
    }
}

export default Repos;
