App.UsersCreateRoute = Ember.Route.extend({

  model: function () {
    return Em.Map.create({});
  },

  // reuse the user/edit template
  renderTemplate: function () {
    this.render('user.edit', {
      controller: 'usersCreate'
    });
  }
});
