var isTouch = false;
if ((typeof window.Touch)==='object' ) {
	isTouch = true;
}

$.jQTouch({
    icon: 'kilo.png',
    statusbar: 'black-translucent',
	useAnimations: true, 
	slideSelector: 'li a',
	flipSelector: '#meal li a',
	useFastTouch: isTouch,
	initializeTouch: 'a',
	preloadImages: [
		'libs/jqtouch/themes/apple/img/backButtonPurple.png'
	]
});

$(document).ready( function() {

	var numenu = new Numenu({
		data: eatins,
		type: 'places'
	});    
	// console.log( numenu.data );

	$('#places').html( numenu.makeAll() );
	
	function getGuts(n) {   
		// console.log('adding junk');
		
		if (!n) {alert('probl'); return;}
		// console.log( n );
		// console.log( n.rel, n.hash );
		if (n.hash==='#venue') {
			numenu.type = 'venue';
			numenu.venue = n.rel;
		}
		if (n.hash==='#day') {
			numenu.type = 'day';
			numenu.day = n.rel;
		}
		if (n.hash==='#meal') {
			numenu.type = 'meal';
			numenu.meal = n.rel;
		}
		if (n.hash==='#nutrid') {
			numenu.type = 'nutrition';
			numenu.item = n.innerHTML;
			numenu.nutrilink = n.rel;   
		}     
		$( n.hash ).html(numenu.makeAll());      
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
	
	var eventKind = isTouch ? 'tap' : 'click';
	
	$('body > div').delegate('a', eventKind, function(e) {  
		//alert('tapped');
		// console.log( 'delegated', e, this );
		// $('body').data( 'activator', this ); 
		numenu.activator = this; 
	});  
});

var subbing_template, sub, i, re;
function nf(idx) {
		// console.log( idx );
		// global nftextnew
		subbing_template = nutrition_template;
		sub = aData[idx];
		for (i=0; i<25; i++) {
			re = new RegExp( '~' + i + '~');
			subbing_template = subbing_template.replace( re, sub[i] );
		}
		// $( '#nutrition' ).replaceWith( subbing_template ); 
		return subbing_template;
}

aData=new Object(); 

var nutrition_template = 
'<div id="nutrition">' +
	'<h1>Nutrition Facts</h1>' +
	'<p>Serving Size ~0~</p>' +
	'<table>' +
		'<tbody>' +
			'<tr>' +
				'<td colspan="2"><strong>Amount Per Serving</strong></td>' +
				'<td></td>' +
			'</tr>' +
			'<tr>' +
				'<td colspan="2"><strong>Calories</strong> ~1~</td>' +
				'<td>Calories From Fat ~2~</td>' +
			'</tr>' +
		'</tbody>' +
	'</table>' +
	'<table>' +
		'<tbody>' +
			'<tr>' +
				'<td colspan="3"><strong>% Daily Value*</strong></td>' +
			'</tr>' +
			'<tr>' +
				'<td colspan="2"><strong>Total Fat</strong> ~3~g</td>' +
				'<td>~4~%</td>' +
			'</tr>' +
			'<tr>' +
				'<td></td>' +
				'<td>Saturated Fat ~5~g</td>' +
				'<td>~6~%</td>' +
			'</tr>' +
			'<tr>' +
				'<td></td>' +
				'<td><em>Trans</em> Fat ~7~</td>' +
				'<td></td>' +
			'</tr>' +
			'<tr>' +
				'<td colspan="2"><strong>Cholesterol</strong> ~8~mg</td>' +
				'<td>~9~%</td>' +
			'</tr>' +
			'<tr>' +
				'<td colspan="2"><strong>Sodium</strong> ~10~mg</td>' +
				'<td>~11~%</td>' +
			'</tr>' +
			'<tr>' +
				'<td colspan="2"><strong>Total Carbohydrates</strong> ~12~g</td>' +
				'<td>~13~%</td>' +
			'</tr>' +
			'<tr>' +
				'<td></td>' +
				'<td>Dietary Fiber ~14~g</td>' +
				'<td>~15~%</td>' +
			'</tr>' +
			'<tr>' +
				'<td></td>' +
				'<td>Sugars ~16~g</td>' +
				'<td></td>' +
			'</tr>' +
			'<tr>' +
				'<td colspan="2"><strong>Protein</strong> ~17~g</td>' +
				'<td></td>' +
			'</tr>' +
		'</tbody>' +
	'</table>' +
	'<table>' +
		'<tbody>' +
			'<tr>' +
				'<td>Vitamin A ~18~%</td>' +
				'<td>•</td>' +
				'<td>Vitamin C ~19~%</td>' +
			'</tr>' +
			'<tr>' +
				'<td>Calcium ~20~%</td>' +
				'<td>•</td>' +
				'<td>Iron ~21~%</td>' +
			'</tr>' +
		'</tbody>' +
	'</table>' +
	'<p>* Percent Daily Values are based on a 2,000 calorie diet.</p>' +
	'<h2>~22~</h2>' +
	'<p>~23~</p>' +
	'<p>~24~</p>' +
'</div>';
