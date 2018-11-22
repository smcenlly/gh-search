import i18n from "i18next";
import React from "react";
import styled from "styled-components";
import { Button } from "../../toolkit";
import PropTypes from "prop-types";

const Wrapper = styled.div`
    padding: 12px;
    border-bottom: 1px solid rgb(211, 215, 231);
`;

const ToolkitButton = styled(Button)`
    & + & {
        margin-left: 12px;
    }
`;

const LinksPaginator = (props) => {
    const { className } = props;
    return (
        <Wrapper className={className}>
            <ToolkitButton
                key="first"
                disabled={!props.links.first}
                onClick={() => props.onPaginate(props.links.first.page)}
            >
                {i18n.t(`paginate.first`)}
            </ToolkitButton>
            <ToolkitButton
                key="prev"
                disabled={!props.links.prev}
                onClick={() => props.onPaginate(props.links.prev.page)}
            >
                {i18n.t(`paginate.prev`)}
            </ToolkitButton>
            <ToolkitButton
                key="next"
                disabled={!props.links.next}
                onClick={() => props.onPaginate(props.links.next.page)}
            >
                {i18n.t(`paginate.next`)}
            </ToolkitButton>
            <ToolkitButton
                key="last"
                disabled={!props.links.last}
                onClick={() => props.onPaginate(props.links.last.page)}
            >
                {i18n.t(`paginate.last`)}
            </ToolkitButton>
        </Wrapper>
    );
};

LinksPaginator.propTypes = {
    links: PropTypes.object,
    onPaginate: PropTypes.func
};

LinksPaginator.defaultProps = {
    links: {}
};

export default LinksPaginator;
