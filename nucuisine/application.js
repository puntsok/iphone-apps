$.jQTouch({
    icon: 'kilo.png',
    statusbar: 'black-translucent',
	useAnimations: true,
	flipSelector: '#meal li a',
	useFastTouch: false
});

$(document).ready( function() {

	var numenu = new Numenu({
		data: eatins,
		type: 'places'
	});

	$('#places').html( numenu.makeAll() );
	
	function getGuts(n) {
		
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
	
	    	
	
	$( 'body' ).bind( 'pageAnimationEnd', function(e,info) {
		// console.log('pageanim',e);
		// var target = $(e.target).data('activator'); 
		                         
		console.log(info.direction);
		if (info.direction==='in') {
			console.log('got guts fomr in');
			getGuts( numenu.activator ); 
		}	
	});
	
	$('body > div').delegate('a', 'click', function(e) {
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



aData=new Object();
aData['014561NWU_04506']=new Array('1 1/4 C (284g)','300','80','9','13','1','5','0g','0','0','470','20','41','14','20','80','0','14','0','100','110','130','African Vegetable Stew','','','0','59','1092','23');
aData['0000048886_57298']=new Array('6 oz Ladle (155g)','30','10','1.5','2','0','0','0g','0','0','310','13','5','2','< 1','4','2','1','25','10','2','2','American Bounty Vegetable Soup','A Hearty Vegetable Soup Loaded with Onion, Carrot, Celery, Potatoes, Tomatoes, Cauliflower, Corn, and Green Beans','Contains wheat, soy beans','1334','6','18','0');
aData['0000044695_39412']=new Array('1-7" Pizza (361g)','810','340','38','58','15','75','0g','85','28','2230','93','79','26','5','20','0','39','30','35','35','30','Antipasto Pizza','Hand Stretched Dough Layered with Sliced Pepperoni, Genoa Salami, Roasted Red Peppers, Kalamata Olives, Fresh Oregano an','Contains milk, wheat, soy beans','1398','20','358','6');
aData['_2960NBJVV']=new Array('1 Serving (28g)','240','40','4.5','7','1','5','0g','10','3','710','30','42','14','2','8','1','6','2','0','15','10','Apple Pancakes','','Contains milk, eggs, wheat, soy beans','128','0','148','2');
aData['0000036058_36744']=new Array('3 oz (85g)','70','30','3','5','0','0','0g','0','0','350','15','8','3','2','8','5','3','110','110','6','8','Asian-Style Vegetables','','Contains wheat, soy beans','5669','68','63','1');
aData['_2710INP9L']=new Array('1 Each (234g)','320','90','10','15','1','5','0g','0','0','910','38','50','17','5','20','22','13','4','6','20','15','BBQ Tofu Sandwich(Vegan)','','Contains wheat, soy beans','148','4','211','3');
aData['0000052299_26971']=new Array('1/2 Sandwich (76g)','170','50','6','9','1.5','8','0g','5','2','510','21','19','6','< 1','4','1','9','2','2','6','10','Baja Beef Sandwich','Seasoned Beef, Jack Cheese, Lettuce and Tomatoes Topped with Spicy Salsa and Wrapped in Flat Bread','Contains milk, eggs, wheat, soy beans','139','1','64','2');
aData['0178904154_63796']=new Array('1 Potato (172g)','160','0','0','0','0','0','0g','0','0','10','0','37','12','3','12','3','3','0','35','0','4','Baked Potato','','','0','22','9','1');
aData['0000007287_09313']=new Array('3 oz (86g)','160','70','8','12','1','5','0g','0','0','340','14','21','7','2','8','0','2','0','2','2','2','Baked Tater Tots','','Contains soy beans','0','1','11','0');
aData['0069901809_23975']=new Array('1 Slice-cut 10 (77g)','210','100','11','17','6','30','0g','0','0','170','7','27','9','0','0','16','2','0','0','6','2','Banana Cream Pie','','Contains milk, wheat, soy beans','1','0','55','0');
aData['0424507133_16373']=new Array('4 oz Spoodle (109g)','140','15','1.5','2','0','0','0g','0','0','135','6','26','9','9','36','1','8','8','15','6','10','Bandito Beans','Pinto Beans Enhanced with Chili Powder, Green Chiles, Tomato and Sauteed Onion and Garlic','','397','9','51','2');
aData['0000016661_03177']=new Array('2 Pancakes (111g)','240','60','7','10','2','10','0g','20','7','580','24','39','13','2','8','8','5','2','0','8','10','Blueberry Pancakes','Buttermilk Pancakes Flavored with Whole Blueberries','Contains milk, eggs, wheat, soy beans','62','0','75','2');
aData['0000000804_14953']=new Array('6oz Ladle+3z Noodles (324g)','270','50','5','8','1.5','8','0g','55','18','530','22','35','12','3','12','4','21','80','40','6','20','Braised Beef with Vegetables','Beef Cubes, Carrots, Mushrooms and Peppers Braised with Tomato Beef Stock, Served with Egg Noodles','Contains eggs, wheat, soy beans','4060','24','52','4');
aData['0000016183_07479']=new Array('4 oz (114g)','80','10','1','2','0','0','0g','0','0','160','7','19','6','2','8','16','1','2','15','4','4','Braised Red Cabbage','Sliced Red Cabbage Slow Cooked with Onions and Apples in Brown Sugar and Vinegar','Contains milk, wheat, soy beans','72','8','42','1');
aData['0000048598_55213']=new Array('4 oz (113g)','110','60','7','11','1','5','0g','0','0','40','2','13','4','2','8','6','1','30','80','2','4','Brazilian Vegetable Stir Fry','Onions, Peppers and Ripe Tomatoes and Plantains Stir Fried with Brazilian Chimichurri Sauce','Contains soy beans','1621','50','21','1');
aData['0000056068_36521']=new Array('1 Plate (582g)','880','580','65','100','27','135','0g','880','293','1770','74','36','12','6','24','11','40','70','110','50','35','Breakfast Enchiladas Plate','A Fabulous Breakfast Treat, Enchiladas Stuffed with Scrambled Eggs, Topped with Pickled Onions, Pico de Gallo, and Fresh','Contains milk, eggs, soy beans','3400','65','541','6');
aData['0100601318_55469']=new Array('#12 Scoop (28g)','110','5','1','1','0','0','0g','0','0','0','0','22','7','1','4','0','2','0','0','0','2','Brown Rice','','','0','0','7','0');
aData['0000007667_13610']=new Array('3 oz (87g)','35','0','0','0','0','0','0g','0','0','15','1','7','2','4','16','2','3','15','70','2','2','Brussels Sprouts','','','806','40','23','0');
aData['017382NWU_46643']=new Array('1 Sandwich (283g)','710','390','43','66','17','85','0g','90','30','1140','48','56','19','6','24','1','26','25','45','30','25','Buffalo Chicken Patty Sandwich','Spicy Breaded Chicken Breast Patty, Lettuce, Tomato, Cheese and Blue Cheese Dressing on a Kaiser Roll','','1132','27','306','5');
aData['_2730VZBWK']=new Array('1 Biscuit-4" (71g)','110','50','6','9','0','0','0g','0','0','125','5','13','4','< 1','4','2','2','0','0','4','4','Buttermilk Biscuits','Traditional Buttermilk Biscuits','Contains milk, eggs, wheat','21','0','34','1');
aData['0000037860_24675']=new Array('2 Pancakes (100g)','230','60','6','10','2.5','13','0g','20','7','600','25','37','12','1','4','7','5','2','0','8','10','Buttermilk Pancakes','Golden Brown Buttermilk Pancakes','Contains milk, eggs, wheat, soy beans','128','0','74','2');
aData['_26W0IA9FN']=new Array('1/2 Pizza (142g)','210','60','7','11','1','5','0g','< 5','1','340','14','31','10','3','12','3','6','110','15','6','10','Butternut Squash Pizza','','','5395','9','64','2');
aData['0000010105_48124']=new Array('6 oz Ladle (216g)','90','5','.5','1','0','0','0g','0','0','380','16','17','6','4','16','3','4','140','15','4','6','Butternut Squash Soup (Vegan)','Butternut Squash with Carrots and Leeks, Seasoned with Allspice and Coriander and Butternut Squash with C','Contains wheat, soy beans','7005','9','43','1');
aData['0000010193_52305']=new Array('4 oz (113g)','190','40','4.5','7','2','10','0g','0','0','85','4','36','12','1','4','24','1','110','35','4','4','Candied Sweet Potatoes','Sweet Potatoes Baked with a Pineapple and Brown Sugar Syrup','Contains milk, soy beans','5703','20','34','1');
aData['0000008502_57220']=new Array('4 oz Spoodle (91g)','25','0','0','0','0','0','0g','0','0','15','1','5','2','0','0','0','1','90','4','2','4','Capri Mixed Vegetables','A Combination of Crinkle Cut Carrots, French Cut Green Beans, Yellow Squash and Zucchini','','4259','2','23','1');
aData['0000039643_16754']=new Array('4 Nuggets+condiments (162g)','530','410','46','70','8','40','0g','105','35','690','29','11','4','1','4','2','19','0','6','6','10','Catfish Nuggets','Breaded Southern Style Catfish Nuggets','Contains eggs, fish, wheat, soy beans','46','3','52','2');
aData['0000000150_40478']=new Array('6 oz Ladle (202g)','200','130','14','22','7','35','0g','30','10','1000','42','9','3','0','0','7','9','15','2','30','2','Cheese Chowder','Creamy Cheese Soup with Sauteed Onions and Celery','Contains milk, wheat, soy beans','853','1','275','0');
aData['0000046982_12895']=new Array('1 Quesadilla (171g)','450','220','25','38','13','65','0g','55','18','1000','42','39','13','0','0','2','17','15','0','0','0','Cheese Quesadilla & Salsa','A Flour Tortilla Grilled Golden Filled with Creamy Monteray Jack Cheese and Served with Thick & Chunky Salsa','Contains milk, wheat, soy beans','768','0','0','0');
aData['0000034736_59474']=new Array('6 Each+2oz Ldl Sauce (262g)','280','60','7','10','4','20','0g','50','17','1030','43','43','14','5','20','12','11','20','10','15','6','Cheese Ravioli with Marinara','Cheese Ravioli Served with Marinara Sauce','Contains milk, eggs, wheat','951','6','171','1');
aData['_2CA0IY4Q3']=new Array('1 Serving (28g)','520','140','15','23','10','50','0g','105','35','920','38','53','18','5','20','15','23','20','10','20','15','Cheese Ravioli with Meat Sauce','','Contains milk, eggs, wheat','1090','6','191','3');
aData['0000039100_09535']=new Array('1 Sandwich (126g)','360','180','20','31','9','45','0g','50','17','1030','43','27','9','1','4','3','17','4','0','20','15','Cheeseburger on Bun','Marinated Hamburger Patty with American Cheese on a Bun','Contains milk, wheat','222','0','186','3');
aData['_26W0IBDNK']=new Array('1 Cup (269g)','260','150','17','26','5','25','0g','25','8','440','18','17','6','4','16','5','12','100','40','30','10','Cheesy Baked Eggplant','','','5183','25','310','2');
aData['0000038456_01484']=new Array('4 oz Patties (113g)','150','5','1','1','0','0','0g','0','0','250','10','29','10','4','16','0','5','2','8','2','6','Chick Pea Couscous Burger','','Contains wheat','140','4','29','1');
aData['0000047928_35480']=new Array('1 Wrap (112g)','190','60','7','10','1.5','8','0g','25','8','380','16','19','6','1','4','2','13','6','20','8','8','Chicken & Veggie Caesar Petite Wrap','Grilled Marinated Chicken, Grilled Marinated Vegetables, Crisp Shredded Lettuce, Lite Caesar Dressing, and Parmesan Chee','Contains milk, fish, wheat, soy beans','309','13','84','1');
aData['0000046033_49183']=new Array('1 Wrap (241g)','490','140','16','24','5','25','0g','55','18','1050','44','55','18','3','12','1','31','45','20','30','25','Chicken Caesar Wrap','Grilled Marinated Chicken, Crisp Romaine Lettuce, Lite Caesar Dressing, and Parmesan Cheese Rolled in a Soft Flour Torti','Contains milk, fish, wheat, soy beans','2240','11','306','4');
aData['0000048523_08992']=new Array('1 Breast+2z Ldl Sc (149g)','200','60','7','10','1','5','0g','50','17','560','23','11','4','0','0','0','21','0','4','2','8','Chicken Marsala','Chicken Breast Sauteed in Olive Oil and Served with a Rich Mushroom Marsala Sauce','Contains wheat, soy beans','40','2','16','1');
aData['0000051506_62379']=new Array('1 Flatbread (127g)','290','110','12','18','4','20','0g','55','18','710','30','20','7','1','4','2','24','6','6','15','10','Chicken Proscuitto Flatbread Melt','Old World Style Flatbread Topped with Vine-Ripe Tomato Sauce, Fire Roasted Chicken, Sharp Provolone Cheese, Fresh Sage,','Contains milk, wheat, soy beans','277','4','145','2');
aData['0000000231_36617']=new Array('6 oz Ladle (168g)','80','25','2.5','4','.5','3','0g','15','5','670','28','8','3','< 1','4','1','5','30','2','2','4','Chicken Rice Soup','Chicken with Rice, Carrot and Celery in a Simple Chicken Broth','Contains milk, wheat, soy beans','1390','2','21','1');
aData['0000047431_14954']=new Array('4 oz + 2 oz Sc (210g)','340','80','9','14','3','15','0g','60','20','1430','60','47','16','< 1','4','0','21','15','10','6','10','Chipotle Beef Brisket','Beef Brisket Braised with Chipotle BBQ Sauce, Served Sliced with Additional BBQ Sauce','','859','7','51','2');
aData['0000048531_20266']=new Array('1 Slice-cut 10 (139g)','390','160','18','28','8','40','0g','20','7','270','11','53','18','1','4','33','4','2','0','4','2','Chocolate Cream Pie','','Contains milk, eggs, wheat, soy beans','60','0','34','0');
aData['0000010707_41075']=new Array('Cake+choc+fruit (225g)','610','260','29','45','12','60','0g','60','20','350','15','81','27','4','16','61','8','25','50','10','15','Chocolate Fondue Bar','Pound Cake, Strawberries, Pineapple, Banana and Cantaloupe Cut for Dipping in Hot Fudge Sauce','Contains milk, eggs, wheat, soy beans','1193','33','114','2');
aData['0000003735_45886']=new Array('2 Halves (68g)','170','60','6','9','1.5','8','0g','110','37','240','10','23','8','1','4','9','6','4','0','6','8','Cinnamon French Toast','Sliced Bread Dipped in Egg Batter then Grilled and Topped with Cinnamon Sugar','Contains milk, eggs, wheat, soy beans','172','0','66','2');
aData['0000051488_58263']=new Array('1-7" Pizza (282g)','580','170','19','29','8','40','0g','40','13','1240','52','76','25','5','20','7','28','20','15','30','30','Classic Cheese Pizza','Hand Stretched Dough Layered with Vine Ripened Tomato Sauce, Shredded Mozzarella, and Fresh Basil and Oregano','Contains milk, wheat, soy beans','1067','9','301','5');
aData['0000046021_17353']=new Array('1 Sub-6" (208g)','420','190','21','32','7','35','0g','0','0','1170','49','35','12','2','8','4','23','10','10','25','15','Classic Italian Sub','Salami, Ham and Provolone on a Club Roll with Shredded Lettuce, Tomato, and Oil and Vinegar','Contains milk, wheat','617','6','227','3');
aData['0070304697_36190']=new Array('1 Slice-cut 8 (96g)','290','140','16','24','10','50','0g','0','0','210','9','34','11','1','4','19','3','0','0','6','2','Coconut Cream Pie','','Contains milk, wheat, soy beans','2','0','53','0');
aData['035427NWU_11375']=new Array('1 1/2 C (340g)','330','80','9','14','2','10','0g','55','18','1660','69','14','5','5','20','3','23','290','60','25','15','Collard Greens with Smoked Turkey','','','14316','34','273','3');
aData['0000007655_62749']=new Array('1 Ear (73g)','70','5','.5','1','0','0','0g','0','0','0','0','16','5','2','8','3','2','4','6','0','2','Corn on the Cob','Corn Cobettes Steamed Until Tender','','170','4','2','0');
aData['0000011794_14090']=new Array('1 Corndog (113g)','320','170','19','30','8','40','0g','25','8','750','31','26','9','1','4','9','10','0','0','2','10','Corndog','','Contains eggs, wheat, soy beans','0','0','23','2');
aData['0000037432_05464']=new Array('1/2 Cup (90g)','130','25','2.5','4','0','0','0g','0','0','190','8','23','8','2','8','0','4','6','0','2','2','Couscous (Vegan)','A Staple of North African Cuisine, Couscous is a Granular Semolina','Contains wheat, soy beans','341','0','11','0');
aData['0000007285_26720']=new Array('4 oz Ladle (143g)','70','0','0','0','0','0','0g','0','0','120','5','16','5','0','0','0','1','0','0','0','2','Cream of Rice Cereal','','','0','0','5','0');
aData['0190301399_05857']=new Array('6 oz Ladle (186g)','140','50','5','8','3','15','0g','15','5','510','21','19','6','2','8','11','4','10','8','10','2','Cream of Tomato Soup','','Contains milk, wheat','537','5','115','0');
aData['0185200054_00563']=new Array('4 oz Ladle (143g)','70','0','0','0','0','0','0g','0','0','125','5','14','5','0','0','0','2','0','0','2','30','Cream of Wheat (Farina)','Hot Creamy Wheat Cereal','Contains wheat','0','0','27','5');
aData['0000038376_06911']=new Array('2 oz (56g)','60','35','4','6','0','0','0g','0','0','85','4','4','1','1','4','0','1','15','20','2','2','Creamy Cole Slaw','','Contains milk, soy beans','740','13','19','0');
aData['0000047071_31787']=new Array('2 Slices (10g)','60','45','5','8','2','10','0g','10','3','250','10','0','0','0','0','0','3','0','0','0','0','Crisp Bacon','','','0','0','1','0');
aData['_2J40ZQIMI']=new Array('1 Serving (28g)','60','20','2','3','0','0','0g','0','0','320','13','11','4','3','12','5','1','0','0','4','2','Crispy Carrot Fries','','','4','0','37','1');
aData['0000048437_55893']=new Array('1 Serving (233g)','320','140','16','25','2.5','13','0g','15','5','740','31','29','10','2','8','10','10','20','110','4','8','Crispy Orange Chicken','Crispy Popcorn Chicken, Stir Fried with Green Peppers, Red Peppers, Yellow Onion, and a Spicy Asian Orange Chili Garlic','Contains eggs, fish, shellfish, wheat, soy beans','1109','68','36','1');
aData['0000008889_02119']=new Array('3 oz (85g)','200','120','13','20','1.5','8','0g','0','0','35','1','18','6','2','8','0','2','0','8','0','2','Curly French Fries','','Contains soy beans','38','5','6','0');
aData['_0QH0UYXNA']=new Array('One Each (57g)','80','20','2.5','4','.5','3','0g','20','7','110','5','13','4','< 1','4','0','2','0','8','2','2','Duchesse Potatoes','','','0','5','23','0');
aData['0437504039_21938']=new Array('1/2 Cup (102g)','160','45','5','8','1','5','0g','30','10','35','1','25','8','1','4','0','5','4','0','2','8','Egg Noodles','A Light Noodle Made with Eggs, Tossed with Margarine','Contains milk, eggs, wheat, soy beans','154','0','12','1');
aData['_2GZ0Q9EX4']=new Array('1 Serving (28g)','440','190','21','32','4.5','23','0g','0','0','1110','46','52','17','12','48','0','15','0','60','15','350','Falafels with Jerusalem Salad','','Contains wheat, soy beans','0','38','140','64');
aData['0000004037_56422']=new Array('3 oz (85g)','180','110','12','19','1','5','0g','0','0','30','1','17','6','2','8','0','2','0','0','0','2','French Fries','Regular Cut French Fries','Contains soy beans','38','0','8','0');
aData['0000016429_27878']=new Array('5 Sticks (144g)','520','290','32','49','4','20','0g','0','0','500','21','54','18','0','0','14','6','0','0','6','15','French Toast Sticks','Deep-Fried French Toast Sticks','Contains milk, eggs, wheat, soy beans','0','0','50','2');
aData['0211510867_59787']=new Array('4 oz (113g)','40','0','0','0','0','0','0g','0','0','45','2','8','3','4','16','2','3','35','120','4','4','Fresh Broccoli','Steamed Fresh Broccoli','','1755','74','45','1');
aData['028720NWU_38181']=new Array('1 Ea. (142g)','350','160','18','28','7','35','0g','230','77','800','33','31','10','1','4','3','16','10','0','25','15','Fried Egg Sandwich w\Cheese','','','448','0','234','3');
aData['0000000092_23597']=new Array('1 oz (28g)','30','10','1','1','0','0','0g','15','5','220','9','1','0','0','0','1','5','0','0','0','0','Frizzled Ham','Grilled Thinly Shaved Ham','Contains soy beans','3','0','1','0');
aData['0000008203_59633']=new Array('1 Sandwich (245g)','390','80','9','14','3','15','0g','25','8','1330','55','60','20','8','32','9','17','40','20','20','20','Gardenburger','A Gardenburger with Romaine, Tomato and Fat Free Ranch Dressing on a Toasted Bun','Contains milk, wheat, soy beans','2000','12','182','4');
aData['0091202001_56885']=new Array('1 Slice-cut 22 (35g)','140','70','8','12','4','20','0g','0','0','240','10','14','5','< 1','4','< 1','3','8','0','2','6','Garlic Bread','French Bread Seasoned with Margarine, Garlic, Paprika and Parsley and Baked','Contains milk, wheat, soy beans','386','0','12','1');
aData['0000052018_56754']=new Array('4 oz (113g)','210','100','11','17','2.5','13','0g','0','0','770','32','2','1','0','0','1','27','6','8','2','6','Gaucho Style Roasted Turkey','Roasted Turkey Breast "Steaks" Rubbed with Brazilian Chimichurri Sauce','Contains soy beans','317','4','14','1');
aData['041089NWU_36747']=new Array('1 Ea. (227g)','380','230','25','38','2','10','0g','0','0','640','27','49','16','10','40','8','14','120','20','10','20','Gourmet Vegetable Burger','','Contains wheat, tree nuts, soy beans','5859','12','120','4');
aData['0247907666_15697']=new Array('4 oz (100g)','30','0','0','0','0','0','0g','0','0','0','0','7','2','3','12','1','2','10','6','4','4','Green Beans','Steamed Green Beans','','554','4','42','1');
aData['0000007121_22044']=new Array('1 Sandwich (86g)','330','170','19','28','7','35','0g','25','8','900','38','29','10','1','4','< 1','10','15','0','20','10','Grilled Cheese Sandwich','Sliced American Cheese Grilled on White Bread','Contains milk, wheat, soy beans','798','0','223','2');
aData['_27U0VDG25']=new Array('1 Each (142g)','210','35','4','6','1','5','0g','50','17','410','17','21','7','1','4','3','22','0','0','6','10','Grilled Chicken Breast Sandwich on a Bun','','Contains wheat, soy beans','0','0','64','2');
aData['0000011612_53584']=new Array('4 oz (115g)','140','100','11','17','1.5','8','0g','0','0','95','4','11','4','2','8','6','2','15','70','4','4','Grilled Mexican Vegetables','Grilled Peppers, Red Onions, Tomatoes and Yellow Squash with Jalapeño, Cilantro and Olive Oil','','780','42','30','1');
aData['_0SS0OO3SH']=new Array('One Sandwich (198g)','510','290','32','50','12','60','0g','75','25','1560','65','34','11','2','8','0','21','0','45','20','15','Grilled Polish Sausage Sandwich','Grilled Polish Sausage Chicago Style','Contains wheat, soy beans','0','27','199','3');
aData['0000037435_19174']=new Array('1 Sandwich (199g)','630','380','42','64','13','65','0g','95','32','1630','68','39','13','5','20','6','24','10','8','30','20','Grilled Reuben Sandwich','Shaved Corned Beef, Hot Sauerkraut, Swiss Cheese and Thousand Island Dressing, Grilled on Rye','Contains milk, eggs, wheat, soy beans','617','5','288','3');
aData['_2OF0U81UG']=new Array('1-7" Pizza (312g)','110','30','3.5','5','1.5','8','0g','10','3','290','12','14','5','1','4','2','5','4','2','10','6','Grilled Vegetable Pizza','','Contains milk, wheat, soy beans','153','2','118','1');
aData['0404111582_51685']=new Array('4 oz (113g)','35','10','1','2','0','0','0g','0','0','80','3','6','2','2','8','0','1','20','120','2','4','Grilled Vegetables','Grilled Fresh Zucchini, Yellow Squash, Red, Green and Yellow Peppers and Green Onions','Contains soy beans','1084','71','23','1');
aData['0000034606_13507']=new Array('6 oz Ladle (172g)','100','5','.5','1','0','0','0g','0','0','190','8','23','8','2','8','0','2','4','0','0','6','Grits','','Contains wheat','166','0','6','1');
aData['0000047507_22989']=new Array('1 Cut-4x6 Fp (181g)','310','160','18','28','7','35','0g','50','17','640','27','22','7','2','8','0','15','6','10','4','10','Ground Beef & Potato Pie','Seasoned Ground Beef Layered with Corn, Baked with a Topping of Whipped Potatoes','Contains milk, wheat, soy beans','314','5','36','2');
aData['0000039099_44626']=new Array('1 Sandwich (112g)','310','140','16','24','6','30','0g','35','12','770','32','27','9','1','4','3','15','0','0','10','15','Hamburger on Bun','Grilled Marinated Hamburger Patty on a Plain Bun','Contains wheat','2','0','108','3');
aData['0176600099_17702']=new Array('1 Egg (44g)','60','40','4.5','7','1.5','8','0g','185','62','130','5','0','0','0','0','0','6','4','0','2','4','Hard Cooked Eggs','Eggs Boiled or Steamed until Cooked Firm','Contains eggs','212','0','23','1');
aData['0000001355_25626']=new Array('3 oz (94g)','140','70','7','11','1.5','8','0g','0','0','170','7','18','6','2','8','< 1','2','2','20','0','2','Hash Browned Diced Potatoes','Grilled Diced Potatoes, Seasoned with Salt and Pepper','Contains soy beans','88','11','5','0');
aData['0000044813_37632']=new Array('4 oz Spoodle (109g)','140','40','4.5','7','1','5','0g','0','0','90','4','23','8','3','12','0','2','0','15','2','0','Hash Browned Potatoes','Shredded Potato Fried in Oil and Seasoned with Salt and Pepper','Contains soy beans','22','8','12','0');
aData['_2880U0AZY']=new Array('1 3/4 Cup (397g)','360','210','23','35','1','5','0g','0','0','670','28','39','13','6','24','4','18','140','25','6','15','Hearty Beef-Style Seitan','','Contains wheat','6910','15','52','2');
aData['0000001330_45241']=new Array('3 oz (85g)','270','130','14','22','3.5','18','3.5g','0','0','490','20','32','11','3','12','< 1','3','0','4','2','6','Hearty Fried Potatoes','Deep-Fried Potato Slices Seasoned with Salt and Garlic Powder','','0','2','11','1');
aData['0000008709_46685']=new Array('1 Breadstick (52g)','120','10','1','2','0','0','0g','20','7','220','9','23','8','1','4','0','5','2','2','4','15','Herb Seasoned Breadsticks','Soft Breadsticks Baked with a Topping of Italian Seasonings','Contains eggs, wheat','93','1','32','2');
aData['0000047592_10113']=new Array('1 Breadstick (35g)','90','15','2','3','.5','3','0g','< 5','1','170','7','15','5','< 1','4','< 1','3','0','0','2','6','Herb Seasoned Breadsticks','Hand Crafted Bread Sticks Topped with Seasoned Garlic Butter, Poppy Seeds, Sesame Seeds, Cracked Pepper and Parmesan Che','Contains milk, wheat, soy beans','25','0','14','1');
aData['0000046907_16877']=new Array('4 oz (113g)','150','60','7','11','3.5','18','0g','0','0','180','8','22','7','2','8','0','2','6','15','2','2','Home Fried Potatoes','Diced Potatoes Caramelized with Onions, Salt, and Pepper','Contains milk, soy beans','323','8','11','0');
aData['0000001357_46680']=new Array('3 oz (91g)','120','50','6','9','2','10','0g','< 5','1','115','5','17','6','2','8','1','2','4','20','0','2','Home Fried Red Skin Potatoes','Sliced Potatoes Grilled with Bacon Fat and Onions, Seasoned with Parsley, Salt and Pepper','Contains milk, soy beans','206','11','6','0');
aData['0000007178_18395']=new Array('1 Pretzel+TP (124g)','320','70','8','12','2.5','13','0g','10','3','1370','57','53','18','2','8','0','9','4','0','10','20','Hot Pretzel Bar','Soft Pretzels Served Hot with Cheese Sauce, Dijon, Yellow and Spicy Brown Mustards','','176','0','99','3');
aData['_2R312L08O']=new Array('1 Novelty (76g)','180','80','8','13','5','25','0g','10','3','70','3','25','8','< 1','4','17','3','2','0','6','2','Ice Cream Novelties','','Contains milk, wheat, peanuts, soy beans','117','1','69','0');
aData['0000049018_56739']=new Array('4 oz (114g)','70','15','1.5','2','0','0','0g','0','0','250','10','12','4','3','12','0','2','6','50','2','4','Indian Potatoes, Peas & Cauliflower','Curry Flavored Potatoes, Peas and Fresh Cauliflower','Contains wheat, soy beans','297','29','17','1');
aData['0000047011_09325']=new Array('4 oz (113g)','30','0','0','0','0','0','0g','0','0','0','0','7','2','3','12','1','2','15','8','4','4','Italian Green Beans','','','632','5','48','1');
aData['0432402957_51574']=new Array('6 oz Ladle (166g)','120','70','8','12','3','15','0g','20','7','560','23','9','3','1','4','1','6','20','2','4','4','Italian Wedding Soup','Tiny Meatballs, Orzo Pasta and Escarole Simmered in Chicken Broth with Italian Seasonings','Contains milk, eggs, wheat, soy beans','990','2','39','1');
aData['0000051693_46014']=new Array('4 oz Spoodle (110g)','140','25','3','4','0','0','0g','0','0','510','21','26','9','< 1','4','2','3','2','2','4','10','Jambu Rice','Brazilian Rice, Pilaf-style, with Watercress.','Contains wheat, soy beans','70','2','36','2');
aData['047321NWU_32212']=new Array('1.25 C (284g)','580','350','39','60','12','60','0g','50','17','1590','66','39','13','8','32','3','14','15','30','35','10','Kamoosh','','','827','18','325','2');
aData['0000016485_48408']=new Array('1/2 Cup (102g)','120','25','2.5','4','.5','3','0g','0','0','150','6','23','8','3','12','1','4','6','0','2','6','Kasha','Roasted Buckwheat Groats, which have a Toasty, Nutty Flavor','Contains wheat, soy beans','262','0','12','1');
aData['0000043946_51068']=new Array('2 Slices Tofu+veg (166g)','220','140','15','23','2','10','0g','0','0','600','25','11','4','2','8','3','10','100','8','6','10','Korean Stir-Fried Vegetables with Tofu','Tofu, Carrot and Zucchini Stir-Fried with Sesame Oil, Soy Sauce and Hot Pepper','Contains wheat, soy beans','4783','5','64','2');
aData['0234608950_38692']=new Array('1 oz (28g)','30','20','2','3','0','0','0g','0','0','40','2','3','1','< 1','4','0','1','8','15','2','2','Lebanese Tabbouleh','Bulgur Wheat Salad Tossed with Lemon, Parsley, Tomato, Cucumber, Mint and Green Onion','Contains wheat, soy beans','447','8','10','0');
aData['_0QH0UYXNH']=new Array('6 oz. ladle (170g)','150','30','3.5','5','0','0','0g','0','0','390','16','22','7','10','40','0','9','0','50','4','15','Lentil Soup(Vegan)','','','0','29','36','3');
aData['0000007467_24705']=new Array('1 Cut-3x6 Fp (168g)','320','160','17','26','9','45','0g','45','15','860','36','26','9','1','4','4','15','15','0','35','6','Macaroni & Cheese','Macaroni Baked with Creamy American Cheese Sauce','Contains milk, wheat, soy beans','828','0','339','1');
aData['0000039158_05413']=new Array('1 Sandwich (255g)','580','250','27','42','11','55','0g','70','23','1810','75','54','18','3','12','4','30','30','20','35','25','Made to Order Deli Bar','','Contains milk, eggs, fish, wheat, soy beans','1429','12','371','4');
aData['0000033232_59166']=new Array('2 oz Ladle (63g)','70','25','2.5','4','0','0','0g','0','0','370','15','11','4','2','8','6','2','0','8','4','2','Marinara Sauce','Hearty Tomato Sauce Enhanced with Garlic, Oregano and Basil','Contains soy beans','7','5','44','1');
aData['0000035617_12800']=new Array('1 Pizza-7" (360g)','970','480','53','82','19','95','0g','115','38','2270','95','77','26','5','20','7','47','25','40','35','40','Meat Lover\'s Pizza','Pizza Sauce, Mozzarella, Italian Sausage, Pepperoni and Bacon','Contains milk, wheat, soy beans','1218','24','363','7');
aData['0000047578_20518']=new Array('1 Sandwich (160g)','400','230','25','39','12','60','0g','65','22','870','36','25','8','2','8','4','20','8','4','25','15','Meatball Flatbread Melt','Old World Style Flatbread Filled with Meatballs, Vine Ripe Tomato Marinara, Melted Mozzarella, and Sharp Parmesan Cheese','Contains milk, eggs, wheat, soy beans','402','2','272','2');
aData['0000047963_13141']=new Array('2 Pita Halves (308g)','360','160','18','27','6','30','0g','25','8','1050','44','39','13','5','20','8','12','120','25','25','20','Mediterranean Vegetable Pita','Wheat Pita Pocket Stuffed with Carrots, Cucumber, Olives, Tomato and Feta, Seasoned with Herbed Mayo','Contains milk, wheat, soy beans','5798','14','237','4');
aData['0000048884_50667']=new Array('6 oz Ladle (156g)','45','5','1','1','0','0','0g','0','0','160','7','9','3','2','8','0','1','25','8','2','4','Mushroom Barley Soup','Creamy Barley and Mushroom Soup with Carrots, Onions, Celery, and Tomatoes','Contains wheat, soy beans','1255','4','22','1');
aData['_2GS0XMEU9']=new Array('1 Serving (28g)','340','190','21','32','9','45','0g','385','128','660','28','16','5','2','8','4','22','4','0','35','15','Mushroom Cheese Strata','','Contains milk, eggs, wheat','189','0','332','3');
aData['0047100057_18988']=new Array('6 oz Ladle (203g)','120','20','2','3','0','0','0g','0','0','300','13','21','7','3','12','0','4','0','0','2','8','Oatmeal','','','0','0','20','1');
aData['0000048834_00092']=new Array('6 oz Ladle (170g)','90','30','3.5','5','.5','3','0g','20','7','550','23','8','3','< 1','4','0','7','15','2','2','4','Old Fashioned Chicken Noodle Soup','An Old World Recipe-Rich Chicken Broth Loaded with Garden Vegetables, Roasted Chicken, and Egg Noodles','Contains eggs, wheat, soy beans','769','2','17','1');
aData['0453512768_25467']=new Array('1 Cut-6x8 Fs (68g)','180','30','3.5','5','1','5','0g','0','0','740','31','33','11','< 1','4','4','4','0','0','2','10','Old-Fashioned Cornbread','','Contains milk, eggs, wheat, soy beans','0','0','15','2');
aData['0000038212_63630']=new Array('1 Omelet (200g)','290','170','19','29','8','40','0g','365','122','570','24','5','2','< 1','4','2','24','35','25','30','15','Omelet Bar','Eggs with An Assortment of Fresh Vegetables, Meats and Cheeses prepared to Order','Contains milk, eggs, fish, shellfish, soy beans','1825','16','290','3');
aData['0000001025_19734']=new Array('1 Quarter (115g)','300','170','19','29','5','25','0g','95','32','210','9','0','0','0','0','0','30','8','0','2','8','Oven Baked Chicken','Baked Chicken Seasoned with Salt, Pepper and Paprika','Contains milk, soy beans','380','0','17','1');
aData['0000001305_01767']=new Array('3 oz Spoodle (86g)','220','90','10','15','2','10','0g','0','0','100','4','30','10','3','12','1','3','8','20','2','2','Oven Browned Fresh Potatoes','Oven-Roasted Quartered Potatoes','Contains milk, soy beans','433','11','12','0');
aData['0000011054_33296']=new Array('12 oz (337g)','390','140','16','24','2.5','13','0g','85','28','260','11','54','18','2','8','11','10','60','30','8','10','Pad Thai with Shrimp','Rice Noodles Stir-Fried with Shrimp, Garlic, Fish Sauce, Tofu, Eggs, Peanuts, Onion and Bok Choy','Contains eggs, fish, shellfish, peanuts, soy beans','2757','17','84','2');
aData['0000034878_04345']=new Array('13 oz (372g)','400','130','15','23','2','10','0g','0','0','600','25','59','20','2','8','0','7','30','20','8','15','Pad Thai with Tofu','Fried Tofu and Rice Noodles with Bok Choy in a Soy Lime Sauce','Contains wheat, peanuts, soy beans','1554','13','79','3');
aData['0453010761_17731']=new Array('8 oz (228g)','300','15','1.5','3','0','0','0g','0','0','150','6','58','19','3','12','1','11','0','0','2','15','Pasta','','Contains wheat','0','0','14','2');
aData['0465613229_05504']=new Array('4 oz (112g)','220','120','13','20','2','10','0g','0','0','65','3','22','7','2','8','3','4','20','50','2','8','Pasta Salad Vinaigrette','Rotini Noodles, Peppers, Parsley and Green Onions Tossed with Italian Dressing','Contains wheat','941','33','19','1');
aData['0000011564_07586']=new Array('1 Casserole (278g)','440','240','26','40','11','55','0g','40','13','1010','42','37','12','5','20','7','18','150','400','40','15','Pastina Risotto with Red Pepper','Orzo and Pastina Pasta with Broccoli, Garlic, and Roasted Peppers in a Light Parmesan Sauce','Contains milk, wheat, soy beans','7600','237','382','2');
aData['_2UW0KLY0C']=new Array('1 Serving (94g)','190','45','5','8','1','5','0g','0','0','170','7','36','12','1','4','11','1','4','110','0','4','Peach Cobbler with Pastry Top','','Contains wheat, soy beans','201','67','7','1');
aData['0000044788_42664']=new Array('4 oz Spoodle (87g)','50','0','0','1','0','0','0g','0','0','55','2','10','3','4','16','4','2','170','8','2','4','Peas & Carrots','Peas and Carrots','','8301','5','26','1');
aData['0000047636_61817']=new Array('1 Cut-2x4 Hp (284g)','700','460','51','78','27','135','0g','155','52','1170','49','39','13','3','12','0','21','35','6','40','10','Penne with Four Cheeses','Penne Pasta Baked with Mozzarella, Fontina, Ricotta and Pecorino Romano Cheeses','Contains milk, wheat, soy beans','1808','4','395','2');
aData['0000051490_09856']=new Array('1-7" Pizza (294g)','650','220','24','38','11','55','0g','55','18','1510','63','77','26','5','20','8','31','20','15','30','30','Pepperoni Pizza','Hand Stretched Dough Layered with Vine Ripened Tomato Sauce, Sliced Pepperoni and Shredded Mozzarella Cheese','Contains milk, wheat, soy beans','955','9','299','5');
aData['0000016583_22298']=new Array('1 SL+2ZLDLSC (208g)','380','150','17','26','7','35','0g','30','10','1180','49','37','12','0','0','0','21','20','15','40','15','Pepperoni Stromboli','','','890','8','380','3');
aData['0000044693_05740']=new Array('1-7" Pizza (372g)','730','270','30','46','10','50','0g','80','27','1330','55','73','24','4','16','0','42','30','30','40','30','Pesto Chicken Pizza','Hand Stretched Dough Layered with Pesto Chicken, Fresh Mozzarella, Roasted Red Pepper, Roma Tomato, Basil Pesto, and Par','Contains milk, wheat, tree nuts, soy beans','1597','19','403','5');
aData['0000036394_11363']=new Array('1 ea. (77g)','70','25','3','5','.5','3','0g','< 5','1','250','10','10','3','2','8','1','3','30','10','6','10','Pizza Spinachi (Contain nuts and/or treenuts)','','','1461','7','58','2');
aData['0093400397_44389']=new Array('1 oz (28g)','45','25','2.5','4','.5','3','0g','15','5','115','5','4','1','0','0','< 1','1','0','2','0','0','Potato Salad','Steamed Diced Potatoes with Hard-Boiled Egg, Pickles and Onion, Blended with Salad Dressing','Contains eggs, soy beans','41','2','5','0');
aData['_2UW0LGOWF']=new Array('1 Slice (48g)','190','80','9','13','2.5','13','0g','30','10','150','6','25','8','0','0','0','2','0','0','2','4','Pound Cake','','Contains milk, eggs, wheat, soy beans','0','0','18','1');
aData['_26L0I789W']=new Array('1 Serving (28g)','100','35','4','6','1','5','0g','0','0','400','17','19','6','6','24','4','2','70','30','10','15','Pumpkin Chowder(Vegan)','','','3626','17','123','2');
aData['0000016490_29709']=new Array('1/2 Cup (110g)','230','60','7','10','.5','3','0g','0','0','125','5','36','12','3','12','0','7','4','0','4','25','Quinoa','','Contains wheat, soy beans','205','0','34','5');
aData['0000044492_12868']=new Array('1 Sandwich (244g)','520','280','31','48','13','65','0g','80','27','1240','52','32','11','3','12','0','27','30','15','35','25','Rajun Cajun Burger','A Grilled Burger on a Sesame Bun with Cajun Seasoning, Jack Cheese and Spicy Brown Mustard','Contains milk, wheat','1457','8','366','5');
aData['0000010291_41335']=new Array('1 Cut-6x8 Fs (103g)','380','130','14','22','8','40','0g','40','13','310','13','59','20','2','8','46','5','6','0','4','15','Raspberry Ribbon Brownies','Baked Chocolate Brownie Batter Layered with Cream Cheese and Raspberry Filling','Contains milk, eggs, wheat, soy beans','252','0','32','2');
aData['0405701328_56670']=new Array('#12 Scoop (86g)','120','25','3','4','1','5','0g','< 5','1','390','16','21','7','2','8','1','3','4','6','2','10','Red Beans & Rice','Rice Simmered with Tomatoes, Garlic, Onions and Bacon Drippings, Combined with Kidney Beans','Contains wheat, soy beans','223','4','29','2');
aData['0125801489_02022']=new Array('1/2 Cup (33g)','120','0','0','0','0','0','0g','0','0','0','0','26','9','0','0','0','2','0','0','0','2','Rice','','','0','0','9','0');
aData['0000039016_15333']=new Array('3 oz (85g)','190','90','10','15','3','15','0g','70','23','230','10','0','0','0','0','0','24','0','2','2','6','Rosemary Roast Pork Loin','Oven-Roasted Pork Loin, Rubbed with Rosemary','','8','1','17','1');
aData['0000004466_01343']=new Array('9 oz (298g)','150','15','1.5','2','0','0','0g','0','0','230','10','29','10','6','24','5','6','120','25','4','10','Rosemary Vegetable Ragout (Vegan)','Carrots, Red Potatoes, Mushrooms and Lima Beans Simmered in Vegetable Broth with Rosemary','Contains wheat, soy beans','5885','14','45','2');
aData['0000051584_49750']=new Array('1 Quesadilla (163g)','570','120','13','20','6','30','0g','0','0','510','21','106','35','3','12','48','7','0','0','15','15','S\'more Quesadilla','Crisp Flour Tortillas Filled with Warm Marshmallow, Melted Chocolate, and Graham Cracker Crumbs','Contains milk, wheat, soy beans','22','0','153','3');
aData['0000016420_12456']=new Array('1 Sandwich (90g)','250','170','19','28','7','35','0g','30','10','670','28','14','5','0','0','1','7','4','0','8','6','Sausage & Cheese on Biscuit','Grilled Sausage Patty and American Cheese on Buttermilk Biscuit','Contains milk, wheat, soy beans','223','0','88','1');
aData['0187300095_06443']=new Array('1 Patty (20g)','80','70','8','13','3','15','0g','15','5','110','5','0','0','0','0','0','2','0','0','0','0','Sausage Patties','','','2','0','3','0');
aData['0000013343_47740']=new Array('7" Pizza (366g)','780','330','36','56','12','60','0g','70','23','1700','71','73','24','< 1','4','0','40','30','80','50','35','Sausage Pizza','','Contains milk, wheat','1393','48','502','6');
aData['0000047725_58012']=new Array('1 Sandwich (227g)','440','210','23','36','6','30','0g','55','18','990','41','39','13','3','12','4','20','20','130','6','40','Sausage with Peppers & Onions Sandwich','Sweet Italian Sausage on a Club Roll with Sauteed Green Pepper and Onion','Contains wheat','1033','79','67','7');
aData['_2KK0R3N68']=new Array('4 oz (113g)','140','25','3','4','.5','3','0g','0','0','320','13','21','7','6','24','4','8','2','2','4','15','Savory Black-Eyed Peas','Tender Black-Eyed Peas Cooked in a Savory Cumin Garlic Broth','Contains soy beans','54','2','31','3');
aData['0093201303_28658']=new Array('#12 Scoop (92g)','180','90','10','15','2','10','0g','10','3','290','12','19','6','1','4','3','3','10','2','4','6','Savory Cornbread Stuffing','Buttermilk Cornbread Baked with Sauteed Celery and Onions, Seasoned with Poultry Seasoning','Contains milk, eggs, wheat, soy beans','476','2','47','1');
aData['0000037255_51215']=new Array('4 oz Spoodle (106g)','200','130','15','23','4','20','0g','505','168','200','8','1','0','0','0','< 1','15','15','0','6','10','Scrambled Eggs','Scrambled Eggs Cooked in Margarine','Contains milk, eggs, soy beans','717','0','63','2');
aData['0000001167_02687']=new Array('6 oz Ladle (174g)','90','25','2.5','4','.5','3','0g','30','10','510','21','9','3','1','4','2','6','30','10','4','6','Seafood Gumbo','Shrimp, Cod, Okra, Onions, Carrots and Celery Simmered with Rice, Tomatoes and Tabasco','Contains milk, fish, shellfish, wheat, soy beans','1503','6','41','1');
aData['0000049192_34500']=new Array('4 oz (114g)','190','90','10','15','3.5','18','0g','0','0','310','13','0','0','0','0','0','24','0','0','0','15','Seasoned London Broil','Broiled London Broil Marinated with Chablis, Garlic, Cilantro, Soy Sauce, Cumin, Mustard and Tabasco','Contains wheat, soy beans','9','0','8','2');
aData['0380507945_30763']=new Array('4 oz Spoodle (56g)','200','25','2.5','4','0','0','0g','0','0','430','18','40','13','0','0','0','8','0','0','2','8','Soba Noodles','','Contains wheat, soy beans','0','0','19','1');
aData['0000050412_26477']=new Array('4 oz (113g)','300','160','18','28','1.5','8','0g','0','0','35','1','26','9','3','12','0','3','2','8','0','2','Steak Cut French Fries','','Contains soy beans','58','4','9','0');
aData['0000044794_32805']=new Array('4 oz Spoodle (79g)','60','5','.5','1','0','0','0g','0','0','0','0','15','5','2','8','2','2','4','4','0','2','Steamed Corn','','','158','3','2','0');
aData['0000008163_50399']=new Array('4 oz (113g)','180','0','0','0','0','0','0g','0','0','0','0','41','14','0','0','0','4','0','0','0','4','Sticky Rice','','','0','0','2','1');
aData['_2J40ZPYCX']=new Array('1 Serving (28g)','450','180','20','31','2','10','0g','0','0','1280','53','52','17','7','28','4','18','20','20','15','10','Sweet Chili Asian Veggie Burgers','','Contains wheat, soy beans','1025','11','132','2');
aData['0000051795_12285']=new Array('6 oz Ladle (181g)','100','15','1.5','3','0','0','0g','0','0','660','28','20','7','3','12','0','2','200','15','2','4','Sweet Potato & Roasted Corn Soup','Spicy Sweet Potato Broth with Roasted Corn and Lime','Contains wheat, soy beans','9949','10','29','1');
aData['_0UU0MLLNA']=new Array('One Slice (150g)','210','20','2','3','1','5','0g','65','22','310','13','44','15','2','8','0','5','0','10','15','6','Sweet Potato Pie','','Contains milk, eggs, wheat, soy beans','0','7','142','1');
aData['0000013034_50771']=new Array('1 Sandwich (121g)','440','210','24','36','13','65','0g','40','13','1390','58','42','14','2','8','4','14','20','0','35','15','Texas-Style Grilled Cheese Sandwich','The Classic Grilled Cheese Texas Style...Gooey Melted American Cheese Between Crunchy Golden Brown Slices of Texas Toast','Contains milk, wheat, soy beans','1031','0','357','3');
aData['_2GZ0QA1VE']=new Array('1 Serving (28g)','110','35','4','6','1.5','8','0g','5','2','85','4','17','6','2','8','2','3','8','6','6','4','Tomato Tortilla Soup','','Contains milk, soy beans','429','4','67','1');
aData['0000008333_28392']=new Array('1 Tri-tater (57g)','160','100','11','17','1.5','8','0g','0','0','200','8','13','4','0','0','0','1','0','10','0','2','Tri-Tater Patties','','Contains soy beans','0','6','0','0');
aData['0000036090_45544']=new Array('1 Sandwich (259g)','450','130','14','22','4.5','23','0g','145','48','1080','45','47','16','3','12','7','33','20','15','25','30','Turkey Burger w/Lettuce, Tomato & Onion','A Grilled Turkey Burger with Lettuce, Tomato and Red Onion','Contains wheat','1045','8','241','5');
aData['0000046057_59036']=new Array('1 Slice-cut 6 (198g)','310','160','18','27','3.5','18','0g','25','8','950','40','30','10','4','16','3','16','20','25','4','20','Turkey Cobb Biggie Sandwich','Turkey, Swiss Cheese, Crisp Bacon, Ripe Avocado, and Creamy Bleu Cheese on Crusty Baguette','Contains milk, wheat, soy beans','1097','14','49','3');
aData['0000047852_17713']=new Array('1 Cut-4x6 Fp (225g)','280','130','15','23','6','30','0g','40','13','970','40','20','7','2','8','0','18','60','10','4','8','Turkey Pot Pie','Turkey, Carrots, Potatoes and Peas Baked in a Creamy Turkey Gravy with a Flaky Pastry Crust','Contains milk, eggs, wheat, soy beans','3166','6','31','1');
aData['0000035980_00148']=new Array('1 Fillet (100g)','120','50','5','8','1','5','0g','40','13','370','15','2','1','0','0','0','16','4','10','2','4','Tuscan Herbed Cod','Seared Cod Rubbed with Olive Oil and Fresh Garlic, Thyme and Italian Parsley','Contains fish','201','6','28','1');
aData['0000016345_17335']=new Array('1 Burrito (260g)','370','110','12','18','2.5','13','0g','0','0','830','35','46','15','7','28','0','19','15','35','10','35','Vegan Burritos','','','808','22','121','6');
aData['_0QH0UYXO2']=new Array('1 pancake (64g)','130','20','2','3','0','0','0g','0','0','330','14','23','8','1','4','0','4','0','0','6','8','Vegan Pancakes','','Contains wheat, soy beans','0','0','62','2');
aData['_2GU0KW2A1']=new Array('1 Serving (28g)','200','120','13','20','5','25','0g','55','18','580','24','19','6','1','4','5','4','6','8','2','6','Vegetable Egg Roll','Vegetable egg roll with sweet and sour dipping sauce.','','276','4','24','1');
aData['0000008459_51584']=new Array('6 oz (SS) (170g)','330','70','8','12','1.5','8','0g','60','20','680','28','55','18','2','8','0','8','15','20','6','15','Vegetable Fried Rice','Stir-fried Broccoli, Mushrooms, Peas, Carrots, Baby Corn and Green Onions, Tossed with Rice and Egg','Contains milk, eggs, wheat, soy beans','635','11','56','3');
aData['078997NWU_41137']=new Array('1 Ea. (198g)','250','110','12','18','3','15','0g','0','0','1080','45','30','10','6','24','4','6','70','70','8','30','Vegetable Turnover(Vegan)','','','3338','42','81','5');
aData['075552NWU_00972']=new Array('8 oz. (227g)','270','100','11','17','.5','3','0g','0','0','1030','43','28','9','6','24','13','20','15','35','8','20','Vegetarian Cuban Picadillo','','Contains wheat','672','22','74','4');
aData['0000012211_16065']=new Array('5 oz (144g)','280','70','8','12','4.5','23','0g','20','7','140','6','42','14','4','16','< 1','11','8','2','15','15','Vegetarian Herbed Pasta w\Butter & Cheese','Fettuccine Tossed with Butter, Parmesan-Romano Cheese, Basil, Oregano and Garlic','Contains milk, wheat','416','2','147','3');
aData['0000012962_36251']=new Array('1 Casserette (292g)','290','120','14','21','7','35','0g','30','10','960','40','34','11','4','16','9','9','15','40','20','4','Vegetarian Hungarian Noodle Bake Casserette','Spinach Fettuccine Topped with Peppers, Onions and Mushrooms, Baked with White Sauce','Contains milk, wheat','720','23','219','1');
aData['_25N0V0SEB']=new Array('1/2 C (142g)','290','170','19','29','8','40','0g','105','35','390','16','9','3','0','0','9','22','20','0','25','2','Vegetarian Scrambled Eggs with Cheddar','','','875','0','225','0');
aData['_2GU0KO8EF']=new Array('1 Serving (170g)','50','10','1','2','0','0','0g','0','0','500','21','9','3','2','8','3','2','45','30','4','6','Vegetarian Vegetable Soup','','Contains wheat, soy beans','2332','18','33','1');
aData['0000013342_45772']=new Array('1 Cut-8(16") (167g)','370','130','14','22','4.5','23','0g','20','7','680','28','42','14','0','0','0','18','6','20','30','15','Vegetarian Vegetarian Pepper & Onion Pizza','','','303','11','292','3');
aData['0000047907_60623']=new Array('1 Sub-6" (200g)','300','100','11','17','5','25','0g','20','7','820','34','42','14','0','0','0','9','70','50','10','15','Veggie Sub Sandwich','Garden Fresh Veggies and Herbed Cream Cheese on a Club Roll with Shredded Lettuce & Fresh Tomato','Contains milk, wheat','3736','33','94','3');
aData['0073700085_38344']=new Array('2 Waffles/1.4z Each (79g)','180','50','6','9','1','5','0g','0','0','220','9','29','10','< 1','4','2','3','6','0','6','10','Waffles','','Contains milk, eggs, wheat, soy beans','275','1','53','2');
aData['0000012699_55777']=new Array('5 oz (144g)','120','20','2','3','1.5','8','0g','5','2','220','9','24','8','2','8','2','3','2','25','4','2','Whipped Red Potatoes','Red Potatoes with Skin Whipped with Milk, Butter, Salt and Pepper','Contains milk','92','15','31','0');
aData['0125801489_03726']=new Array('.5 Cup (86g)','100','0','0','0','0','0','0g','0','0','0','0','21','7','0','0','0','2','0','0','2','6','White Rice','','','0','0','16','1');
aData['0000048606_56933']=new Array('4 oz (52g)','190','20','2.5','4','0','0','0g','0','0','110','5','38','13','4','16','0','7','0','0','2','10','Whole Wheat Pasta','','Contains wheat','0','0','20','2');
aData['0000034821_03042']=new Array('6 oz Ladle (191g)','270','160','17','27','2.5','13','0g','0','0','700','29','28','9','0','0','13','4','10','15','4','15','Wild Mushroom & Corn Fricassee','A Light Stew with Wild Mushrooms and Pan Roasted Yellow Corn','Contains wheat, soy beans','563','9','49','3');