App.LadderEditController = Ember.ObjectController.extend({
  actions: {
    save: function () {
      var ladder = this.get('model');
      ladder.save();
      this.transitionToRoute('ladder', ladder);
    }
  }
});
