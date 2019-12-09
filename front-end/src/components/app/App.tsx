import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { EventData, RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import Title from '@App/components/Title';
import Logo from '@App/components/Logo';
import { Dispatch } from 'redux';
import { Loader } from '@App/components/Loader';
import { EventsList } from '@App/components/listView/EventsList';
import { EventsTimeline } from '@App/components/timelineView/EventsTimeline';
import { requestEvents } from '@App/store/actions';

const LogoUrl = require('../../assets/images/logo-birdie.svg');

interface AppProps {
  events: EventData[];
  loading: boolean;
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
  align-items: left;
  display: inline-flex;
  flex-direction: row;
  justify-content: top;
  width: 100%;
`;

const Button = styled.button`
  background-color: #02264c;
  border-radius: 25px;
  color: #FFF;
  float: right;
  margin: 10px;
  padding: 10px;
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
  requestEvents: () => dispatch(requestEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);