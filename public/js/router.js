App.Router.map(function() {
  this.resource('users', function () {
    this.resource('user', { path: '/:user_id'}, function () {
      this.route('edit');
    });
    this.route('create');
  });
  this.resource('ladders', function () {
    this.resource('ladder', { path: '/:path'}, function () {
      this.route('edit');
    });
    this.route('create');
  });
});

App.Router.reopen({
  // location: 'history'
});
