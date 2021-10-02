import React from 'react';
import { Grid, Header, Loader } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Status } from '../../api/status/Status';
import CheckInSegment from '../components/CheckInSegment';
import VaccCardSegment from '../components/VaccCardSegment';
import PreviousCheckIns from '../components/PreviousCheckIns';

/** A simple static component to render some text for the home page. */
class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { checkedInToday: false };
  }

  // Check if the user has done a check-in today
  dailyStatusCheck = () => {
    // return false if there is no history of check-ins
    if (this.props.status.length === 0) {
      return false;
    }

    // get the date of the latest check-in from the user and compare it with the date of today
    const today = new Date();
    const lastDate = this.props.status.reverse()[0].date;

    if (today.getDate() === lastDate.getDate() &&
        today.getMonth() === lastDate.getMonth() &&
        today.getFullYear() === lastDate.getFullYear()) {
      return true;
    }
    return false;

  }

  // If the subscription has been received, then render the page. Otherwise, let them know it's loading
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page when the subscription is ready
  renderPage() {
    const segmentStyle = {
      marginTop: '50px',
      borderRadius: '15px',
      padding: '20px 20px',
    };
    const textStyle = {
      textAlign: 'left',
      paddingBottom: '20px',
    };
    return (
      <div id='background-image'>
        <Grid id='home-page' verticalAlign='middle' textAlign='center' container>
          <Grid.Column width={8}>
            <CheckInSegment dayCheck={this.dailyStatusCheck()} segmentStyle={segmentStyle} textStyle={textStyle}/>
            <VaccCardSegment segmentStyle={segmentStyle} textStyle={textStyle}/>
            <Header as="h2" textAlign="left" style={{ color: 'white' }}>Previous Check-ins</Header>
            <PreviousCheckIns status={this.props.status} />
          </Grid.Column>
        </Grid>
      </div>
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
