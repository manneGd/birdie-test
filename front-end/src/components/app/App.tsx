import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { EventData, RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import Title from '@App/components/Title';
import Logo from '@App/components/Logo';
import { REQUEST_EVENTS } from '@App/store/actions/constants';
import { Dispatch } from 'redux';
import { Loader } from '@App/components/Loader';
import { EventsList } from '@App/components/EventsList';

const LogoUrl = require('../../assets/images/logo-birdie.svg');

interface AppProps {
  loading: boolean;
  events: EventData[];
  requestEvents: () => void;
}

interface AppState {
}

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #F9F9F9;
    > div {
      height: 100%;
    }
  }
`;

const TopBarContainer = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: top;
  align-items: left;
  flex-direction: row;
`;

class App extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
  }

  componentDidMount(): void {
      this.props.requestEvents();
  }

    public render() {
    const { loading, events } = this.props;
    return (
      <>
        <GlobalStyle />
        <TopBarContainer>
          <Logo src={LogoUrl} />
          <Title>Overview patient</Title>
        </TopBarContainer>
          { loading ?
              <Loader />
              :
              <EventsList events={events} />
          }
      </>
    );
    }
}

const mapStateToProps = (state: RootState, ownProps: object) => ({
  loading: state.data.loading,
  events: state.data.events,
});

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
  requestEvents: () => dispatch({type: REQUEST_EVENTS}),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);