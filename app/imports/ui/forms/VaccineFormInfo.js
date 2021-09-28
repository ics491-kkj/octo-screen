import SimpleSchema from 'simpl-schema';

const VaccineFormInfoSchema = new SimpleSchema({
  lastname: { label: 'Last Name', type: String },
  firstname: { label: 'First Name', type: String },
  middlein: { label: 'Middle Initial', type: String, optional: true },
  dob: { label: 'Date of Birth (MM/DD/YYYY)', type: String },
  pnum: { label: 'Patient Number', type: String, optional: true },
                                               
  vname1: { label: 'Product Name / Manufacturer', type: String },
  lotnum1: { label: 'Lot Number', type: String },
  date1: { label: 'Date Administered', type: String },
  site1: { label: 'Healthcare Professional or Clinic Site', type: String },
                                               
  vname2: { label: 'Product Name / Manufacturer', type: String },
  lotnum2: { label: 'Lot Number', type: String },
  date2: { label: 'Date Administered', type: String },
  site2: { label: 'Healthcare Professional or Clinic Site', type: String },
  image: { label: 'Image of Vaccination Card', type: String, optional: true },
});

export {VaccineFormInfoSchema};
