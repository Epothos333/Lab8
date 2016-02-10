function sphereRadius() {

	function rToV() {

		var radi = document.getElementById("radius").value;
		radi = parseFloat(radi);
		var theAns;
		if (radi < 0) {
			theAns = "Sorry, negative numbers do not work!";
		}
		else if (isNaN(radi)) {
			theAns = "Sorry, try a number";
		}
		else {
			theAns = ((4/3)*(3.14)*(radi*radi*radi)).toFixed(2);

		}
		var ans = document.getElementById("answerHere");
		ans.innerHTML = theAns;
	}

	var volumeCalc = document.getElementById("circlebutton");
	volumeCalc.addEventListener("click", rToV);
}

sphereRadius();