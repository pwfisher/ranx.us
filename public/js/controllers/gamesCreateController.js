App.GamesCreateController = Ember.ObjectController.extend({
  actions: {
    save: function () {
      var game = this.store.createRecord('game', this.get('model'));
      game.set('dateCreated', new Date().toISOString());
      game.save();
      this.transitionToRoute('game', game);
    }
  }
});
