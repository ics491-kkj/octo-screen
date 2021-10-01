import React from 'react';
import { Grid, Segment, List, Button } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SelectField, SubmitField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Redirect } from 'react-router';
import { Status } from '../../api/status/Status';
import { NavLink } from 'react-router-dom';

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

  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

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
    this.setState({ redirect: true });
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    if (this.state.redirect) {
      return <Redirect to='/'/>;
    }

    let fRef = null;
    const segmentStyle = {
      margin: '50px 30px',
      borderRadius: '15px',
      padding: '20px 20px',
    };
    const listStyle = {
      padding: '20px 20px',
    };
    return (
      <div id="background-image">
        <Grid container centered>
          <Grid.Column width={10}>
            <AutoForm ref={ref => {
              fRef = ref;
            }} schema={bridge} onSubmit={data => this.submit(data, fRef)}>
              <Segment style={segmentStyle}>
                <h1 align="center" style={listStyle}>Do any of these symptoms apply to you?</h1>
                <List as='ol'>
                  <li value='-'>
                    Have you tested positive for COVID-19 and are on home isolation?
                  </li>
                  <li value='-'> Check for Symptoms of Illness: If you have any symptoms of illness,
                    do not come to campus or the workplace. Do you currently have any of the following
                    symptoms that are new, worsening, and not attributable to a pre-existing condition?
                  </li>
                  <ul>
                    <li value="•">Fever greater than 100.4 °F or feeling feverish (chills, sweating)</li>
                    <li value="•">Cough</li>
                    <li value="•">Shortness of breath/difficulty breathing</li>
                    <li value="•">Sore throat</li>
                    <li value="•">Unexplained muscle/body aches</li>
                    <li value="•">Nausea/vomiting or diarrhea</li>
                    <li value="•">Loss of senses of taste or smell</li>
                    <li value="•">Runny or congested nose</li>
                    <li value="•">Headache</li>
                    <li value="•">Skin rash</li>
                    <li value="•">Chest pain or pressure</li>
                  </ul>
                  <li value='-' style={listStyle}>
                    Check for Recent COVID-19 Exposure:
                  </li>
                  <ul>
                    <li value="•">Have you traveled out of the state and are currently under quarantine
                      orders by the Department of Health or your medical care provider ?</li>
                    <li value="•">Are you unvaccinated and have been in close contact (&lt;6 feet for ≥ 15
                      minutes, cumulatively, over a 24-hour period) with anyone who has an active,
                      diagnosed case of COVID-19?  Note: Healthcare students/personnel wearing appropriate
                      PPE at ALL TIMES while caring for a patient with COVID-19 would NOT be considered a
                      close contact (ref. DOH medical advisory #16)</li>
                    <li value="•">Has the Department of Health told you that you have been in contact with
                      a person with COVID-19 AND you are UNvaccinated?</li>
                  </ul>
                </List>
                <SelectField name='condition'/>
                <Button secondary as={NavLink} exact to='/'>Back</Button>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default UpdateStatus;
