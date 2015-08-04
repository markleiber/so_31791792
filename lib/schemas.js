Collections = {};
var Schemas = {};

Collections.Issues = new Mongo.Collection("issues");

Schemas.Issue = new SimpleSchema({
    Title: {
        type: String,
        label: "Title",
        max: 200
    },
    Notes: {
        type: String,
        label: "Notes",
        optional: true,
        max: 1000
    }
});

Collections.Issues.attachSchema(Schemas.Issue);

