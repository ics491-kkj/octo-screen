import React from 'react';
import { Button, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class CheckInSegment extends React.Component {
  render() {
    return (
      <Segment>
        <p>Keep track of your symptoms daily.</p>
        <Button as={NavLink} exact to='/update'>Update Symptoms</Button>
      </Segment>
    );
  }
}

export default CheckInSegment;
