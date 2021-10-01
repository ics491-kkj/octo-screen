import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { VaccineForms } from '../../api/vaccineform/Vaccineform';
import {VaccineFormInfoSchema} from '../forms/VaccineFormInfo'

const bridge = new SimpleSchema2Bridge(VaccineFormInfoSchema);

/** Renders the Page for adding a document. */
class AddVaccineForm extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { lastname, firstname, middlein, dob, pnum, vname1, lotnum1, date1, site1, vname2, lotnum2, date2, site2, image } = data;
    const owner = Meteor.user().username;
    VaccineForms.collection.insert({ lastname, firstname, middlein, dob, pnum, vname1, lotnum1, date1, site1, vname2, lotnum2, date2, site2, image, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      });
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    let fRef = null;
    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Add Vaccine Form</Header>
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

export default AddVaccineForm;
