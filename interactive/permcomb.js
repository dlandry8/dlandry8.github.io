function validate(n, r)
{
	if (isNaN(n) || isNaN(r) || n == "" || r == "")
	{
		document.getElementById("pcAnswer").innerHTML = "Please enter numeric values.";
		document.forms["calcPC"]["pc_n"].value = "";
		document.forms["calcPC"]["pc_r"].value = "";
		document.getElementById("pc_n").focus();
		return false;
	}
	else if (n <= 0 || r <= 0)
	{
		document.getElementById("pcAnswer").innerHTML = "You must have at least one object to calculate permutations.";
		document.forms["calcPC"]["pc_n"].value = "";
		document.forms["calcPC"]["pc_r"].value = "";
		document.getElementById("pc_n").focus();
		return false;
	}
	else if (n < r)
	{
		document.getElementById("pcAnswer").innerHTML = "You cannot choose more objects than you have available.";
		document.forms["calcPC"]["pc_n"].value = "";
		document.forms["calcPC"]["pc_r"].value = "";
		document.getElementById("pc_n").focus();
		return false;
	}
	else
		return true;
}


function permutation()
{
	var n = Number(document.forms["calcPC"]["pc_n"].value);
	console.log(n);
	var r = Number(document.forms["calcPC"]["pc_r"].value);
	console.log(r);
	if (validate(n, r))
	{
		document.getElementById("pcAnswer").innerHTML = "There are " + Math.round((fact(n) / fact(n - r))) + " total permutations for " + r + " out of " + n + " objects.";
		document.getElementById("pc_n").focus();
	}
}


function combination()
{
	var n = Number(document.forms["calcPC"]["pc_n"].value);
	console.log("n: " + n);
	var r = Number(document.forms["calcPC"]["pc_r"].value);
	console.log("r: " + r);
	console.log("n!: " + fact(n));
	console.log("r!: " + fact(r));
	console.log("(n-r)!: " + fact(n-r));
	console.log("n! / (r! * (n-r)!): " + (fact(n)/(fact(r) * fact(n-r))));
	if (validate(n, r))
	{
		document.getElementById("pcAnswer").innerHTML = "There are " + Math.round((fact(n) / (fact(r) * fact(n - r)))) + " total combinations for " + r + " out of " + n + " objects.";
		document.getElementById("pc_n").focus();
	}
}


function pcReset()
{
	document.forms["calcPC"]["pc_n"].value = "";
	document.forms["calcPC"]["pc_r"].value = "";
	document.getElementById("pc_n").focus();
	document.getElementById("pcAnswer").innerHTML = "";
}