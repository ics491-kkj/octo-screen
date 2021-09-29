import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, HiddenField, NumField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { VaccineForms } from '../../api/vaccineform/Vaccineform';

const bridge = new SimpleSchema2Bridge(VaccineForms.schema);

/** Renders the Page for editing a single document. */
class EditVaccineForm extends React.Component {

  // On successful submit, insert the data.
  submit(data) {
    const { lastname, firstname, middlein, dob, pnum, vname1, lotnum1, date1, site1, vname2, lotnum2, date2, site2, image, _id } = data;
    VaccineForms.collection.update(_id, { $set: { lastname, firstname, middlein, dob, pnum, vname1, lotnum1, date1, site1, vname2, lotnum2, date2, site2, image } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  }

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  renderPage() {
    let fRef = null;
       return (
         <Grid container centered>
           <Grid.Column>
             <Header as="h2" textAlign="center">Edit Vaccine Form</Header>
             <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
               <Segment>
                 <TextField name='lastname' showInlineError={true} placeholder='e.g. Doe'/>
                 <TextField name='firstname' placeholder='e.g. John'/>
                 <TextField name='middlein' placeholder='e.g. B'/>
                 <TextField name='dob' placeholder='e.g. 09/27/2021'/>
                 <TextField name='pnum' placeholder='e.g. 18482910'/>
                 
                 <Header as="h3" textAlign="left">First Dose</Header>
                 <TextField name='vname1' placeholder='e.g. Pfizer'/>
                 <TextField name='lotnum1' placeholder='e.g. EH9899'/>
                 <TextField name='date1' placeholder='e.g. 12/14/2020'/>
                 <TextField name='site1' placeholder='e.g. Kaiser Permanente Los Angeles'/>
                 
                 <Header as="h3" textAlign="left">Second Dose</Header>
                 <TextField name='vname2' placeholder='e.g. Pfizer'/>
                 <TextField name='lotnum2' placeholder='e.g. EH9681'/>
                 <TextField name='date2' placeholder='e.g. 01/07/2021'/>
                 <TextField name='site2' placeholder='e.g. Kaiser Permanente Los Angeles'/>
                 <TextField name='image' placeholder='e.g. https://www.bu.edu/files/2021/04/leadin-AP_20353529266022.jpg'/>

                 <SubmitField value='Submit'/>
                 <ErrorsField/>
               </Segment>
             </AutoForm>
           </Grid.Column>
         </Grid>
       );
  }
}

// Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use.
EditVaccineForm.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to VaccineForm documents.
  const subscription = Meteor.subscribe(VaccineForms.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the document
  const doc = VaccineForms.collection.findOne(documentId);
  return {
    doc,
    ready,
  };
})(EditVaccineForm);
