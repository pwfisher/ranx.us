// Create Ember application
var App = Ember.Application.create();

// Firebase reference
App.firebase = new Firebase('https://ranx.firebaseio.com/');

// FirebaseSimpleLogin auth
App.auth = new FirebaseSimpleLogin(App.firebase, function (error, user)
{
  if (error) {
    // an error occurred while attempting login
    console.log(error);
  } else if (user) {
    // user authenticated with Firebase
    console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
  } else {
    // user is logged out
    console.log('not logged in');
  }
});
