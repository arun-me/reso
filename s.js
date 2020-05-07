// clock

	function updateClock ( )
	{
	  var currentTime = new Date ( );

	  var currentHours = currentTime.getHours ( );
	  var currentMinutes = currentTime.getMinutes ( );
	  var currentSeconds = currentTime.getSeconds ( );

	  // Pad the minutes and seconds with leading zeros, if required
	  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
	  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

	  // Choose either "AM" or "PM" as appropriate
	  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

	  // Convert the hours component to 12-hour format if needed
	  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

	  // Convert an hours component of "0" to "12"
	  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

	  // Compose the string for display
	  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

	  // Update the time display
	  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
	}

// todo
	var button = document.getElementById("enter");
	var input = document.getElementById("userinput");
	var ul = document.querySelector("ul");

	function inputLength() {
		return input.value.length;
	}

	function createListElement() {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	}

	function addListAfterClick() {
		if (inputLength() > 0) {
			createListElement();
		}
	}

	function addListAfterKeypress(event) {
		if (inputLength() > 0 && event.keyCode === 13) {
			createListElement();
		}
	}

	button.addEventListener("click", addListAfterClick);

	input.addEventListener("keypress", addListAfterKeypress);


// gradient

	var css1 = document.querySelector(".h31");
	var css2 = document.querySelector(".h32");
	var color1 = document.querySelector(".color1");
	var color2 = document.querySelector(".color2");
	var color3 = document.querySelector(".color3");
	var color4 = document.querySelector(".color4");
	var body = document.getElementById("gradient");
	var test = document.getElementById("test");
	function setGradient() {
		css1.textContent="";
		body.style.backgroundColor="";
		body.style.background = 
		"linear-gradient(to right,"+ color1.value + ", "+ color2.value + ")";
		css1.textContent = body.style.background + ";";
	}

	function setBackground() {
		css1.textContent="";
		body.style.background="";
		body.style.backgroundColor = color3.value;
		css1.textContent = "backgroundColor = "+ body.style.backgroundColor + ";";
	}
	function setFontColor() {
		test.style.color = color4.value;
		css2.textContent = test.style.color ;
	}
	// document.getElementById("gradient").style.display="none";
	document.getElementById("p1").innerHTML=Date();
	color1.addEventListener("input", setGradient);

	color2.addEventListener("input", setGradient);

	color3.addEventListener("input", setBackground);

	color4.addEventListener("input", setFontColor);