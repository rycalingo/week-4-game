// SCRIPTS

var game_rpg = {

	initGame: function() {
		this.gameCache();
	},
	gameCache: function() {
		this.$game = $("#game_rpg");
		this.$champions = this.$game.find("#character");
		this.$challengers = this.$game.find("#challengers");
		this.$attack_btn = this.$game.find("#attack_btn");

		this.$defender = this.$game.find("#defender");

		this.$results = this.$game.find("#results");

		console.log(this.$champions);
	},
	bindEvents: function() {
	},
	champion: function() {

	}
}
game_rpg.initGame();