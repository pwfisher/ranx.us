App.ApplicationController = Ember.Controller.extend({

	actions: {

		login: function () {
			this.get('auth').login();
		},

		logout: function () {
			this.get('auth').logout();
		}
	}
});
