// Crystal Game
// vars 
	// number to get 19 - 120
	// number you have
	// random numbers for crystal value 1 - 12
	// wins

// 1
// assign crystals random number
// on click to crystals add random number to user
	// if higher than goal lose
	// if lower the goal goto 1

var crystal = {
	numGoal: 0,
	numUser: 0,
	diamond: 0,
	ruby: 0,
	emerald: 0,
	opal: 0,
	wins: 0,

	randomNumber: function(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	},

	newCrys: function() {
		this.diamond = this.randomNumber(1, 12);
		this.ruby = this.randomNumber(1, 12);
		this.emerald = this.randomNumber(1, 12);
		this.opal = this.randomNumber(1, 12);
	},
	//was write but thats a keyword so made it right.  this wrtes the text
	right: function() {
		$("#user").text(crystal.numUser)
		$("#goal").text(crystal.numGoal)
		$("#wins").text(crystal.wins)
	},

	newGoal: function() {
		this.numGoal = this.randomNumber(19, 120)
	},

	compare: function() {
		if (this.numGoal === this.numUser) {
			setTimeout(function() {
				crystal.wins++
				crystal.numUser = 0;
				crystal.newCrys();
				crystal.newGoal();
				crystal.right()
			}, 500);

		}

		else if (this.numGoal < this.numUser) {
			setTimeout(function() { 
				crystal.numUser = 0;
				crystal.newCrys();
				crystal.newGoal();
				crystal.right();
			}, 500);
			
		}
	}
};

//assigns numbers when page loads
$( document ).ready(function() {
	crystal.newCrys();
});

// I should be able to compound these four functions into one
$("#diamond").on("click", function() {
	crystal.numUser += crystal.diamond
});

$("#ruby").on("click", function() {
	crystal.numUser += crystal.ruby
});

$("#emerald").on("click", function() {
	crystal.numUser += crystal.emerald
});

$("#opal").on("click", function() {
	crystal.numUser += crystal.opal
});

// reset for next round and check to see if they won
$(document).on("click", function(event) {
	crystal.right();
	crystal.compare();
});