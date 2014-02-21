App.Ladder = DS.Model.extend({
	'name': DS.attr('string'),
	'path': DS.attr('string'),
	'players_per_game': DS.attr('integer')
});
