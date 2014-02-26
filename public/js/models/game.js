App.Game = DS.Model.extend({
  dateCreated: DS.attr('date'),
  ladder: DS.belongsTo('ladder'),
  scores: DS.hasMany('score'),
});
