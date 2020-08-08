function fact(n)
{
	if (n == 0)
		return 1;
	if (n > 1)
		return n * fact(n - 1);
	return n;
}


function randomInteger(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function showResume()
{
	var x = document.getElementById("myResume");
	var y = document.getElementById("myCV");
	x.style.display = "block";
	y.style.display = "none";
}


function showCV()
{
	var x = document.getElementById("myResume");
	var y = document.getElementById("myCV");
	x.style.display = "none";
	y.style.display = "block";
}