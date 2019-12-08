import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { RootState } from '@App/store/reducers';
import { Dispatch } from 'redux';
import { NEXT_EVENTS, PREVIOUS_EVENTS } from '@App/store/actions/constants';

type PaginationProps = {
  previousEvents: () => void;
  nextEvents: () => void;
};

const Button = styled.button`
    cursor: pointer;
    float: left;
    transition: background-color .3s;
    color: #02264c;
    border: 2px solid #D8D8D8;
    font-weight: bold;
    width: 100%;
    height: 100%;
`;

class Pagination extends React.Component<PaginationProps> {
    constructor(props: PaginationProps) {
        super(props);
    }
    render() {
        return (
            <div>
                <Button onClick={() => this.props.previousEvents}>Previous</Button>
                <Button onClick={() => this.props.nextEvents}>Next</Button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
    previousEvents: () => dispatch({type: PREVIOUS_EVENTS}),
    nextEvents: () => dispatch({type: NEXT_EVENTS}),
});

export default connect(mapDispatchToProps)(Pagination);
