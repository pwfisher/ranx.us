App.Score = DS.Model.extend({
  game: DS.belongsTo('game'),
  score: DS.attr('number'),
  user: DS.belongsTo('user')
});
