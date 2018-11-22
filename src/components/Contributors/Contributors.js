import React from "react";
import i18n from "i18next";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Contributor } from "../Contributor";

const ContributorsList = styled.ul`
    margin-bottom: 0;
`;

const NoContributions = styled.li`
    list-style: none;
`;

class Contributors extends React.PureComponent {
    static propTypes = {
        contributors: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.object),
            PropTypes.string
        ])
    };

    static NoContributions = NoContributions;

    render() {
        let { className, contributors } = this.props;
        return (
            <ContributorsList className={className}>
                {contributors.length > 0 ? (
                    contributors.map(({ login, contributions, id }) => {
                        return (
                            <Contributor
                                key={id}
                                login={login}
                                contributions={contributions}
                            />
                        );
                    })
                ) : (
                    <NoContributions>
                        {i18n.t("contributors.noContributors")}
                    </NoContributions>
                )}
            </ContributorsList>
        );
    }
}

export default Contributors;
