import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Loader, Card, Image, Segment, Grid, Header } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { VaccineForms } from '../../api/vaccineform/Vaccineform';
import VaccineFormItem from '../components/VaccineFormItem';

/** Renders a table containing all of the Stuff documents. Use <VaccineFormItem> to render each row. */
class ListVaccineForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasImage: true,
    };
  }

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    let vacImage;
    const textStyle = {
      textAlign: 'left',
      paddingTop: '20px',
      paddingBottom: '10px',
    };
    if (this.state.hasImage) {
      vacImage = (
        <div style={textStyle}>
          <Header as="h2" textAlign="left" style={{ color: 'white' }}>Vaccine Card Image</Header>
          <Segment>
            <Image src='images/vacc-card.jpg' fluid />
          </Segment>
        </div>);
    } else {
      vacImage = '';
    }
    return (
      <div id='background-image'>
        <Container>
          <Grid verticalAlign='middle' textAlign='center' container>
            <Grid.Column width={8}>
              <Card.Group textAlign='left'>
                {this.props.vaccineforms.map((vaccineform) => <VaccineFormItem key={vaccineform._id} vaccineform={vaccineform} />)}
              </Card.Group>
              {vacImage}
            </Grid.Column>
          </Grid>
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
