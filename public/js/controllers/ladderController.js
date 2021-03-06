App.LadderController = Ember.ObjectController.extend({

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
      this.transitionToRoute('ladders');
      this.set('deleteMode', false);
    },

    edit: function () {
      this.transitionToRoute('ladder.edit');
    }
  }
});
