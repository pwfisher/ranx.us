App.IndexController = Ember.Controller.extend({

  error: '',
  isProcessing: false,

  login: function() {
    this.set('loginFailed', false);
    this.set('isProcessing', true);

    App.auth.login('password', {
      email: this.get('email'),
      password: this.get('password'),
      rememberMe: true
    });
  }
});
