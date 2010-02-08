YUI().use('node-base', 'node', function(Y) {
	Y.on( 'domready', function(e) {
		Y.all('#header ul').addClass( 'hide');
		Y.one('.leftButton').on( 'click', function(e) {
			e.target.toggleClass( 'pressed' );
			Y.all('#header ul').toggleClass( 'hide' );
		});
	});
});
