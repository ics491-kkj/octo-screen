import React from 'react';
import { Grid, Segment, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'react-router';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {

    if (Meteor.userId() != null) {
      return <Redirect to='/home'/>;
    }

    return (
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
        <Grid.Column width={8}>
          <Segment>
            <h1>Welcome to Octo Screen!</h1>
            <Button color='green' as={NavLink} exact to='/signin'> Sign in </Button>
            <Button as={NavLink} exact to='/signup'> Register </Button>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Landing;
