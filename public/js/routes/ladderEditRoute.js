App.LadderEditRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('ladder');
  }
});
