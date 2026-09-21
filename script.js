function respond() {
	// Get what the user typed
	let input = document.getElementById("userInput").value.toLowerCase().trim();

	// Where we will display the chatbot's response
	let response = document.getElementById("response");
	
	// Images
	let image = document.getElementById("resultImage");
	
	// Make sure the user typed something
	if (input === "") {
		response.textContent = "You gonna say something?";
		image.style.display = "none";
		return;
	}

	// Greetings
	if (
		input.includes("hello") ||
		input.includes("what's up") ||
		input.includes("hey") ||
		input.includes("whats up")
	){
		response.textContent = "What's up with ya?";

		image.style.display = "none";
	}

	// Asking the bot's name
	else if (
		input.includes("your name") ||
		input.includes("who are you")
	) {
		response.textContent = "I am Calen 2.0.";

		image.style.display = "none";
	}

	//Asking what it can do
	else if (
		input.includes("what can you do") ||
		input.includes("help")
	) {
		response.textContent = "Ask me something and I'll respond.";

		image.style.display = "none";
	}

	// Asking how it is
	else if (
		input.includes("how are you") ||
		input.includes("how are u")
	) {
		response.textContent = "I'm good, just vibing on your computer.";
		
		image.style.display = "none";
	}

	// Saying goodbye
	else if (
		input.includes("bye") ||
		input.includes("goodbye")
	) {
		response.textContent = "ight, talk to you soon";

		image.style.display = "none";
	}
	
	// Say a name
	else if (
		input.includes("brianna") ||
		input.includes("brie")
	) {
		//Open a new window ONLY for the response
		window.open("brie.html", "_blank");
	}

	else if (
		input.includes("mom") ||
		input.includes("kim") ||
		input.includes("Kimberley")
	) {
		
		//Open a new window ONLY for the response
		window.open("mom.html", "_blank");
	}
	
	else if (
		input.includes("dad") ||
		input.includes("donald")
	) {
		response.textContent = "What's up dad";

		image.style.display = "none";
	}

	else if (
		input.includes("caleb") ||
		input.includes("kendall") ||
		input.includes("kennedy") ||
		input.includes("khloe")
	) {
		response.textContent = "What's up, Family";

		image.style.display = "none";
	}

	else if (
		input.includes("eddie") ||
		input.includes("jc") ||
		input.includes("jamond") ||
		input.includes("dee") ||
 		input.includes("deanthony") ||
		input.includes("hill")
	) {
		response.textContent = "Ugly ass";

		image.style.display = "none";
	}


	// Unknown message
	else {
		response.textContent = " I'm new twin, I'm still in the learning process.";

		image.style.display = "none";
	}

	// Clear the input box
	document.getElementById("userInput").value = "";

	}


	