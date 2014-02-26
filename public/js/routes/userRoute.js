App.UserRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('user', params.user_id);
  },

  actions: {
    willTransition: function () {
      this.controllerFor('user').send('cancelDelete');
    }
  }
});
