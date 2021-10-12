import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The VaccineFormsCollection. It encapsulates state and variable values for VaccineForms.
 */
class VaccineFormsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'VaccineFormsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      lastname: String,
      firstname: String,
      middlein: { type: String, optional: true },
      dob: String,
      pnum: { type: String, optional: true },

      vname1: String,
      lotnum1: String,
      date1: String,
      site1: String,

      vname2: String,
      lotnum2: String,
      date2: String,
      site2: String,
      image: { type: String, optional: true },
      owner: String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the VaccineFormsCollection.
 * @type {VaccineFormsCollection}
 */
export const VaccineForms = new VaccineFormsCollection();
