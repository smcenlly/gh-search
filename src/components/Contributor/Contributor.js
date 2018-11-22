import React from "react";
import i18n from "i18next";
import styled from "styled-components";
import PropTypes from "prop-types";

const ContributorItem = styled.li`
    & + & {
        margin-top: 12px;
    }
`;

class Contributor extends React.PureComponent {
    static propTypes = {
        login: PropTypes.string,
        contributions: PropTypes.number
    };
    render() {
        let { className, login, contributions } = this.props;
        return (
            <ContributorItem className={className}>
                {i18n.t("contributor.contributions", {
                    login,
                    count: contributions
                })}
            </ContributorItem>
        );
    }
}

export default Contributor;
