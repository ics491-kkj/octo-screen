import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Grid, Table, Header, Loader, Segment } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Status } from '../../api/status/Status';
import StatusItem from '../components/StatusItem';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListStatus extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    const segmentStyle = {
      margin: '50px 30px',
      borderRadius: '15px',
      padding: '20px 20px',
    };
    return (
      <div id="background-image">
        <Grid container centered>
          <Segment style={segmentStyle}>
            <Header as="h2" textAlign="center">Previous Check-ins</Header>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Condition</Table.HeaderCell>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.props.status.map((status) => <StatusItem key={status._id} status={status}/>)}
              </Table.Body>
            </Table>
          </Segment>
        </Grid>
      </div>
    );
  }
}

// Require an array of Stuff documents in the props.
ListStatus.propTypes = {
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
})(ListStatus);
