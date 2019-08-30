document.getElementById("qDiv1").style.display = "block";
document.getElementById("qDiv2").style.display = "none";
document.getElementById("qDiv3").style.display = "none";
document.getElementById("qDiv4").style.display = "none";
document.getElementById("qDiv5").style.display = "none";
document.getElementById("final").style.display = "none";

var answers=[];

function nextQ2() {

	var q1Answer = document.getElementById("q1A").value;

	if (q1Answer == "null") {
		alert("Please select your choice !");
	}else{
		answers[0] = q1Answer;

		document.getElementById("qDiv1").style.display = "none";
		document.getElementById("qDiv2").style.display = "block";
		document.getElementById("qDiv3").style.display = "none";
		document.getElementById("qDiv4").style.display = "none";
		document.getElementById("qDiv5").style.display = "none";
		document.getElementById("final").style.display = "none";
	}
}

function nextQ3() {

	var q2Answer = document.getElementById("q2A").value;

	if (q2Answer == "null") {
		alert("Please select your choice !");
	}else{
		answers[1] = q2Answer;

		document.getElementById("qDiv1").style.display = "none";
		document.getElementById("qDiv2").style.display = "none";
		document.getElementById("qDiv3").style.display = "block";
		document.getElementById("qDiv4").style.display = "none";
		document.getElementById("qDiv5").style.display = "none";
		document.getElementById("final").style.display = "none";
	}
}
function nextQ4() {
	var q3Answer = document.getElementById("q3A").value;

	if (q3Answer == "null") {
		alert("Please select your choice !");
	}else{
		answers[2] = q3Answer;

		document.getElementById("qDiv1").style.display = "none";
		document.getElementById("qDiv2").style.display = "none";
		document.getElementById("qDiv3").style.display = "none";
		document.getElementById("qDiv4").style.display = "block";
		document.getElementById("qDiv5").style.display = "none";
		document.getElementById("final").style.display = "none";
	}
}
function nextQ5() {
	var q4Answer = document.getElementById("q4A").value;

	if (q4Answer == "null") {
		alert("Please select your choice !");
	}else{
		answers[3] = q4Answer;

		document.getElementById("qDiv1").style.display = "none";
		document.getElementById("qDiv2").style.display = "none";
		document.getElementById("qDiv3").style.display = "none";
		document.getElementById("qDiv4").style.display = "none";
		document.getElementById("qDiv5").style.display = "block";
		document.getElementById("final").style.display = "none";

	}
}

function finalizing() {
	var q5Answer = document.getElementById("q5A").value;

	if (q5Answer == "null") {
		alert("Please select your choice !");
	}else{
		answers[4] = q5Answer;
		var x=0;

		if (answers[0] == 2) {
			x=x+2;
		}else{

		}

		if (answers[1] == 4) {
			x=x+2;
		}else{

		}

		if (answers[2] == 4) {
			x=x+2;
		}else{

		}

		if (answers[3] == 2) {
			x=x+2;
		}else{

		}

		if (answers[4] == 3) {
			x=x+2;
		}else{

		}
		document.getElementById("marks").innerHTML = ""+x+"/10";
		document.getElementById("qDiv1").style.display = "none";
		document.getElementById("qDiv2").style.display = "none";
		document.getElementById("qDiv3").style.display = "none";
		document.getElementById("qDiv4").style.display = "none";
		document.getElementById("qDiv5").style.display = "none";
		document.getElementById("final").style.display = "block";

		
	}
	
}

function refresh() {
	location.reload();
}
