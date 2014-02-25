App.IndexRoute = Ember.Route.extend({
  model: function() {
    return EmberFire.Object.create({
      ref: App.firebase
    });
  }
});
