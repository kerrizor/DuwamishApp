var duwamish={};

duwamish.User=function(name, location, cause) {
  this.name=name;
  this.location=location;
  this.cause=cause;
}

duwamish.Politician=function(name,email) {
  this.name=name;
  this.email=email;
}

duwamish.sessions=[duwamish.appUsers];
duwamish.contacts=[duwamish.appContacts];

duwamish.User.prototype.showMe = function(){
  $('.inputName').append(duwamish.newUser.name);
  $('.inputLocation').append(duwamish.newUser.location);
  $('.inputCause').append("I stand with the Duwamish because " + duwamish.newUser.cause + ".");
}

$('.user-button').on('click', function(e) {
  e.preventDefault();
  var userName= $('.name').val();
  var userLocation= $('.place').val();
  var userCause= $('.cause').val();
  duwamish.newUser = new duwamish.User(userName, userLocation, userCause);
  duwamish.sessions.push(duwamish.newUser);
  duwamish.appUsers.push(duwamish.newUser);
  duwamish.newUser.showMe();
  $('.polpick').removeAttr('id');
});

$('.polbutton').on('click', function(e){
  e.preventDefault();
  var polName= $(this).attr('title')
  var polEmail= $(this).attr('id');
  duwamish.newPolitician = new duwamish.Politician(polName, polEmail);
  duwamish.contacts.push(duwamish.newPolitician);
  $('.sirORmadam').append("Dear " + polName + ",");
  console.log(duwamish.newUser);
  duwamish.appContacts.push(duwamish.newPolitician)
});

$('.fillin-button').on('click', function(e) {
  $('.choose-letter').removeAttr('id');
});

duwamish.appUsers = new Firebase('https://standwithduwamish.firebaseio.com/users');
duwamish.appContacts = new Firebase('https://standwithduwamish.firebaseio.com/contacts');
