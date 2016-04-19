// Create an array of image paths


var images = ["images/image_1.jpg", "images/image_2.jpg","images/image_3.jpg","images/image_4.jpg","images/image_5.jpg","images/image_6.jpg"];
// set a variable for our currentPosition

var currentPosition = 0;

// go to the next image when the user click next.

$('#next').on('click', function() {
//add one to the currentPosition

	currentPosition += 1;
	// if currentPosition is the last index
			// Disable the next button

	if (currentPosition ===  images.length - 1) {
		$('#next').prop('disabled', true);
	}
	else {
		$('#next').prop('disabled', false);
		$('#prev').prop('disabled', false);
	}
	//change the src of #image-to-vote-on to current image
	$('#image-to-vote-on').attr('src', images[currentPosition]); 

});
	
// go to the pervious image when the user click next.
$('#prev').on('click', function() {
	currentPosition -= 1;

	if (currentPosition ===  0) {
		$('#prev').prop('disabled', true);
	}
	else {
		$('#prev').prop('disabled', false);
		$('#next').prop('disabled', false);
	}
	$('#image-to-vote-on').attr('src', images[currentPosition]); 
});
//add to the like of the current image when user clicks the thumbs up.

// */var 
var counter = 0;
	$("#upvote").click(function() {
	counter ++;
	$('#votes').html('Likes: ' + counter);
});


	$("#downvote").click(function() {
	counter --;
	$("#votes").html('Likes: ' + counter);

});

var votes = ["images/image_1.jpg", "images/image_2.jpg","images/image_3.jpg","images/image_4.jpg","images/image_5.jpg","images/image_6.jpg"];


//remove from the like of the current image when user clicks the thumbs down.


