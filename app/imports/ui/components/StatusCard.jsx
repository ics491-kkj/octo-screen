import React from 'react';
import { Container, Segment, Table, Icon } from 'semantic-ui-react';

class StatusCard extends React.Component {
  render() {
    return (
      <Container>
        <Segment>
          <Table basic='very' celled>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Status</Table.Cell>
                <Table.Cell positive>
                  <Icon name='checkmark' />
                  clear to come to campus
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
      </Container>
    );
  }
}

export default StatusCard;
