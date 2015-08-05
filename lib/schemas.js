Collections = {};
Schema = {};
TabTables = {};
Meteor.isClient && Template.registerHelper('TabularTables', TabTables);

Collections.Issues = new Mongo.Collection('issues');

Schema.Issues = new SimpleSchema({
  Description: {
    type: String,
    max: 500,
    optional: true
  },
  User: {
    type: String,
    label: "User",
    optional: true
  },
  Notes: {
    type: String,
    label: "Notes",
    optional: true
  },
  Archived: {
    type: Object,
    optional: true
  },
  "Archived.Archived": {
    type: Boolean,
    optional: true
  },
  "Archived.User": {
    type: String,
    max: 50,
    label: "Archiving User",
    optional: true
  }, 
  "Archived.Notes": {
    type: String,
    label: "Notes",
    optional: true
  }
});

Collections.Issues.attachSchema(Schema.Issues);

TabTables.Issues = new Tabular.Table({
  name: "Issues",
  collection: Collections.Issues,
  columns: [
    {data: "Description", title: "Description"},
    {data: "Notes", title: "Notes"}
  ]
});

TabTables.Issues_Archived = new Tabular.Table({
  name: "Issues Archived",
  collection: Collections.Issues,
  columns: [
    {data: "Description", title: "Description"},
    {data: "Notes", title: "Notes"}
  ]
});

