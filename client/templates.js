AutoForm.debug();

Template.registerHelper('TabTables', {
  Issues: TabTables.Issues,
  Issues_Archived: TabTables.Issues_Archived
});

Template.insertIssue.helpers({
  collection: function () {
    return Collections.Issues;
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

Template.archiveIssueModal.events({
  "click .archiveButton": function (event) {
    Session.set("archiveDoc", this);
  }
});
