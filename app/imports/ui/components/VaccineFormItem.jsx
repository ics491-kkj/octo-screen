import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List VaccineForm table. See pages/ListVaccineForm.jsx. */
class VaccineFormItem extends React.Component {
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
      </Table.Row>
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
