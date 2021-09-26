import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const VaccineForms = new Mongo.Collection('VaccineForms');

/** Create a schema to constrain the structure of documents associated with this collection. */
const VaccineFormSchema = new SimpleSchema({
  lastname: String,
  firstname: String,
  dob: String,
  pnum: String,
  vname: String,
  lotnum: String,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
VaccineForms.attachSchema(VaccineFormSchema);

/** Make the collection and schema available to other code. */
export { VaccineForms, VaccineFormSchema };
