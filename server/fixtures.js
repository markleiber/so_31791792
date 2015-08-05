var insertDemoData = function(){
  console.log("inserting demo data");
  Collections.Issues.insert({
    Description: 'The first issue.',
    Notes: 'This is the note for issue #1.'
  });
  Collections.Issues.insert({
    Description: 'Report of a second issue has arrived.',
    Notes: 'This is the note for issue #2.  The issue appears to be different from issue #1.'
  });
};

if (Collections.Issues.find().count() === 0) {
   insertDemoData();
}
