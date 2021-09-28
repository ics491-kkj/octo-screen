import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import StatusItem from './StatusItem';

class PreviousCheckIns extends React.Component {
  render() {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Condition</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.props.status.slice(-3).reverse().map((status) => <StatusItem key={status._id} status={status} />)}
        </Table.Body>
      </Table>
    );
  }
}

PreviousCheckIns.propTypes = {
  status: PropTypes.array.isRequired,
};

export default PreviousCheckIns;
