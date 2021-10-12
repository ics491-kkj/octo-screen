import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List VaccineForm table. See pages/ListVaccineForm.jsx. */
class VaccineFormItem extends React.Component {
  render() {
    return (
      <Card centered>
        <Card.Content textAlign='left'>
          <Card.Header> Vaccine Form </Card.Header>
          <Card.Description>Last Name</Card.Description>
          <Card.Meta>{this.props.vaccineform.lastname}</Card.Meta>
          <Card.Description>First Name</Card.Description>
          <Card.Meta>{this.props.vaccineform.firstname}</Card.Meta>
          <Card.Description>MI</Card.Description>
          <Card.Meta>{this.props.vaccineform.middlein}</Card.Meta>
          <Card.Description>Date of Birth</Card.Description>
          <Card.Meta>{this.props.vaccineform.dob}</Card.Meta>
          <Card.Description>Patient Number</Card.Description>
          <Card.Meta>{this.props.vaccineform.pnum}</Card.Meta>

          <Card.Description>(1)Vaccine Name</Card.Description>
          <Card.Meta>{this.props.vaccineform.vname1}</Card.Meta>
          <Card.Description>(1)Lot Number</Card.Description>
          <Card.Meta>{this.props.vaccineform.lotnum1}</Card.Meta>
          <Card.Description>(1)Date</Card.Description>
          <Card.Meta>{this.props.vaccineform.date1}</Card.Meta>
          <Card.Description>(1)Site</Card.Description>
          <Card.Meta>{this.props.vaccineform.site1}</Card.Meta>

          <Card.Description>(2)Vaccine Name</Card.Description>
          <Card.Meta>{this.props.vaccineform.vname2}</Card.Meta>
          <Card.Description>(2)Lot Number</Card.Description>
          <Card.Meta>{this.props.vaccineform.lotnum2}</Card.Meta>
          <Card.Description>(2)Date</Card.Description>
          <Card.Meta>{this.props.vaccineform.date2}</Card.Meta>
          <Card.Description>(2)Site</Card.Description>
          <Card.Meta>{this.props.vaccineform.site2}</Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

// Require a document to be passed to this component.
VaccineFormItem.propTypes = {
  vaccineform: PropTypes.shape({
    lastname: PropTypes.string,
    firstname: PropTypes.string,
    dob: PropTypes.string,
    vname1: PropTypes.string,
    lotnum1: PropTypes.string,
    date1: PropTypes.string,
    site1: PropTypes.string,
    vname2: PropTypes.string,
    lotnum2: PropTypes.string,
    date2: PropTypes.string,
    site2: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(VaccineFormItem);
