import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { RootState } from '@App/store/reducers';
import { Dispatch } from 'redux';
import { nextEvents, previousEvents } from '@App/store/actions';

type PaginationProps = {
    nextEvents: () => void;
    previousEvents: () => void;
};

type PaginationState = {
    nextEvents: () => void;
    previousEvents: () => void;
};

const Button = styled.button`
    border: 2px solid #D8D8D8;
    color: #02264c;
    cursor: pointer;
    float: left;
    font-weight: bold;
    height: 100%;
    transition: background-color .3s;
    width: 100%;
`;

const Footer = styled.div`
    align-items: right;
    display: inline-flex;
    width: 50%;
`;

class Pagination extends React.Component<PaginationProps, PaginationState> {
    constructor(props: PaginationProps) {
        super(props);
    }
    render() {
        return (
            <Footer>
                <Button onClick={() => this.state.previousEvents}>Previous</Button>
                <Button onClick={() => this.props.nextEvents}>Next</Button>
            </Footer>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
    previousEvents: () => dispatch(previousEvents()),
    nextEvents: () => dispatch(nextEvents()),
});

export default connect(mapDispatchToProps)(Pagination);
