
// when the user clicks the #fahrenheit_to_celsius button

$('#fahrenheit_to_celsius').on('click', function () {


	//Get the value from #temperature and store in variable fahrenheit
	var  fahrenheit = $('#temperature').val();

	// Convert that value to a number 
	console.log("HELlO")
	// Get the formula 
	var intSting = (fahrenheit - 32) / 1.8;

	//Convert to celsius and store in variable celsius
	console.log(intSting)

	// Display in #result
	$('#result').html(fahrenheit + '&#176F = ' + intSting + '&#176C');




	if (fahrenheit === '') {

	alert('enter a number');
	return false;   //prevent brower from visiting '#'
	}

	if (fahrenheit < 20) 	{
		$('body').addClass('blue');
	}

	
	if (fahrenheit > 20) 	{
		$('body').addClass('red');
	}


});



//Get the value from #temperature and store in variable celsius
$('#celsius_to_fahrenheit').on('click', function () {
	console.log("answer")
	//convert that value to a number
	var celsius = $('#temperature').val();
	//get the formula
	var answer = 1.8 * celsius + 32;
	//convert fahrenheit and store in variable fahrenheit
	console.log(answer)
	// Display in result
	$('#result').html(celsius + '&#176C = ' + answer + '&#176F');




	if (celsius === '')  {

	alert('enter a temperature');
	return false
	}

	if (celsius < 5) 	{
		$('body').addClass('blue');
	}

	if (celsius > 6) {
		$('body').addClass('red');
	}
});

