import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import StatusItem from './StatusItem';

class PreviousCheckIns extends React.Component {
  render() {
    return (
      <div>
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
        <Button secondary as={NavLink} icon labelPosition='left' exact to='/list'>
          <Icon name="clipboard list"/>
          All Check-ins
        </Button>
      </div>
    );
  }
}

PreviousCheckIns.propTypes = {
  status: PropTypes.array.isRequired,
};

export default PreviousCheckIns;
