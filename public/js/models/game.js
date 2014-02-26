App.Game = DS.Model.extend({
	'ladder_id': DS.attr(),
	'datetime': DS.attr(),
	'p1_id': DS.attr(),
	'p1_score': DS.attr('number'),
	'p2_id': DS.attr(),
	'p2_score': DS.attr('number')
});
