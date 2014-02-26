App.LaddersRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('ladder');
  }
});
