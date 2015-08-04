Meteor.methods({
  'editIssue': function(modifier,docId){
    console.log('editIssue called; modifier = ' + JSON.stringify(modifier, null, 4) + '; docId = ' + docId);
    Collections.Issues.update({
      "_id": docId
    },
      modifier
    );
  }
});
