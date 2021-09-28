import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { VaccineForms } from '../../api/vaccineform/Vaccineform';
import VaccineFormItemAdmin from '../components/VaccineFormItemAdmin';

class ListVaccineFormAdmin extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container>
        <Header as="h2" textAlign="center">List Vaccine Forms (Admin)</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>MI</Table.HeaderCell>
              <Table.HeaderCell>Date of Birth</Table.HeaderCell>
              <Table.HeaderCell>Patient Number</Table.HeaderCell>
              <Table.HeaderCell>Vaccine Name 1</Table.HeaderCell>
              <Table.HeaderCell>Lot Number 1</Table.HeaderCell>
              <Table.HeaderCell>Date 1</Table.HeaderCell>
              <Table.HeaderCell>Site 1</Table.HeaderCell>
              <Table.HeaderCell>Vaccine Name 2</Table.HeaderCell>
              <Table.HeaderCell>Lot Number 2</Table.HeaderCell>
              <Table.HeaderCell>Date 2</Table.HeaderCell>
              <Table.HeaderCell>Site 2</Table.HeaderCell>
              <Table.HeaderCell>Image</Table.HeaderCell>
              <Table.HeaderCell>Owner</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.vaccineforms.map((vaccineform) => <VaccineFormItemAdmin key={vaccineform._id} vaccineform={vaccineform} />)}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

ListVaccineFormAdmin.propTypes = {
  vaccineforms: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to VaccineForm documents.
  const subscription = Meteor.subscribe(VaccineForms.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the VaccineForm documents
  const vaccineforms = VaccineForms.collection.find({}).fetch();
  return {
    vaccineforms,
    ready,
  };
})(ListVaccineFormAdmin);
