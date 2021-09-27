import React from 'react';
import { Grid, Segment, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

/** A simple static component to render some text for the home page. */
class Home extends React.Component {
  render() {
    return (
      <Grid id='home-page' verticalAlign='middle' textAlign='center' container>
        <Grid.Column width={8}>
          <Segment>
            <h1>Health Check-in</h1>
            <Button primary as={NavLink} exact to='/update'>Update Symptoms</Button>
            <Button secondary as={NavLink} exact to='/list'>Previous Check-ins</Button>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Home;
