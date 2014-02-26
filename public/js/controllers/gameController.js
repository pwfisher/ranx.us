App.GameController = Ember.ObjectController.extend({

  deleteMode: false,

  actions: {

    delete: function () {
      this.toggleProperty('deleteMode');
    },

    cancelDelete: function () {
      this.set('deleteMode', false);
    },

    confirmDelete: function () {
      this.get('model').deleteRecord();
      this.get('model').save();
      this.transitionToRoute('games');
      this.set('deleteMode', false);
    },

    edit: function () {
      this.transitionToRoute('game.edit');
    }
  }
});
