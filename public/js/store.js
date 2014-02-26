// Firebase reference
App.dbRoot = 'https://ranx.firebaseio.com/';
App.firebase = new Firebase(App.dbRoot);

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: App.firebase
});
