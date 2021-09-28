import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class VaccineFormItemAdmin extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.vaccineform.lastname}</Table.Cell>
        <Table.Cell>{this.props.vaccineform.firstname}</Table.Cell>
        <Table.Cell>{this.props.vaccineform.middlein}</Table.Cell>
        <Table.Cell>{this.props.vaccineform.dob}</Table.Cell>
        <Table.Cell>{this.props.vaccineform.pnum}</Table.Cell>
        <Table.Cell>{this.props.vaccineform.vname1}</Table.Cell>
        <Table.Cell>{this.props.vaccineform.lotnum1}</Table.Cell>
        <Table.Cell>{this.props.vaccineform.date1}</Table.Cell>
        <Table.Cell>{this.props.vaccineform.site1}</Table.Cell>
        <Table.Cell>{this.props.vaccineform.vname2}</Table.Cell>
        <Table.Cell>{this.props.vaccineform.lotnum2}</Table.Cell>
        <Table.Cell>{this.props.vaccineform.date2}</Table.Cell>
        <Table.Cell>{this.props.vaccineform.site2}</Table.Cell>
        <Table.Cell>{this.props.vaccineform.image}</Table.Cell>
        <Table.Cell>{this.props.vaccineform.owner}</Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
VaccineFormItemAdmin.propTypes = {
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
    owner: PropTypes.string,
  }).isRequired,
};

export default VaccineFormItemAdmin;
