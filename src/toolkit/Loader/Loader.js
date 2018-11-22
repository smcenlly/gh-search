import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
    text-align: ${({ align }) => align};
`;

const scaleoutAnimation = keyframes`
    0% {
      transform: scale(0);
    } 100% {
      transform: scale(1.0);
      opacity: 0;
    }
`;

const BaseLoader = styled.div`
    width: 40px;
    height: 40px;
    margin: 20px ${({ align }) => (align === ALIGN.RIGHT ? "20px" : "auto")}
        20px ${({ align }) => (align === ALIGN.LEFT ? "20px" : "auto")};
    background-color: #ccc;

    border-radius: 100%;
    animation: ${scaleoutAnimation} 1s infinite ease-in-out;
`;

const ALIGN = {
    LEFT: "left",
    CENTER: "center",
    RIGHT: "right"
};

const propTypes = {
    align: PropTypes.oneOf(Object.values(ALIGN))
};
const defaultProps = {
    align: ALIGN.CENTER
};

const Loader = ({ className, align }) => {
    return (
        <Wrapper className={className}>
            <BaseLoader align={align} />
        </Wrapper>
    );
};

Loader.ALIGN = ALIGN;
Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

export default Loader;
