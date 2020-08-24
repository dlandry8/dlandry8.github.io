var encouragement = document.getElementById("currentEncouragement");

function changeSource(docID) {
	var targetLink = '<iframe ';
	if (window.outerWidth > 600)
		targetLink += 'width="560" height="315" ';
	else
		targetLink += 'width="304" height="171" ';
    if (docID == "Aug232020") {
		targetLink += 'src="https://www.youtube.com/embed/jtHinLo98XI"';
	}
	else if (docID == "Aug142020") {
	    targetLink += 'src="https://www.youtube.com/embed/hfH806X-0y4"';
	}
    else if (docID == "Aug112020") {
		targetLink += 'src="https://www.youtube.com/embed/p66QpyeHtAA"';
	}
    else if (docID == "shatterMe") {
		targetLink += 'src="https://www.youtube.com/embed/49tpIMDy9BE"';
	}
    else if (docID == "songOfWomen") {
		targetLink += 'src="https://www.youtube.com/embed/mdN1U9NvuIc"';
	}
	else {
	    targetLink += 'src="https://www.youtube.com/embed/NMre6IAAAiU"';
	}
	targetLink += ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	currentEncouragement.innerHTML = targetLink;
}