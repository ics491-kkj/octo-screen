import React from 'react';
import { Button, Segment, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { VaccineForms } from '../../api/vaccineform/Vaccineform';

class VaccCardSegment extends React.Component {
  render() {
    return (
      <Segment style={this.props.segmentStyle} id="landing-segment">
        <div style={this.props.textStyle}>
          <h3>Vaccination Card</h3>
          {(this.props.vaccineforms.length === 0) ?
            (
              <p>No Vaccination card information submitted yet.</p>
            ) :
            (
              <p>View your vaccine card information here.</p>
            )
          }
        </div>
        {(this.props.vaccineforms.length === 0) ?
          (
            <Button className="ui color button" primary as={NavLink} icon labelPosition='left' exact to='/add_vf'>
              <Icon name="address card outline"/>
              Submit Information
            </Button>
          ) :
          (
            <Button secondary as={NavLink} icon labelPosition='left' exact to='/list_vf'>
              <Icon name="info circle"/>
              View Information
            </Button>
          )
        }
      </Segment>
    );
  }
}

VaccCardSegment.propTypes = {
  segmentStyle: PropTypes.object.isRequired,
  textStyle: PropTypes.object.isRequired,
  vaccineforms: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to VaccineForm documents.
  const subscription = Meteor.subscribe(VaccineForms.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const vaccineforms = VaccineForms.collection.find({}).fetch();
  return {
    vaccineforms,
    ready,
  };
})(VaccCardSegment);
