import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { EventData, RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import Title from '@App/components/Title';
import Logo from '@App/components/Logo';
import { REQUEST_EVENTS } from '@App/store/actions/constants';
import { Dispatch } from 'redux';
import { Loader } from '@App/components/Loader';
import { EventsList } from '@App/components/app/listView/EventsList';
import { EventsTimeline } from '@App/components/app/timelineView/EventsTimeline';

const LogoUrl = require('../../assets/images/logo-birdie.svg');

interface AppProps {
  loading: boolean;
  events: EventData[];
  requestEvents: () => void;
}

interface AppState {
  toggle: boolean;
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

const Button = styled.button`
  padding: 10px;
  background-color: #02264c;
  border-radius: 25px;
  color: #FFF;
  display: right;
`;

class App extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
    this.state = {
      toggle: false,
    };
    this.toggleView = this.toggleView.bind(this);
  }

  componentDidMount(): void {
      this.props.requestEvents();
  }

  toggleView() {
    this.setState({toggle: !this.state.toggle});
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
        <Button onClick={this.toggleView}>Switch View mode</Button>
          { loading ?
              <Loader />
              :
              this.state.toggle ?
                  <EventsTimeline events={events}/>
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