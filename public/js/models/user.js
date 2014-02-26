App.User = DS.Model.extend({
  avatarUrl : DS.attr('string'),
  bio: DS.attr('string'),
  dateCreated: DS.attr('date'),
  dateVisited: DS.attr('date'),
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  fullName: function () {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName'),
  games: DS.hasMany('game'),
  ladders: DS.hasMany('ladder'),
  lastName: DS.attr('string')
});
