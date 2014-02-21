var App,                                            // Ember.Application
    auth,                                           // FirebaseSimpleLogin
    controller,
    firebase;                                       // Firebase

// Create Ember application
App = Ember.Application.create();

// Configure fixture data source
App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {
  this.resource('users', function () {
    this.resource('user', { path: '/:user_id'}, function () {
      this.route('edit');
    });
    this.route('create');
  });
  this.resource('ladders', function () {
    this.resource('ladder', { path: '/:ladder_path'}, function () {
      this.route('edit');
    });
    this.route('create');
  });
});

App.Router.reopen({
  // location: 'history'
});

App.User = DS.Model.extend({
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  fullName: function () {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});

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

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return EmberFire.Object.create({
      ref: firebase
    });
  }
});

App.LaddersRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('ladder');
  }
});

App.UsersRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('user');
  }
});

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
