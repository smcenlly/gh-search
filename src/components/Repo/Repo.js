import React from "react";
import i18n from "i18next";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Contributors } from "../Contributors";
import { colors } from "../../styles";

const RepoWrapper = styled.div`
    padding: 20px;
    & + & {
        border-top: 1px solid ${colors.separator};
    }
`;

class Repo extends React.PureComponent {
    static propTypes = {
        fullName: PropTypes.string,
        contributors: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.object),
            PropTypes.string
        ])
    };
    render() {
        let { className, fullName, contributors } = this.props;
        return (
            <RepoWrapper className={className}>
                <div>{i18n.t("repo.title", { fullName })}</div>
                <Contributors contributors={contributors} />
            </RepoWrapper>
        );
    }
}

export default Repo;
