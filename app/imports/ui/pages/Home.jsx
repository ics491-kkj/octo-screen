import React from 'react';
import { Grid, Segment, Button, Header, Table, Loader } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Status } from '../../api/status/Status';
import StatusItem from '../components/StatusItem';

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
          <Header as="h2" textAlign="center">Health Check-in</Header>
          <Segment>
            <p>Keep track of your symptoms daily.</p>
            <Button as={NavLink} exact to='/update'>Update Symptoms</Button>
          </Segment>
          <Header as="h2" textAlign="center">Vaccination card</Header>
          <Segment>
            <p>No Vaccination card information submitted yet.</p>
            <p>Placeholder text.</p>
            <Button as={NavLink} exact to='/add_vf'>Submit Information</Button>
            <Button as={NavLink} exact to='/list_vf'>View Information</Button>
          </Segment>
          <Header as="h2" textAlign="center">Previous Check-ins</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Condition</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.status.slice(-3).reverse().map((status) => <StatusItem key={status._id} status={status} />)}
            </Table.Body>
          </Table>
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
