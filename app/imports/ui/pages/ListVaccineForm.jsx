import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Loader, Card, Image, Segment } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { VaccineForms } from '../../api/vaccineform/Vaccineform';
import VaccineFormItem from '../components/VaccineFormItem';

/** Renders a table containing all of the Stuff documents. Use <VaccineFormItem> to render each row. */
class ListVaccineForm extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <div id='background-image'>
        <Container>
          <Card.Group>
            {this.props.vaccineforms.map((vaccineform) => <VaccineFormItem key={vaccineform._id} vaccineform={vaccineform} />)}
          </Card.Group>
          <Segment>
            <Image src='images/vacc-card.jpg' />
          </Segment>
        </Container>
      </div>
    );
  }
}

// Require an array of VaccineForm documents in the props.
ListVaccineForm.propTypes = {
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
})(ListVaccineForm);
