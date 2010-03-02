(function(){
// ==============================

var daysOfWeek = ['monday','tuesday','wednesday','thursday','friday','saturday','sun_day'],
	places     = ['hinman','allison','foster_east','foster_west','elder','sargent','willard','willies','tech'],
	meals      = ['breakfast','lunch','dinner'],
	i;

Numenu = function( config, data ) {
	// places, venue, day, meal, nutrition, hours
	this.type  = config.type;
	this.venue = config.venue;
	this.meal  = config.meal;
	this.day   = config.day;
	this.data  = config.data;
};

var p = Numenu.prototype;
p.makeHead = function() {

	var title = this.type,
		back = '';
		
	if  ( this.type === 'venue' ) {
		title = this.venue;
	}
	if  ( this.type === 'nutrition' ) {
		title = 'nutritional info';
	}
	if ( this.type === 'day' ) {
		title = this.day;
	}
	
	if ( this.type !== 'places' ) {
		back = '<a href="#">Back</a>';
	}
		
	return '<h1>' + back + title + '</h1>';
};
p.makeBody = function() {
	var text = '';
	if ( this.type === 'hours' ) {
		text = 'hours dude';
	}
	
	if ( this.type === 'venue' ) {
		text +=  '<ul>';	
		for (i=0; i<daysOfWeek.length; i++) {
			var day = daysOfWeek[i];
			text += '<li>';
			text += '<a href="#day" rel="venue_' + this.venue + '-day_'+ day + '">';
			text += day;
			text += '</a>';
			text += '</li>';
		}	
		text += '</ul>';
	}
	
	if ( this.type === 'places' ) {
		text +=  '<ul>';	
		for (i=0; i<places.length; i++) {
			var place = places[i];
			text += '<li>';
			text += '<a href="#venue" rel="venue_' + place + '">';
			text += place;
			text += '</a>';
			text += '</li>';
		}	
		text += '</ul>';
	}
	
	if ( this.type === 'day' ) {
		text +=  '<ul>';	
		for (i=0; i<meals.length; i++) {
			var meal = meals[i];
			text += '<li>';
			text += '<a href="#meal" rel="venue_' + this.venue + '-day_'+ this.day + '-meal_' + meal + '">';
			text += meal;
			text += '</a>';
			text += '</li>';
		}	
		text += '</ul>';
	}
	
	
	return text;
	
};
p.makeAll = function() {
	return this.makeHead() + this.makeBody();
};


// ==============================
})();