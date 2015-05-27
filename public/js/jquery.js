$(document).ready(function() {

	//dropshadow but is fked up.
	// $('.dropContent').shadow({type:'sides', sides:'vt-1'});
	

	var toggled = false
	$('.loginDropdown').on('click', function(){
		if (toggled === true){
			$('.dropContent').fadeOut(200, function() {
				toggled = false;
			})
		}
		else{
			$('.dropContent').fadeIn(100, function() {
				toggled = true;
			})
		}
	})
	$('html').on('click', function(){
		if(toggled === true){
			$('.dropContent').fadeOut(200, function() {
				toggled = false;
			})
		}
	})
	$('.userDiv').on('mouseenter', function(){
		$('.userlay').fadeIn(200);
		$('.user').fadeTo(200, 0.5);
	})
	$('.userDiv').on('mouseleave', function(){
		$('.userlay').fadeOut(100);
		$('.user').fadeTo(100, 1);
	})
	$('.usersDiv').on('mouseenter', function(){
		$('.userslay').fadeIn(200);
		$('.users').fadeTo(200, 0.5);
	})
	$('.usersDiv').on('mouseleave', function(){
		$('.userslay').fadeOut(100);
		$('.users').fadeTo(100, 1);
	})
	$('.userSignupIcon').on('click', function(){
		console.log('yooooo');
		$('.usercreds').fadeIn(100);
		$('.activeStep').fadeTo(100, 0.5);
	})
});