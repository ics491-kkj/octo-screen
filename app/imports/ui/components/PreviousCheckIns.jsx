import React from 'react';
import { Table, Button, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import StatusItem from './StatusItem';

class PreviousCheckIns extends React.Component {
  render() {
    return (
      <Segment>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Condition</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.status.reverse().slice(-3).reverse().map((status) => <StatusItem key={status._id} status={status} />)}
          </Table.Body>
        </Table>
        <Button as={NavLink} exact to='/list'>All Check-ins</Button>
      </Segment>
    );
  }
}

PreviousCheckIns.propTypes = {
  status: PropTypes.array.isRequired,
};

export default PreviousCheckIns;
