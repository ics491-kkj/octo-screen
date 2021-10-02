import React from 'react';
import { Button, Segment, Label } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class CheckInSegment extends React.Component {
  render() {
    return (
      <Segment>
        {!this.props.dayCheck ?
          (
            <Label attached='top' color='orange'>Do not hesitate to spend a minute to perform a daily
                  check-in.</Label>
          ) :
          <p/>
        }
        <p>Keep track of your symptoms daily.</p>
        <Button as={NavLink} exact to='/update'>Update Symptoms</Button>
      </Segment>
    );
  }
}

CheckInSegment.propTypes = {
  dayCheck: PropTypes.bool.isRequired,
};

export default CheckInSegment;
