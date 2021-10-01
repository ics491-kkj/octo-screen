import React from 'react';
import { Grid, Segment, Button, Header, Table, Loader, List, Icon } from 'semantic-ui-react';
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
    const segmentStyle = {
      marginTop: '70px',
      borderRadius: '15px',
      padding: '20px 20px',
    };
    return (
      <div id='background-image'>
        <Grid id='home-page' verticalAlign='middle' textAlign='center' container>
          <Grid.Column width={8}>
            <Segment style={segmentStyle} id="landing-segment">
              <div align="left">
                <h3>Daily Health Check-In</h3>
                <p>Help keep our campus safe by completing your daily health check-in!</p>
                <List ordered>
                  <List.Item>
                    Check your symptoms.
                  </List.Item>
                  <List.Item>
                    Keep track of your symptoms every day.
                  </List.Item>
                </List>
                <Button className="ui color button" primary as={NavLink} icon labelPosition='left' exact to='/update'>
                  <Icon name="heart outline"/>
                  Check Your Symptoms
                </Button>
                <Button secondary as={NavLink} icon labelPosition='left' exact to='/list'>
                  <Icon name="clipboard list"/>
                  Previous Check-ins
                </Button>
              </div>
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
                {this.props.status.slice(-3).reverse().map((status) => <StatusItem key={status._id} status={status}/>)}
              </Table.Body>
            </Table>
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
