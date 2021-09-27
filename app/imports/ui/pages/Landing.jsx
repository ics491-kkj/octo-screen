import React from 'react';
import { Grid, Segment, Button, Icon, Container, Card } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    const segmentStyle = {
      marginTop: '70px',
      borderRadius: '15px',
    };
    return (
      <div id="background-image">
        <Container>
          <Grid verticalAlign='middle' textAlign='center' container>
            <Grid.Column width={8}>
              {Meteor.userId() == null ? (
                <Card style={segmentStyle}>
                  <h1>Welcome to Octo Screen!</h1>
                  <Button as={NavLink} exact to='/signin'> Sign in </Button>
                  <Button as={NavLink} exact to='/signup'> Register </Button>
                </Card>
              ) : (
                <Card style={segmentStyle}>
                  <h1>Health Check-in</h1>
                  <Button primary as={NavLink} exact to='/update'>Update Symptoms</Button>
                  <Button secondary as={NavLink} exact to='/list'>Previous Check-ins</Button>
                </Card>
              )}
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Landing;
