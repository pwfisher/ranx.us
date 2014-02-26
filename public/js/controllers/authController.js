App.AuthController = Ember.Controller.extend({

  authed: false,

  currentUser: null,

  init: function () {
    this.authClient = new FirebaseSimpleLogin(App.firebase, function (error, user) {
      if (error) {
        var msg = 'Firebase SimpleLogin authentication failed: ' + error;
        console.log(msg);
        alert(msg);
      }
      else if (user) {
        console.log('Authenticated Firebase SimpleLogin user:', user);
        this.set('authed', true);
        var userRef = new Firebase(App.dbRoot + 'users/' + user.uid);
        var self = this;
        var properties = {
          id: user.id,
          email: user.email
        };
        userRef.once('value', function (snapshot) {
          console.log('snapshot', snapshot, 'snapshot.val()', snapshot.val(), 'self', self, 'App', App);
          var data = snapshot.val() || {};
          var now = new Date().toISOString();

          if (!data.creationDate) {
            properties.creationDate = now;
          }

          if (!data.avatarUrl) {
            properties.avatarUrl = 'http://gravatar.com/avatar/' + md5(properties.email);
          }

          var user = EmberFire.Object.extend({}).create({ ref: userRef });
          properties.lastLoginDate = now;
          user.setProperties(properties);

          self.set('currentUser', user);
        });
      }
      else {
        console.log('Firebase SimpleLogin: not logged in');
        this.set('authed', false);
      }
    }.bind(this));
  },

  login: function () {
    this.authClient.login('password');
  },

  logout: function () {
    this.authClient.logout();
  }

});
