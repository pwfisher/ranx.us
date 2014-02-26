App.LaddersCreateController = Ember.ObjectController.extend({
  actions: {
    save: function () {
      var newModel = this.store.createRecord('ladder', this.get('model'));
      newModel.set('dateCreated', new Date().toISOString());
      newModel.save();
      this.transitionToRoute('ladder', newModel);
    }
  }
});
