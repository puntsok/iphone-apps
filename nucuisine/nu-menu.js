Eval = function(t) {
	eval(t);
};

Dater = (function(){
	// CONSTANTS
	var DAYS_OF_WEEK = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'],
	// local variables
	i,len,
	// class local aliases
	$self, $self_date,
	
	// Class definition
	Class = function( dateObject ){
		// constructor:
			this.date = dateObject;
		},    
		
		// public methods:
		methods = {
			// public methods:
			getTextDay: function(){
				return DAYS_OF_WEEK[ this.date.getDay() ];
			},
			getTextTime: function(){
				$self_date = this.date;
				return $self_date.getHours() + ':' + $self_date.getMinutes();
			},
			getMinsSinceMidnight: function(){
				return this.date.getHours()*60 + this.date.getMinutes();
			}
			// private methods:
		}; 
		
	// static attributes, methods
	Class.sayHi = function(){
		alert( 'hiiii' );
	};   
	// finish up
	Class.prototype = methods;
	return Class;
})();


Numenu = (function(){
	
// ==============================

var 
	// variables
	daysOfWeek   = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'],
	daysOfWeekJS = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'],
	places       = ['hinman','allison','foster_east','foster_west','elder','sargent','willard','willies','tech'],
	meals        = ['breakfast','lunch','dinner'],
	meal_names   = {
		brk: 'breakfast',
		lun: 'lunch',
		din: 'dinner',
		lat: 'late night'
	},
	// constants
	CANNOT_LOAD_MESSAGE = 'Could not fetch data',
	LOADING_CLASSNAME   = 'loading',
	NUTRITION_TEMPLATE  = 
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
		'</div>',
	
	// local variables
	p, NumenuClass, back, more, more_class, text, arrayOfReplacements, instance, items, i, l, dater;

NumenuClass = function( config ) {
	// places, venue, day, meal, nutrition, hours
	this.type      = config.type; // places, venue, day, meal
	this.venue     = config.venue;
	this.meal      = config.meal;
	this.day       = config.day;
	this.data      = config.data;
	this.activator = config.activator; // reference to node that was clicked before animation
	this.item      = config.item;
	this.nutrilink = config.nutrilink;
	this.nutridata = config.nutridata;
};

p = NumenuClass.prototype;


p.makeAll = function() {
	instance = this;
	
	function makeHead() {

		back = more = '';

		if  ( instance.type === 'venue' ) {
			text = instance.venue;
		}
		if  ( instance.type === 'nutrition' ) {
			text = instance.item;
		}
		if ( instance.type === 'day' ) {
			text = instance.day;
		}
		if ( instance.type === 'meal' ) {
			text = meal_names[instance.meal];
		}

		if ( instance.type !== 'places' ) {
			back = '<a href="#" class="button back">Back</a>';
		}
		if ( instance.type === 'places' ) {
			more = '<h2>Current</h2>';
		}

		return '<div class="toolbar nucuisine">' +
			'<h1>' + text + '</h1>' + back +
			'</div>' + more;
	}
	function makeBody() {
		
		dater = new Dater( new Date() );
		var mins = dater.getMinsSinceMidnight();

		function makeNutritionTemplate( instance ) {
			text = NUTRITION_TEMPLATE;
			arrayOfReplacements = instance.nutridata[ instance.nutrilink ];
			for (i=0; i<25; i++) {
				text = text.replace(new RegExp('~'+i+'~'), arrayOfReplacements[i]);
			}
			return text;
		}

		text = '<ul class="edgetoedge">';
		if ( instance.type === 'venue' ) {
			for ( day in instance.data.d[instance.venue] ) {
				more_class = '';
				if (day === dater.getTextDay() ) more_class = ' current';
				if (day !== 'hours' ) {
					text += '<li class="arrow' + more_class + '">' +
					        '<a href="#day" rel="' + day + '">' +
							day +
					        '</a>' +
					        '</li>';
				}
			}	
			text += '</ul>';
		}  

		if ( instance.type === 'places' ) {
			for ( place in instance.data.d ) {
				text += '<li class="arrow">' +
				        '<a href="#venue" rel="' + place + '">' +
				        '<span>'+place+'</span>' +
				        '</a>' +
				        '</li>';
			}	
			text += '</ul>';
		}

		if ( instance.type === 'day' ) {
			for ( meal in instance.data.d[instance.venue][instance.day] ) { 
				more_class = '';   
				if ( instance.day === dater.getTextDay() ) {
					switch ( meal ) { 
						case 'brk': 
						break;
						case 'lun':
						break;
						case 'din': 
							if ( mins >= 1380 && mins < 1440 ) {
								more_class = ' current';
							}
						break;
					}  
				}
				text += '<li class="arrow' + more_class + '">' +
				        '<a href="#meal" rel="' + meal + '">' +
				        meal_names[meal] +
				        '</a>' +
				        '</li>';
			}	
			text += '</ul>';
		}

		if (instance.type==='meal') {
			text = '';
			for ( station in instance.data.d[instance.venue][instance.day][instance.meal] ) {
				text += '<h2>' + station + '</h2>';
				items = instance.data.d[instance.venue][instance.day][instance.meal][station];
				text += '<ul class="edgetoedge">';
				for ( i = 0, l = items.length; i < l; i++ ) {
					text += '<li class="arrow">' +
					        '<a href="#nutrid" rel="' + items[i].n + '">' +
					        items[i].i +
					        '</a>' +
					        '</li>';
				}
				text += '</ul>';
			}
		}

		if ( instance.type === 'nutrition' ) {
			text = "<p>No Nutritional Information</p>";
			if ( instance.nutridata[ instance.nutrilink ] ) {
				text = makeNutritionTemplate( instance );
			} else {
				$(instance.activator).addClass( LOADING_CLASSNAME );
				// console.log('loading ajax');
				$.ajax({
					url: 'menus/' + instance.venue + instance.data.w + '.html',
					async: false,
					success: function(fullhtml) {
						Eval( fullhtml.match( /aData=new Object\(\);([\s\S]*?)<\/script>/ )[1] );
						if ( instance.nutridata[ instance.nutrilink ] ) {
							text = makeNutritionTemplate( instance  );
						}
					},
					error: function(r,s,e) {
						// instance should go somewhere else higher, in much above too!
						alert( CANNOT_LOAD_MESSAGE );
					}   
				});
			}
		}

		return text;

	}
	

	return makeHead() + makeBody();
};

return NumenuClass;
// ==============================
})();