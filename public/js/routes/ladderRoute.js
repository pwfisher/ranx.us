App.LadderRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('ladder', params.path);
  },

  actions: {
    willTransition: function () {
      this.controllerFor('ladder').send('cancelDelete');
    }
  }
});
