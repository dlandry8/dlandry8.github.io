// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
/*
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
*/
function createModal(clicked_image, clicked_caption)
{
	document.getElementById("footer").style.display = "none";
	//myFooter.display = "none";
	modal.style.display = "block";
	modalImg.src = clicked_image;
	captionText.innerHTML = clicked_caption;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.getElementById("footer").style.display = "block";
} 