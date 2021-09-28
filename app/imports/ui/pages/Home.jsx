import React from 'react';
import { Grid, Header, Loader } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Status } from '../../api/status/Status';
import StatusCard from '../components/StatusCard';
import CheckInSegment from '../components/CheckInSegment';
import VaccCardSegment from '../components/VaccCardSegment';
import PreviousCheckIns from '../components/PreviousCheckIns';

/** A simple static component to render some text for the home page. */
class Home extends React.Component {

  // If the subscription has been received, then render the page. Otherwise, let them know it's loading
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page when the subscription is ready
  renderPage() {
    return (
      <Grid id='home-page' verticalAlign='middle' textAlign='center' container>
        <Grid.Column width={8}>
          <StatusCard />
          <Header as="h2" textAlign="center">Health Check-in</Header>
          <CheckInSegment />
          <Header as="h2" textAlign="center">Vaccination card</Header>
          <VaccCardSegment />
          <Header as="h2" textAlign="center">Previous Check-ins</Header>
          <PreviousCheckIns status={this.props.status} />
        </Grid.Column>
      </Grid>
    );
  }
}

// Require an array of Status documents in the props.
Home.propTypes = {
  status: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Status.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const status = Status.collection.find({}).fetch();
  return {
    status,
    ready,
  };
})(Home);
