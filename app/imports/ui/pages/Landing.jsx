import React from 'react';
import { Grid, Segment, Button, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'react-router';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    if (Meteor.userId() != null) {
      return <Redirect to='/home'/>;
    }
    const segmentStyle = {
      marginTop: '70px',
      borderRadius: '15px',
      padding: '20px 20px',
    };
    return (
      <div id='background-image'>
        <Container>
          <Grid stackable id='landing-page' verticalAlign='middle' textAlign='center' container>
            <Grid.Column width={8}>
              <Segment style={segmentStyle}>
                <h1>Welcome to Octo Screen!</h1>
                <Button className="ui color button" primary as={NavLink} exact to='/signin'> Sign in </Button>
                <Button as={NavLink} secondary exact to='/signup'> Register </Button>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Landing;
