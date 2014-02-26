App.UsersCreateController = Ember.ObjectController.extend({
  actions: {
    save: function () {
      // set creationDate
      this.get('model').set('creationDate', new Date().toISOString());

      // create a record and save it to the store
      var newUser = this.store.createRecord('user', this.get('model'));
      newUser.save();

      // redirect to the newly created user
      this.transitionToRoute('user', newUser);
    }
  }
});
