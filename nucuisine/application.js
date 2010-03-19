
aData = {};
(function(){

var
	// constants:
	IS_TOUCH = !!window.Touch,
	EVENT_KIND = IS_TOUCH ? 'tap' : 'click',
	IS_IPHONE  = navigator.userAgent.indexOf( 'iPhone' ) > -1,
	
	// local variables:
	type, hash, i;

$.jQTouch({
    icon: 'kilo.png',
    statusbar: 'black-translucent',
	useAnimations: IS_IPHONE, 
	slideSelector: 'li a',
	flipSelector: '#meal li a',
	useFastTouch: IS_TOUCH,
	initializeTouch: 'a',
	preloadImages: [
		'libs/jqtouch/themes/apple/img/backButtonPurple.png'
	]
});

$(document).ready( function() {

	var numenu = new Numenu({
		data: eatins, // eatins IS A GLOBAL VARIABLE!
		type: 'places',
		nutridata: aData
	});
	console.log( numenu.data );

	$('#places').html( numenu.makeAll() );
	
	function getGuts(n) {   
		// console.log('adding junk');
		
		//if (!n) {alert('probl'); return;}
		// console.log( n );
		// console.log( n.rel, n.hash );
		
		type = numenu.type;
		hash = n.hash;
		
		switch (hash) {
			case '#venue':
				type = 'venue';
				numenu.venue = n.rel;
				break;
			case '#day':
				type = 'day';
				numenu.day = n.rel;
				break;
			case '#meal':
				type = 'meal';
				numenu.meal = n.rel;
				break;
			case '#nutrid':
				type = 'nutrition';
				numenu.item = n.innerHTML;
				numenu.nutrilink = n.rel;
				break;
		}		
		numenu.type = type;
		    
		$( hash ).html(numenu.makeAll());      
	}
	
	$( 'body' ).bind( 'pageAnimationStart', function(e,info) {
		// console.log('pageanim',e);
		// var target = $(e.target).data('activator'); 
		                         
		//console.log(e, info.direction, numenu.activator);
		if ((info.direction ==='in') && !($(numenu.activator).hasClass( 'back' )) ) {
			getGuts( numenu.activator ); 
		}	
	});  
	
	// $('body').bind( 'pageAnimationEnd', function(e,info) {
	// 	if ((info.direction ==='in') && !($(numenu.activator).hasClass( 'back' )) ) {
	// 		console.log( 'end anim' );
	// 		scrollTo(0,0);
	// 	}
	// });
	
	
	$('body > div').delegate('a', EVENT_KIND, function(e) {  
		//alert('tapped');
		// console.log( 'delegated', e, this );
		// $('body').data( 'activator', this ); 
		numenu.activator = this; 
	});  
});

})();