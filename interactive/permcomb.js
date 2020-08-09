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
	var r = Number(document.forms["calcPC"]["pc_r"].value);
	if (validate(n, r))
	{
		document.getElementById("pcAnswer").innerHTML = "There are " + Math.round((fact(n) / fact(n - r))) + " total permutations for " + r + " out of " + n + " objects.";
		document.getElementById("pc_n").focus();
	}
}


function combination()
{
	var n = Number(document.forms["calcPC"]["pc_n"].value);
	var r = Number(document.forms["calcPC"]["pc_r"].value);
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


function showCode()
{
	document.getElementById("pcAnswer").innerHTML = "<code>\
	function validate(n, r)<br>\
	{<br><blockquote>\
		if (isNaN(n) || isNaN(r) || n == &quot;&quot; || r == &quot;&quot;)<br>\
		{<br><blockquote>\
			document.getElementById(&quot;pcAnswer&quot;).innerHTML = &quot;Please enter numeric values.&quot;;<br>\
			document.forms[&quot;calcPC&quot;][&quot;pc_n&quot;].value = &quot;&quot;;<br>\
			document.forms[&quot;calcPC&quot;][&quot;pc_r&quot;].value = &quot;&quot;;<br>\
			document.getElementById(&quot;pc_n&quot;).focus();<br>\
			return false;<br>\
		</blockquote>}<br>\
		else if (n <= 0 || r <= 0)<br>\
		{<br><blockquote>\
			document.getElementById(&quot;pcAnswer&quot;).innerHTML = &quot;You must have at least one object to calculate permutations.&quot;;<br>\
			document.forms[&quot;calcPC&quot;][&quot;pc_n&quot;].value = &quot;&quot;;<br>\
			document.forms[&quot;calcPC&quot;][&quot;pc_r&quot;].value = &quot;&quot;;<br>\
			document.getElementById(&quot;pc_n&quot;).focus();<br>\
			return false;<br>\
		</blockquote>}<br>\
		else if (n < r)<br>\
		{<br><blockquote>\
			document.getElementById(&quot;pcAnswer&quot;).innerHTML = &quot;You cannot choose more objects than you have available.&quot;;<br>\
			document.forms[&quot;calcPC&quot;][&quot;pc_n&quot;].value = &quot;&quot;;<br>\
			document.forms[&quot;calcPC&quot;][&quot;pc_r&quot;].value = &quot;&quot;;<br>\
			document.getElementById(&quot;pc_n&quot;).focus();<br>\
			return false;<br>\
		</blockquote>}<br>\
		else<br>\
		{<br><blockquote>\
			return true;<br>\
		</blockquote>}<br>\
	</blockquote>}<br>\
	<br>\
	<br>\
	function permutation()<br>\
	{<br><blockquote>\
		var n = Number(document.forms[&quot;calcPC&quot;][&quot;pc_n&quot;].value);<br>\
		var r = Number(document.forms[&quot;calcPC&quot;][&quot;pc_r&quot;].value);<br>\
		if (validate(n, r))<br>\
		{<br><blockquote>\
			document.getElementById(&quot;pcAnswer&quot;).innerHTML = &quot;There are &quot; + Math.round((fact(n) / fact(n - r))) + &quot; total permutations for &quot; + r + &quot; out of &quot; + n + &quot; objects.&quot;;<br>\
			document.getElementById(&quot;pc_n&quot;).focus();<br>\
		</blockquote>}<br>\
	</blockquote>}<br>\
	<br>\
	<br>\
	function combination()<br>\
	{<br><blockquote>\
		var n = Number(document.forms[&quot;calcPC&quot;][&quot;pc_n&quot;].value);<br>\
		console.log(&quot;n: &quot; + n);<br>\
		var r = Number(document.forms[&quot;calcPC&quot;][&quot;pc_r&quot;].value);<br>\
		if (validate(n, r))<br>\
		{<br><blockquote>\
			document.getElementById(&quot;pcAnswer&quot;).innerHTML = &quot;There are &quot; + Math.round((fact(n) / (fact(r) * fact(n - r)))) + &quot; total combinations for &quot; + r + &quot; out of &quot; + n + &quot; objects.&quot;;<br>\
			document.getElementById(&quot;pc_n&quot;).focus();<br>\
		</blockquote>}<br>\
	</blockquote>}</code>";
}