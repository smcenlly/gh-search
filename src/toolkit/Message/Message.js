import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LEVEL = {
    INFO: "INFO",
    WARNING: "WARNING",
    ERROR: "ERROR"
};

const Wrapper = styled.div`
    padding: 20px;
    background: ${({ level }) => {
        switch (level) {
            case LEVEL.WARNING:
                return "orange";
            case LEVEL.ERROR:
                return "darkred";
            default:
                return "aqua";
        }
    }};

    color: ${({ level }) => (level === LEVEL.ERROR ? "white" : "unset")};
`;

const propTypes = {
    level: PropTypes.string
};
const defaultProps = {
    level: LEVEL.INFO
};

const Message = ({ className, children, level }) => {
    return (
        <Wrapper className={className} level={level}>
            {children}
        </Wrapper>
    );
};

Message.LEVEL = LEVEL;

Message.propTypes = propTypes;
Message.defaultTypes = defaultProps;

export default Message;
