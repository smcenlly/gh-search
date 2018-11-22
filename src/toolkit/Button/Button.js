import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonWrapped = styled(({ color, ...props }) => <button {...props} />)`
    border: none;
    background: ${({ color }) => color};
    border-radius: 3px;
    color: white;
    padding: 5px 12px;
    font-size: 12px;
    cursor: pointer;

    :disabled {
        background: lightgray;
        cursor: not-allowed;
    }
`;

const Button = (props) => {
    return <ButtonWrapped {...props} />;
};

Button.COLOR = {
    PRIMARY: "rgb(62, 106, 170)",
    SECONDARY: "rgb(63, 120, 185)"
};

Button.propTypes = {
    color: PropTypes.oneOf(Object.values(Button.COLOR))
};

Button.defaultProps = {
    color: Button.COLOR.SECONDARY
};

export default Button;
