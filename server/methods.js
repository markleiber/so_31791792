if (Meteor.isServer){
  Meteor.methods({
    newIssue: function(doc) {
      check(doc, Schema.Issues);
      Collections.Issues.insert({
        User: Meteor.user()._id,
        Description: doc.Description,
        createdAt: new Date,
        Archived: {
          "Archived": false,
          "User": null,
          "Notes": null
        },
      });
    },
    editIssue: function(modifier, docId) {
      console.log('editIssue called; modifier = ' + JSON.stringify(modifier, null, 4) + '; docId = ' + docId);
      check(modifier, Schema.Issues);
      Collections.Issues.update({
          "_id": docId
        },
        modifier
      );
    },
  });
}
