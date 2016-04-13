// 1.	Slide the header element up when it is clicked on.
$('header').on('click', function() {
	$('header').slideUp(350);
});


// 2.	Remove the purplebox class from everything.
$('.purplebox').on('click', function () {
	$('.purplebox').removeClass('#box14')
});

// 3.	Hide all of the div’s in #row4
$('row4').on('click', function () {
	$('row4').hide(500);
});

// 4.	Add a paragraph that says “I have been added” to all boxes with class “add-para” (Hint: you'll need to look up the append() method)
$('add-para').append('I have been added');
// 5.	Add a class in your css and add it to all items with the class .box

// 6.	Show the footer when the anchor in #box2 is clicked
$("#box2").on('click', function () {
	$('footer').Show(300);
});
// 7.	Change the styling of the span inside of #box3 by adding a class (and style that class in CSS)

// 8.	Add a unique class to your CSS and add it to the articles in #row1

// 9.	Change the background color of all the articles
$(".box").css('background-color', 'green');
// 10.	Change the font color of all the articles in row 2

// 11.	Select any spans that are siblings of an h4 (using the .siblings() method) and hide them.
$('span').siblings()
// 12.	Clicking on #box7 should hide the span within the h2

// 13.	Add an h3 that says "Hello there!" to the beginning of #box12 (Hint: you'll need to look up the prepend() method)
$
// 14.	SlideUp all the h1s on the page

// 15. Add the selected class [already in the CSS] to the divs in #row4

// 16.	Clicking reset should remove the selected class from everything and fade in the header element, the footer, and all elements with the class .box
