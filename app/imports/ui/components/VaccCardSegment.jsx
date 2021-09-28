import React from 'react';
import { Button, Segment } from 'semantic-ui-react';

class VaccCardSegment extends React.Component {
  render() {
    return (
      <Segment>
        <p>No Vaccination card information submitted yet.</p>
        <p>Placeholder text.</p>
        <Button>Submit Information</Button>
      </Segment>
    );
  }
}

export default VaccCardSegment;
