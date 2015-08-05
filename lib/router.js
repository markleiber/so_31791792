Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.route('/', function () {
  this.render('issues');
});

Router.route('/edit/:_id', function() {
  this.render('archiveIssue');
  Session.set("archiveDoc", Collections.Issues.findOne({_id: this.params._id}));
},
{
  data: function(){
    return Collections.Issues.findOne({_id: this.params._id});
  }
});
