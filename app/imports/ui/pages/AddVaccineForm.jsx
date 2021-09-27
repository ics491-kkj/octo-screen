import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { VaccineForms } from '../../api/vaccineform/Vaccineform';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  lastname: String,
  firstname: String,
  middlein: String,
  dob: String,
  pnum: String,
  
  vname1: String,
  lotnum1: String,
  date1: String,
  site1: String,
  
  vname2: String,
  lotnum2: String,
  date2: String,
  site2: String,
  
  image: String,
}, { requiredByDefault: false });

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddVaccineForm extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { lastname, firstname, dob, pnum, vname1, lotnum1, date1, site1, vname2, lotnum2, date2, site2, image } = data;
    const owner = Meteor.user().username;
    VaccineForms.collection.insert({ lastname, firstname, dob, pnum, vname1, lotnum1, date1, site1, vname2, lotnum2, date2, site2, image, owner },
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
              <TextField name='lastname' placeholder='Last Name'/>
              <TextField name='firstname' placeholder='First Name'/>
              <TextField name='middlein' placeholder='Middle Initial'/>
              <TextField name='dob' placeholder='Date of Birth (MM/DD/YYYY)'/>
              <NumField name='pnum' placeholder='Patient Number (Optional)'/>
              
              <Header as="h3" textAlign="left">First Dose</Header>
              <TextField name='vname1' placeholder='Vaccine Name'/>
              <TextField name='lotnum1' placeholder='Lot Number'/>
              <TextField name='date1' placeholder='Date Administered (MM/DD/YYYY)'/>
              <TextField name='site1' placeholder='Healthcare Professional or Clinic Site'/>
              
              <Header as="h3" textAlign="left">Second Dose</Header>
              <TextField name='vname2' placeholder='Vaccine Name'/>
              <TextField name='lotnum2' placeholder='Lot Number'/>
              <TextField name='date2' placeholder='Date Administered (MM/DD/YYYY)'/>
              <TextField name='site2' placeholder='Healthcare Professional or Clinic Site'/>
              <TextField name='image' placeholder='Image of COVID-19 Vaccination Record Card'/>
 
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
