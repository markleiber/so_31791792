Template.list.helpers({
  issues: function(){
    return Collections.Issues.find({});
  }
});

Template.archiveIssue.helpers({
  doc: function () {
    return Session.get("archiveDoc");
  },
  collection: function () {
    return Collections.Issues;
  }
});
