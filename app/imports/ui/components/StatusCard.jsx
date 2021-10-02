import React from 'react';
import { Segment, Table, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class StatusCard extends React.Component {
  render() {
    const l = (
      <Table.Cell>
        <Icon name='checkmark' />
        cleallr to come to campus
      </Table.Cell>);
    return (
      <Segment>
        <Table basic='very' celled>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Status</Table.Cell>
              <Table.Cell positive>
                {l}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Vaccination</Table.Cell>
              <Table.Cell>No record</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Health Symptom</Table.Cell>
              <Table.Cell negative>
                <Icon name='close' />
                unwell
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}

StatusCard.propTypes = {
  dailyStatus: PropTypes.bool.isRequired,
};

export default StatusCard;
