// Set variables 

let targetNumber = "";
let wins = 0;
let losses = 0;
let counter = 0;
let images = ["https://media.giphy.com/media/ZRCTV8Lgq8I4U/giphy.gif", "https://i.pinimg.com/originals/27/c1/2e/27c12e5a0f729937512064cef530297d.gif", "https://i.gifer.com/VQZs.gif", "https://i.gifer.com/3uU0.gif"];

                // Functions for the game

	function randomTargetNumber () {
		targetNumber = Math.ceil(Math.random() * 50) + 2;
	}

	function resetCrystals () {
		for (var i = 0; i < images.length; i++) {
			var crystal = $("<img>");
			crystal.addClass("crystal");
			crystal.attr("src", images[i]);
			crystal.attr("value", (Math.ceil(Math.random() * 10) + 2));
			crystal.attr("height", "100");
			$(".crystal-images").append(crystal);
		}
	}

	function resetHTML () {
		$(".target-number").html(targetNumber);
		$(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
		$(".score-number").html(counter);
		$(".crystal-images").empty();
	}

	function totalReset () {
		randomTargetNumber ();
		counter = 0;
		resetHTML ();
		resetCrystals ();
	}

// Excuting Code

	// Set Up Page
	randomTargetNumber();
	resetHTML ();
	resetCrystals ();

// Click Event Functions
	function crystalClick () {
		
		counter += parseInt($(this).attr("value"));
		$(".score-number").html(counter);
		if (counter == targetNumber) {
			wins++;
			totalReset();
		}
		else if (counter > targetNumber) {
			losses++;
			totalReset();
		};
	};


	$(document).on("click", ".crystal", crystalClick);
