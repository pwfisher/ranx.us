App.GameEditRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('game');
  }
});
