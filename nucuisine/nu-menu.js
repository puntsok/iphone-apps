(function(){
// ==============================

var daysOfWeek = ['monday','tuesday','wednesday','thursday','friday','saturday','sun_day'],
	places     = ['hinman','allison','foster_east','foster_west','elder','sargent','willard','willies','tech'],
	meals      = ['breakfast','lunch','dinner'],
	meal_names = {
		brk: 'breakfast',
		lun: 'lunch',
		din: 'dinner',
		lat: 'late night'
	},
	i;

Numenu = function( config ) {
	// places, venue, day, meal, nutrition, hours
	this.type  = config.type; // places, venue, day, meal
	this.venue = config.venue;
	this.meal  = config.meal;
	this.day   = config.day;
	this.data  = config.data;
};

var p = Numenu.prototype;
p.makeHead = function() {

	var title = this.type,
		back = '',
		more = '';
		
	if  ( this.type === 'venue' ) {
		title = this.venue;
	}
	if  ( this.type === 'nutrition' ) {
		title = 'nutritional info';
	}
	if ( this.type === 'day' ) {
		title = this.day;
	}
	if ( this.type === 'meal' ) {
		title = meal_names[this.meal];
	}
	
	if ( this.type !== 'places' ) {
		back = '<a href="#" class="button back">Back</a>';
	}
	if ( this.type === 'places' ) {
		more = '<h2>Current</h2>';
	}
		
	return '<div class="toolbar nucuisine">' +
		'<h1>' + title + '</h1>' + back +
		'</div>' + more;
};
p.makeBody = function() {
	var text = '';
	if ( this.type === 'hours' ) {
		text = 'hours dude';
	}
	
	if ( this.type === 'venue' ) {
		text +=  '<ul class="edgetoedge">';	
		for ( day in this.data.d[this.venue] ) {
			if (day !== 'hours' ) {
				text += '<li class="arrow">';
				text += '<a href="#day" rel="' + day + '">';
				text += day;
				text += '</a>';
				text += '</li>';
			}
		}	
		text += '</ul>';
	}
	
	if ( this.type === 'places' ) {
		text +=  '<ul class="edgetoedge">';	
		for ( place in this.data.d ) {
			text += '<li class="arrow">';
			text += '<a href="#venue" rel="' + place + '">';
			text += '<span>'+place+'</span>';
			text += '</a>';
			text += '</li>';
		}	
		text += '</ul>';
	}
	
	if ( this.type === 'day' ) {
		text +=  '<ul class="edgetoedge">';	
		for ( meal in this.data.d[this.venue][this.day] ) {
			text += '<li class="arrow">';
			text += '<a href="#meal" rel="' + meal + '">';
			text += meal_names[meal];
			text += '</a>';
			text += '</li>';
		}	
		text += '</ul>';
	}
	
	if (this.type==='meal') {
		text = '';
		for ( station in this.data.d[this.venue][this.day][this.meal] ) {
			text += '<h2>' + station + '</h2>';
			var items = this.data.d[this.venue][this.day][this.meal][station];
			text += '<ul class="edgetoedge">';
			for ( var i = 0, l = items.length; i < l; i++ ) {
				text += '<li class="arrow">';
				text += '<a href="#nutrid" rel="' + items[i].n + '">';
				text += items[i].i;
				text += '</a>';
				text += '</li>';
			}
			text += '</ul>';
		}
	}
	return text;
	
};
p.makeAll = function() {
	return this.makeHead() + this.makeBody();
};


// ==============================
})();