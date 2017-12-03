// SCRIPTS

var game_rpg = {

	_obj: this,
	initGame: function() {
		this.gameCache();
		this.pickChampion();
	},
	gameCache: function() {
		this.$game = $("#game_rpg");
		this.$character_set = this.$game.find(".character");
		this.$fighter_set = this.$game.find("#fighters");
		this.$attack_btn = this.$game.find("#attack_btn");

		this.$challenger_set = this.$game.find("#challenger");

		this.$results = this.$game.find("#results");
	},
	pickChampion: function(_obj) {
		this.$character_set.on('click', function() {

			game_rpg.$champion = $(this);

			game_rpg.$charFighter = game_rpg.$champion.siblings();

			game_rpg.$champion.addClass("champion");

			game_rpg.$charFighter.addClass("fighter");

			game_rpg.$fighter_set.html(game_rpg.$charFighter);

			game_rpg.$character_set.unbind();
			
			game_rpg.pickChallenger();
		});
	},
	pickChallenger: function() {
		this.$charFighter.on('click', function() {
			game_rpg.$challenger = $(this);

			game_rpg.$challenger.addClass("challenger");

			game_rpg.$challenger_set.html(game_rpg.$challenger);
		});
	},
	restart: function() {}
}
game_rpg.initGame();