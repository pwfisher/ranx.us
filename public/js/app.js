var App,                                            // Ember.Application
    auth,                                           // FirebaseSimpleLogin
    controller,
    firebase;                                       // Firebase

// Create Ember application
App = Ember.Application.create();

App.UsersController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true
});

// App.IndexRoute = Ember.Route.extend({
//   model: function() {
//     return ['red', 'yellow', 'blue'];
//   }
// });

// Firebase reference
firebase = new Firebase("https://ranx.firebaseio.com/");

App.IndexController = Ember.Controller.extend({

  error: '',
  isProcessing: false,

  login: function() {
    controller = this;
    this.set('loginFailed', false);
    this.set('isProcessing', true);

    auth.login('password', {
      email: this.get('email'),
      password: this.get('password'),
      rememberMe: true
    });
  }
});

// FirebaseSimpleLogin auth
auth = new FirebaseSimpleLogin(firebase, function (error, user)
{
  // controller.set('error', '');
  // controller.set('isProcessing', false);

  if (error) {
    // an error occurred while attempting login
    // controller.set('error', error.code);
    console.log(error);
  } else if (user) {
    // user authenticated with Firebase
    console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
  } else {
    // user is logged out
    console.log('not logged in');
  }
});
