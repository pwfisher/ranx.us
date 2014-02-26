App.GameEditController = Ember.ObjectController.extend({
  actions: {
    save: function () {
      var game = this.get('model');
      game.save();
      this.transitionToRoute('game', game);
    }
  }
});
