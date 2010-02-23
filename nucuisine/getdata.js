function init() {

	// local variabes:
	var i,          // iterator
		aData = {}, // for holding the nutrition information
		data = {},  // for making the big JSON object
		week = '4', // this can be changed every week
		weekText = 'Week of Monday February 22, 2010',
		status_area = $('#status textarea'),
		result_area = $('#result textarea'),
		days, day,
		nutriscript, nutrid,
		venues = [
			'hinman' /*,
			'allison',
			'foster_east',
			'foster_west',
			'elder',
			'sargent',
			'willard',
			'willies',
			'tech' */
		], venue,
		items, item, itemObject,
		mealtime,
		foodCategories,
		givenStation, station = 'Main Station', // default station if none specified
		allHrs; 
		
	
	// turn off spellcheck for moz
	$( 'textarea' ).each( function() {
		$(this).attr( 'spellCheck', false );
	});


	for (i=0; i<venues.length; i++) {
		venue = venues[i];
		status_area.append( 'loading: ' + venue + '\n' );
		$.ajax({
			url: 'menus/' + venue + week + '.html',
			async: false,
			success: function( fullhtml) {
				
				// get hours string for this venue
				allHrs = $(fullhtml).find( 'td.AllHrs' )[0];
				allHrs = $(allHrs).html();
				
				status_area.append( 'got it' + '\n' );
				
				nutriscript = fullhtml.match( /aData=new Object\(\);([\s\S]*?)<\/script>/ )[1];
				eval( nutriscript );
				
				days = $(fullhtml).find( 'td[class="dayouter"]' );
				
				data[ venue ] = {};
				days.each( function() {
					day = this.id;
					data[ venue ]['hours'] = allHrs;
					data[ venue ][ day ] = {};
					items = $( fullhtml ).find( '#' + day + ' div.menuitem' );
					items.each( function() {
						item = this;
						
						// determine mealtime
						mealtime = item.parentNode.parentNode.className;
						
						// determine station
						givenStation = $(item.parentNode).prev()[0].textContent.replace(/\W/g,'');
						station = (givenStation=='') ? station : givenStation;
						
						// determine nutrition id number
						nutrid = item.getAttribute( 'onclick' ).match( /'(.*)'/ )[1];
						
						
						//determine foodCategories array
						foodCategories = [];
						$(item).find( 'img' ).each( function() {
							foodCategories.push( this.alt );
				         });
						
						if ( !data[ venue ][ day ][ mealtime] ) {
							  data[ venue ][ day ][ mealtime ] = {};							
						}
						if ( !data[ venue ][ day ][ mealtime][ station ] ) {
							  data[ venue ][ day ][ mealtime][ station ] = [];							
						}
						
						itemObject = {};
						itemObject.i = $.trim( item.textContent );
						itemObject.n = nutrid;
						// don't add nutritional info, if none there:
						if ( foodCategories.length ) {
							itemObject.k = foodCategories;
						}
							
						data[ venue ][ day ][mealtime][ station ].push(itemObject);
					});
					//console.log( this.id );
				});
				
				
			}
		});
	}
	
	data = {
		w: week,
		t: weekText,
		d: data
	};
	
	result = JSON.stringify( data );
	result_area.append( result );
	console.log( data );
	
	gData = data;

}