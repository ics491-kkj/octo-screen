import React from 'react';
import { Button, Segment, List, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class CheckInSegment extends React.Component {
  render() {
    return (
      <Segment style={this.props.segmentStyle} id="landing-segment">
        <div style={this.props.textStyle}>
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
        </div>
        <Button className="ui color button" primary as={NavLink} icon labelPosition='left' exact to='/update'>
          <Icon name="heart outline"/>
          Check Your Symptoms
        </Button>
      </Segment>
    );
  }
}

CheckInSegment.propTypes = {
  dayCheck: PropTypes.bool.isRequired,
  segmentStyle: PropTypes.object.isRequired,
  textStyle: PropTypes.object.isRequired,
};

export default CheckInSegment;
