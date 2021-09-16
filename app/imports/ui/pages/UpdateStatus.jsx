import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SelectField, SubmitField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Status } from '../../api/status/Status';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  condition: {
    type: String,
    allowedValues: ['good', 'bad'],
    defaultValue: 'good',
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class UpdateStatus extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { condition } = data;
    const name = Meteor.user().username;
    const owner = Meteor.user().username;
    const date = Date();
    Status.collection.insert({ name, condition, date, owner },
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
          <Header as="h2" textAlign="center">How are you feeling?</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
            <Segment>
              <p>Do any of these symptoms apply to you?</p>
              <ul>
                <li>Fever greater than 100.4 °F or feeling feverish (chills, sweating)</li>
                <li>Cough</li>
                <li>Shortness of breath/difficulty breathing</li>
                <li>Sore throat</li>
                <li>Unexplained muscle/body aches</li>
                <li>Nausea/vomiting or diarrhea</li>
                <li>Loss of senses of taste or smell</li>
                <li>Runny or congested nose</li>
                <li>Headache</li>
                <li>Skin rash</li>
                <li>Chest pain or pressure</li>
              </ul>
              <SelectField name='condition'/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UpdateStatus;
