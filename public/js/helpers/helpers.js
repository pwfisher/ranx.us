Ember.Handlebars.registerBoundHelper('formatDate', function (date) {
  return date ? moment(date).fromNow() : '';
});
