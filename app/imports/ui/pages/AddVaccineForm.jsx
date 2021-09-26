import React from 'react';
import { VaccineForms, VaccineFormSchema } from '/imports/api/vaccineform/vaccineform';
import { Grid, Segment, Header } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/es5/AutoForm';
import TextField from 'uniforms-semantic/es5/TextField';
import LongTextField from 'uniforms-semantic/es5/LongTextField';
import SubmitField from 'uniforms-semantic/es5/SubmitField';
import HiddenField from 'uniforms-semantic/es5/HiddenField';
import ErrorsField from 'uniforms-semantic/es5/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';

/** Renders the Page for adding a document. */
class AddVaccineForm extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Add succeeded' });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  submit(data) {
    const { lastname, firstname, dob, pnum, vname, lotnum } = data;
    const owner = Meteor.user().username;
    VaccineForms.insert({ lastname, firstname, dob, pnum, vname, lotnum, owner }, this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center" inverted>Vaccine Form</Header>
            <AutoForm ref={(ref) => { this.formRef = ref; }} schema={VaccineSchema} onSubmit={this.submit}>
              <Segment>
                <TextField name='lastname' placeholder='Last Name'/>
                <TextField name='firstname' placeholder='First Name'/>
                <TextField name='dob' placeholder='Date of Birth (MM/DD/YYYY)'/>
                <TextField name='pnum' placeholder='Patient Number'/>
                <TextField name='vname' placeholder='Vaccine Product Name/Manufacturer'/>
                <TextField name='lotnum' placeholder='Lot Number'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
                <HiddenField name='owner' value='fakeuser@foo.com'/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddVaccineForm;
