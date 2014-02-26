App.LadderRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('ladder', params.path);
  }
});
