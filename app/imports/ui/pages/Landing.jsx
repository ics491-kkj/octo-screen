import React from 'react';
import { Grid, Segment, Button, Container, List, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    const segmentStyle = {
      marginTop: '70px',
      borderRadius: '15px',
      padding: '20px 20px',
    };
    return (
      <div id="background-image">
        <Container>
          <Grid stackable verticalAlign='middle' textAlign='center' container>
            <Grid.Column width={8}>
              {Meteor.userId() == null ? (
                <Segment style={segmentStyle}>
                  <h1 style="padding-bottom: 20px">Welcome to Octo Screen!</h1>
                  <Button className="ui color button" primary as={NavLink} exact to='/signin'> Sign in </Button>
                  <Button as={NavLink} secondary exact to='/signup'> Register </Button>
                </Segment>
              ) : (
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
              )}
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Landing;
