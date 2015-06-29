	$('#startplay button').on('click', gameOn)

	function gameOn() {
		$('#startplay').attr('id', 'go');
		$('#menuheader').attr('id', 'headerback');
		$('#menuoptions').attr('id', 'optionsback');
		$('#namebox').attr('id', 'nameback');
		$('#menu-background').attr('id', 'inactive-menu');
		$('#menu-active').attr('id', 'menu');
		$('#notyet').attr('id', 'currentturn');
		var name = $('#player1').val();
		$('#turntext').text(name);
		pokeFun();
	}

	function pokeFun() {
		var images = ['http://25.media.tumblr.com/e12ddf7762d0bc46618a43cdf2298331/tumblr_mh26ip5Dfj1s3bc1no1_400.gif', 'https://cdn2.scratch.mit.edu/get_image/user/3650199_60x60.png?v=1393720379.0', 'https://cdn2.scratch.mit.edu/get_image/gallery/760092_200x130.png?v=1418516304.0', 'http://31.media.tumblr.com/21e9ab876cd84558592f3bcfb21c37fc/tumblr_ml5q06jBQc1s5h198o1_500.gif', 'http://24.media.tumblr.com/c51cd02791759d7ebe328f55dda56e9e/tumblr_ml5preSYmM1s5h198o1_500.gif', 'http://24.media.tumblr.com/tumblr_m2x5nxDthL1qgd7tso3_250.gif', 'http://25.media.tumblr.com/298c9e8f4734105475b25e1582ebfa95/tumblr_ml4k75rvdz1s3bc1no1_250.gif', 'http://i1089.photobucket.com/albums/i349/wewextreme/Pokemon%20Stuff/cccccccccccccchhhhhhh.gif', 'http://25.media.tumblr.com/tumblr_m2wybd9O9p1qgd7tso3_250.gif', 'http://24.media.tumblr.com/887b48c8a385f038f3803b615f65b971/tumblr_mh26ip5Dfj1s3bc1no3_400.gif', 'http://24.media.tumblr.com/f76f12c22c1a00bfac8b8440a3987f3e/tumblr_n28pbsrzTu1s3bc1no1_250.gif', 'https://33.media.tumblr.com/a056fe9ac8f8ee1dddac979c07b3f8d1/tumblr_n0g3c2XeM41r2t7oqo1_500.gif', 'http://25.media.tumblr.com/2d55d887558d2b0edb0784f64e6b0c6c/tumblr_mhd98a5fT51s2ugo7o8_250.gif', 'http://25.media.tumblr.com/tumblr_m2wybd9O9p1qgd7tso1_250.gif', 'http://37.media.tumblr.com/fd3221609a10ee180ca04bb093e52071/tumblr_n25riw6bag1s3bc1no3_400.gif', 'http://31.media.tumblr.com/5e7c202c9577d66bb0bb2a1cc049e511/tumblr_n4pl0xYGuF1s3bc1no2_400.gif', 'http://25.media.tumblr.com/tumblr_mdyicdFlIb1qfqgb9o1_500.gif', 'http://31.media.tumblr.com/5228817268c105a3308036021a39a612/tumblr_mo3yc0jVmQ1s3bc1no1_250.gif', 'http://25.media.tumblr.com/tumblr_m2wybd9O9p1qgd7tso2_r2_250.gif', 'http://31.media.tumblr.com/f1d5514c6939b12e90636ffb86b254f1/tumblr_mjeo1yxpUu1s3bc1no1_500.gif', 'https://33.media.tumblr.com/tumblr_m44teiVWRS1qeh39oo2_r1_500.gif', 'http://25.media.tumblr.com/c7beb8c411a9447f326c54b531b1067a/tumblr_mhd98a5fT51s2ugo7o9_250.gif', 'http://media.giphy.com/media/CjWgCaiHGh4be/giphy.gif', 'http://31.media.tumblr.com/94dd642bae4af0f8f29b4187f8b00f9a/tumblr_mkv8xzNuYo1s3bc1no1_500.gif', 'http://38.media.tumblr.com/551a1a074aa1ee1424e218a3914f6130/tumblr_n9dzjm0pJC1s3bc1no2_500.gif', 'http://38.media.tumblr.com/80dc83e516883b54ebf2b4c4d4635780/tumblr_n8h4ahRJk91s3bc1no1_400.gif', 'http://38.media.tumblr.com/9fdf797befed9f89adf121619f271763/tumblr_n8h4ahRJk91s3bc1no2_400.gif', 'http://24.media.tumblr.com/3d6b8cfdb32f28821c1932f95fdd024f/tumblr_mgure0Mhtq1s2ugo7o1_400.gif']

		var name1 = $('#player1').val();
		$('#pokegif1 p').text(name1);
		$('<img src="' + images[Math.floor(Math.random() * images.length)] + '" width="180px" height="150px">').appendTo('#pokegif1');

		var name2 = $('#player2').val();
		$('#pokegif2 p').text(name2);
		$('<img src="' + images[Math.floor(Math.random() * images.length)] + '" width="180px" height="150px">').appendTo('#pokegif2');
	}