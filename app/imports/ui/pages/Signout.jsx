import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Grid, Header } from 'semantic-ui-react';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    const signoutStyle = {
      margin: '50px 30px',
      padding: '20px 20px',
      color: 'white',
    };
    Meteor.logout();
    return (
      <div id='background-image'>
        <Grid container centered>
          <Header style={signoutStyle} id="signout-page" as="h2" textAlign="center">
            You are signed out.
          </Header>
        </Grid>
      </div>
    );
  }
}
