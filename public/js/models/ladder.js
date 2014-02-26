App.Ladder = DS.Model.extend({
	dateCreated: DS.attr('date'),
	games: DS.hasMany('game'),
	name: DS.attr('string'),
	path: DS.attr('string'),
	playersPerGame: DS.attr('number'),
	users: DS.hasMany('user')
});
