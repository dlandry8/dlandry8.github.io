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
