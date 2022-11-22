var names = new Array();
names[0] = "John"
names[1] = "Niall"
names[2] = "Hope"
names[3] = "Zayn"
names[4] = "Louis"
names[5] = "justin"
names[6] = "Harry"
names[7] = "Aldrin"
names[8] = "Henry"
names[9] = "Peter"
names[10] = "Joe"

for (var i = 0; i < names.length; i++){
	if (names[i].charAt(0) == "J" || names[i].charAt(0) == "j"){
		console.log("Goodbye " + names[i]);
	}
	else{
		console.log("Hello " + names[i])
	}
}
