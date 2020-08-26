function flames() {
	var inputOne = $(".name_1").val();
	var inputTwo = $(".name_2").val();
	console.log(inputOne);
	console.log(inputTwo);
	var flames = ["Friends", "Love", "Affair", "Marriage", "Enemy", "Sister"];
	if (inputOne != "" && inputTwo != "") {
		var lengthInput = inputOne.length + inputTwo.length;
		//alert(lengthInput);
		while (flames.length != 1) {
			flames = flames.splice(lengthInput % 6, 1);
		}
		$("span").html(flames);
	} else {
		alert("Fill out both the fields");
	}
}
