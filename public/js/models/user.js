App.User = DS.Model.extend({
  avatarUrl : DS.attr(),
  bio: DS.attr('string'),
  creationDate: DS.attr(),
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  fullName: function () {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName'),
  lastLoginDate: DS.attr('string'),
  lastName: DS.attr('string')
});
