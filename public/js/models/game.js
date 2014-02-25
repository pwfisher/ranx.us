App.Game = DS.Model.extend({
	'ladder_id': DS.attr('integer'),
	'datetime': DS.attr(),
	'p1_id': DS.attr('integer'),
	'p1_score': DS.attr('integer'),
	'p2_id': DS.attr('integer'),
	'p2_score': DS.attr('integer')
});
