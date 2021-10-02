import React from 'react';
import { Button, Segment, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class VaccCardSegment extends React.Component {
  render() {
    return (
      <Segment style={this.props.segmentStyle} id="landing-segment">
        <div style={this.props.textStyle}>
          <h3>Vaccination Card</h3>
          <h4>No Vaccination card information submitted yet.</h4>
          <p>Placeholder text.</p>
        </div>
        <Button className="ui color button" primary as={NavLink} icon labelPosition='left' exact to='/add_vf'>
          <Icon name="address card outline"/>
          Submit Information
        </Button>
        <Button secondary as={NavLink} icon labelPosition='left' exact to='/list_vf'>
          <Icon name="info circle"/>
          View Information
        </Button>
      </Segment>
    );
  }
}

VaccCardSegment.propTypes = {
  segmentStyle: PropTypes.object.isRequired,
  textStyle: PropTypes.object.isRequired,
};

export default VaccCardSegment;
