App.AuthController = Ember.Controller.extend({

  currentUser: null,
  email: '',
  error: '',
  password: '',

  init: function () {
    this.authClient = new FirebaseSimpleLogin(App.firebase, function (error, user) {

      if (error) {
        // Authentication failed
        this.set('error', error);
      }

      else if (user) {
        // Authentication succeeded
        this.set('error', '');
        console.log('Authenticated Firebase SimpleLogin user:', user);
        var userRef = new Firebase(App.dbRoot + 'users/' + user.uid);
        var self = this;
        var properties = {
          id: user.id,
          email: user.email
        };
        userRef.once('value', function (snapshot) {
          var data = snapshot.val() || {};
          var now = new Date().toISOString();
          if (!data.dateCreated) {
            properties.dateCreated = now;
          }
          if (!data.avatarUrl) {
            properties.avatarUrl = 'http://gravatar.com/avatar/' + md5(properties.email);
          }
          var model = EmberFire.Object.extend({}).create({ ref: userRef });
          properties.dateVisited = now;
          model.setProperties(properties);
          self.set('currentUser', model);
        });
      }

      else {
        // Not logged in
        this.set('error', '');
        this.set('currentUser', null);
      }
    }.bind(this));
  },

  login: function () {
    this.authClient.login('password', {
      email: this.get('email'),
      password: this.get('password')
    });
  },

  logout: function () {
    this.authClient.logout();
  }
});
