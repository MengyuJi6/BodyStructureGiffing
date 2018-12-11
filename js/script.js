var api_key = "kZN6VfSXRAkZCOVr0G99mH3q84rdRY7T"
var clickedSymptom = 0;
var editState = 0;

var temp = store.get('user');
if (temp == undefined) {
	store.set('user', 
	{	name:'Marcus',
  		password:'123456',
  		history: []
	});
}

function searchAbdomen(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs/search';
	var search_item_copy = document.getElementById("search_abdomen").value;
	var search_item = search_item_copy.toString();
	// var id1 = '4kg8IIClzvLtC';

	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		q:search_item,
		limit:6
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-abdomen")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-abdomen').empty();
		$('#rectangle-abdomen').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}


function searchHead(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs/search';
	var search_item_copy = document.getElementById("search_head").value;
	var search_item = search_item_copy.toString();
	// var id1 = '4kg8IIClzvLtC';

	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		q:search_item,
		limit:6
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-head")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-head').empty();
		$('#rectangle-head').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function searchHeart(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs/search';
	var search_item_copy = document.getElementById("search_heart").value;
	var search_item = search_item_copy.toString();
	// var id1 = '4kg8IIClzvLtC';

	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		q:search_item,
		limit:6
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-heart")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-heart').empty();
		$('#rectangle-heart').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function searchAbdomen2(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs/search';
	var search_item_copy = document.getElementById("search_abdomen2").value;
	var search_item = search_item_copy.toString();
	// var id1 = '4kg8IIClzvLtC';

	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		q:search_item,
		limit:6
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-abdomen2")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-abdomen2').empty();
		$('#rectangle-abdomen2').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}


function searchHead2(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs/search';
	var search_item_copy = document.getElementById("search_head2").value;
	var search_item = search_item_copy.toString();
	// var id1 = '4kg8IIClzvLtC';

	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		q:search_item,
		limit:6
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-head2")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-head2').empty();
		$('#rectangle-head2').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function searchHeart2(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs/search';
	var search_item_copy = document.getElementById("search_heart2").value;
	var search_item = search_item_copy.toString();
	// var id1 = '4kg8IIClzvLtC';

	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		q:search_item,
		limit:6
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-heart2")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-heart2').empty();
		$('#rectangle-heart2').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getNormalAbdomen(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = '4kg8IIClzvLtC';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-abdomen")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-abdomen').empty();
		$('#rectangle-abdomen').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getAbdomenHunger(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = 'JE1YlMbVIPxUA';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-abdomen")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-abdomen').empty();
		$('#rectangle-abdomen').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getAbdomenDehydration(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = 'zrwhJfPPkSXaU';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-abdomen")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-abdomen').empty();
		$('#rectangle-abdomen').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getAbdomenGas(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = 'UAhY9fQziKNyM';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-abdomen")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-abdomen').empty();
		$('#rectangle-abdomen').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getAbdomenTender(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = '1372p1RSz94o6s';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-abdomen")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-abdomen').empty();
		$('#rectangle-abdomen').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getHeadNormal(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = 'yoJC2GBlQUYFF12X3W';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-head")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-head').empty();
		$('#rectangle-head').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getHeadDizziness(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = 'xUNda89D3OJcYaMkeI';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-head")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-head').empty();
		$('#rectangle-head').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getHeadHeadache(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = 'l378aiPPFAGEsetIk';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-head")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-head').empty();
		$('#rectangle-head').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getHeadVision(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = '3o6ozkchQhWRbWSTXa';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-head")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-head').empty();
		$('#rectangle-head').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getHeadVomiting(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = 'dOl2LFw0RbTMc';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-head")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-head').empty();
		$('#rectangle-head').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getHeartNormal(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = '3o7ZeN4rMARhZxgXqo';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-heart")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-heart').empty();
		$('#rectangle-heart').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getHeartPalpitations(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = '2mN50UXV2bCZW';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-heart")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-heart').empty();
		$('#rectangle-heart').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getHeartMurmurs(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = 'DZagytQ7EmIg';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-heart")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-heart').empty();
		$('#rectangle-heart').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getHeartChestPain(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = '3o6MbgOI2otYruPIkg';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-heart")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-heart').empty();
		$('#rectangle-heart').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getHeartTightness(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = 'nsZqyB2Qys0lG';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-heart")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-heart').empty();
		$('#rectangle-heart').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getNormalAbdomen2(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = '4kg8IIClzvLtC';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-abdomen2")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-abdomen2').empty();
		$('#rectangle-abdomen2').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getAbdomenHunger2(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = 'JE1YlMbVIPxUA';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-abdomen2")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-abdomen2').empty();
		$('#rectangle-abdomen2').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getAbdomenDehydration2(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = 'zrwhJfPPkSXaU';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-abdomen2")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-abdomen2').empty();
		$('#rectangle-abdomen2').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getAbdomenGas2(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = 'UAhY9fQziKNyM';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-abdomen2")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-abdomen2').empty();
		$('#rectangle-abdomen2').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getAbdomenTender2(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = '1372p1RSz94o6s';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-abdomen2")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-abdomen2').empty();
		$('#rectangle-abdomen2').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getHeadNormal2(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = '4kg8IIClzvLtC';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-head2")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-head2').empty();
		$('#rectangle-head2').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getHeadDizziness2(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = 'xUNda89D3OJcYaMkeI';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-head2")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-head2').empty();
		$('#rectangle-head2').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getHeadHeadache2(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = 'l378aiPPFAGEsetIk';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-head2")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-head2').empty();
		$('#rectangle-head2').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getHeadVision2(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = '3o6ozkchQhWRbWSTXa';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-head2")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-head2').empty();
		$('#rectangle-head2').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getHeadVomiting2(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = 'dOl2LFw0RbTMc';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-head2")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-head2').empty();
		$('#rectangle-head2').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getHeartNormal2(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = '3o7ZeN4rMARhZxgXqo';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-heart2")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-heart2').empty();
		$('#rectangle-heart2').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getHeartPalpitations2(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = '2mN50UXV2bCZW';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-heart2")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-heart2').empty();
		$('#rectangle-heart2').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getHeartMurmurs2(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = 'DZagytQ7EmIg';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-heart2")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-heart2').empty();
		$('#rectangle-heart2').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getHeartChestPain2(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = '3o6MbgOI2otYruPIkg';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-heart2")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-heart2').empty();
		$('#rectangle-heart2').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function getHeartTightness2(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = 'nsZqyB2Qys0lG';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
		limit:10
	})
	.done(function(response){
		imgUrl = response.data[0].images.original.url;
		htmlUrl = '<img src="'+imgUrl+'" width="150" height="100"/>'
		var rectangle = document.getElementById("rectangle-heart2")
		rectangle.innherHTML = htmlUrl;
		$('#rectangle-heart2').empty();
		$('#rectangle-heart2').append(htmlUrl)
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function showHeart(){
	// $('#result').html("");
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs/search';
	var heart = 'heart';

	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		q:heart,
		limit:10
	})
	.done(function(data){
		console.log(data);
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function showHead(){
	// $('#result').html("");
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs/search';
	var head = 'head';

	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		q:head,
		limit:10
	})
	.done(function(data){
		console.log(data);
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}


function showAbdomen(){
	// $('#result').html("");
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs/search';
	var abdomen = 'abdomen';

	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		q:abdomen,
		limit:10
	})
	.done(function(data){
		console.log(data);
		// for(var i=0;i<10;i++){
		// 	$('#result').append(data.data.results[i]);
		// }
	})
	.fail(function(err){
		console.log(err);
	});
}

function abdomenNormalTextShow() {
	$('#abd-normal-text').show()
}

function abdomenNormalTextHide() {
	$('#abd-normal-text').hide()
}

function abdomenHungerTextShow() {
	$('#abd-appetite-text').show()
}

function abdomenHungerTextHide() {
	$('#abd-appetite-text').hide()
}
function abdomenDehydrationTextShow() {
	$('#abd-dehydration-text').show()
}

function abdomenDehydrationTextHide() {
	$('#abd-dehydration-text').hide()
}
function abdomenGasTextShow() {
	$('#abd-gas-text').show()
}

function abdomenGasTextHide() {
	$('#abd-gas-text').hide()
}
function abdomenTenderTextShow() {
	$('#abd-tender-text').show()
}

function abdomenTenderTextHide() {
	$('#abd-tender-text').hide()
}




function headNormalTextShow() {
	$('#head-normal-text').show()
}

function headNormalTextHide() {
	$('#head-normal-text').hide()
}
function headDizzyTextShow() {
	$('#head-dizzy-text').show()
}

function headDizzyTextHide() {
	$('#head-dizzy-text').hide()
}
function headHeadacheTextShow() {
	$('#head-headache-text').show()
}

function headHeadacheTextHide() {
	$('#head-headache-text').hide()
}
function headVisionTextShow() {
	$('#head-vision-text').show()
}

function headVisionTextHide() {
	$('#head-vision-text').hide()
}
function headVomitTextShow() {
	$('#head-vomit-text').show()
}

function headVomitTextHide() {
	$('#head-vomit-text').hide()
}



function heartNormalTextShow() {
	$('#heart-normal-text').show()
}

function heartNormalTextHide() {
	$('#heart-normal-text').hide()
}
function heartPalpitationTextShow() {
	$('#heart-palpitation-text').show()
}

function heartPalpitationTextHide() {
	$('#heart-palpitation-text').hide()
}
function heartMurmurTextShow() {
	$('#heart-murmur-text').show()
}

function heartMurmurTextHide() {
	$('#heart-murmur-text').hide()
}
function heartChestTextShow() {
	$('#heart-chest-text').show()
}

function heartChestTextHide() {
	$('#heart-chest-text').hide()
}
function heartTightnessTextShow() {
	$('#heart-tightness-text').show()
}

function heartTightnessTextHide() {
	$('#heart-tightness-text').hide()
}


$(document).ready(function () {
	$('#abdomen-normal').mouseenter(function() {
		abdomenNormalTextShow();
	});
	$('#abdomen-normal').mouseleave(function() {
		abdomenNormalTextHide();
	});
	$('#abdomen-hunger').mouseenter(function() {
		abdomenHungerTextShow();
	});
	$('#abdomen-hunger').mouseleave(function() {
		abdomenHungerTextHide();
	});
	$('#abdomen-dehydration').mouseenter(function() {
		abdomenDehydrationTextShow();
	});
	$('#abdomen-dehydration').mouseleave(function() {
		abdomenDehydrationTextHide();
	});
	$('#abdomen-gas').mouseenter(function() {
		abdomenGasTextShow();
	});
	$('#abdomen-gas').mouseleave(function() {
		abdomenGasTextHide();
	});
	$('#abdomen-tender').mouseenter(function() {
		abdomenTenderTextShow();
	});
	$('#abdomen-tender').mouseleave(function() {
		abdomenTenderTextHide();
	});


	$('#head-normal').mouseenter(function() {
		headNormalTextShow();
	});
	$('#head-normal').mouseleave(function() {
		headNormalTextHide();
	});
	$('#head-dizzy').mouseenter(function() {
		headDizzyTextShow();
	});
	$('#head-dizzy').mouseleave(function() {
		headDizzyTextHide();
	});
	$('#head-headache').mouseenter(function() {
		headHeadacheTextShow();
	});
	$('#head-headache').mouseleave(function() {
		headHeadacheTextHide();
	});
	$('#head-vision').mouseenter(function() {
		headVisionTextShow();
	});
	$('#head-vision').mouseleave(function() {
		headVisionTextHide();
	});
	$('#head-vomit').mouseenter(function() {
		headVomitTextShow();
	});
	$('#head-vomit').mouseleave(function() {
		headVomitTextHide();
	});


	$('#heart-normal').mouseenter(function() {
		heartNormalTextShow();
	});
	$('#heart-normal').mouseleave(function() {
		heartNormalTextHide();
	});
	$('#heart-palpitation').mouseenter(function() {
		heartPalpitationTextShow();
	});
	$('#heart-palpitation').mouseleave(function() {
		heartPalpitationTextHide();
	});
	$('#heart-murmur').mouseenter(function() {
		heartMurmurTextShow();
	});
	$('#heart-murmur').mouseleave(function() {
		heartMurmurTextHide();
	});
	$('#heart-chest').mouseenter(function() {
		heartChestTextShow();
	});
	$('#heart-chest').mouseleave(function() {
		heartChestTextHide();
	});
	$('#heart-tightness').mouseenter(function() {
		heartTightnessTextShow();
	});
	$('#heart-tightness').mouseleave(function() {
		heartTightnessTextHide();
	});


	$('#abdomen-normal').click(function() {
		getNormalAbdomen();
		$('#abdomenFloat').find(".active").removeClass('active');
		$('#abdomen-normal').addClass('active');
		clickedSymptom = "Normal";
	});
	$('#abdomen-hunger').click(function() {
		getAbdomenHunger();
		$('#abdomenFloat').find(".active").removeClass('active');
		$('#abdomen-hunger').addClass('active');
		clickedSymptom = "Loss of Appetite";
	});
	$('#abdomen-dehydration').click(function() {
		getAbdomenDehydration();
		$('#abdomenFloat').find(".active").removeClass('active');
		$('#abdomen-dehydration').addClass('active');
		clickedSymptom = "Dehydration";
	});
	$('#abdomen-gas').click(function() {
		getAbdomenGas();
		$('#abdomenFloat').find(".active").removeClass('active');
		$('#abdomen-gas').addClass('active');
		clickedSymptom = "Gas";
	});
	$('#abdomen-tender').click(function() {
		getAbdomenTender();
		$('#abdomenFloat').find(".active").removeClass('active');
		$('#abdomen-tender').addClass('active');
		clickedSymptom = "Tender Abdomen";
	});
	$('#head-normal').click(function() {
		getHeadNormal();
		$('#headFloat').find(".active").removeClass('active');
		$('#head-normal').addClass('active');
		clickedSymptom = "Normal";
	});
	$('#head-dizzy').click(function() {
		getHeadDizziness();
		$('#headFloat').find(".active").removeClass('active');
		$('#head-dizzy').addClass('active');
		clickedSymptom = "Dizziness";
	});
	$('#head-headache').click(function() {
		getHeadHeadache();
		$('#headFloat').find(".active").removeClass('active');
		$('#head-headache').addClass('active');
		clickedSymptom = "Headache";
	});
	$('#head-vision').click(function() {
		getHeadVision();
		$('#headFloat').find(".active").removeClass('active');
		$('#head-vision').addClass('active');
		clickedSymptom = "Changes in Vision";
	});
	$('#head-vomit').click(function() {
		getHeadVomiting();
		$('#headFloat').find(".active").removeClass('active');
		$('#head-vomit').addClass('active');
		clickedSymptom = "Vomiting";
	});
	$('#heart-normal').click(function() {
		getHeartNormal();
		$('#heartFloat').find(".active").removeClass('active');
		$('#heart-normal').addClass('active');
		clickedSymptom = "Normal";
	});
	$('#heart-palpitation').click(function() {
		getHeartPalpitations();
		$('#heartFloat').find(".active").removeClass('active');
		$('#heart-palpitation').addClass('active');
		clickedSymptom = "Heart Palpitations";
	});
	$('#heart-murmur').click(function() {
		getHeartMurmurs();
		$('#heartFloat').find(".active").removeClass('active');
		$('#heart-murmur').addClass('active');
		clickedSymptom = "Murmurs";
	});
	$('#heart-chest').click(function() {
		getHeartChestPain();
		$('#heartFloat').find(".active").removeClass('active');
		$('#heart-chest').addClass('active');
		clickedSymptom = "Chest Pain";
	});
	$('#heart-tightness').click(function() {
		getHeartTightness();
		$('#heartFloat').find(".active").removeClass('active');
		$('#heart-tightness').addClass('active');
		clickedSymptom = "Tightness or Pressure";
	});

	$('#abdomen-normal2').click(function() {
		if (editState == 1) {getNormalAbdomen2();
			$('#abdomenEditFloat').find(".active").removeClass('active');
			$('#abdomen-normal2').addClass('active');
		clickedSymptom = "Normal";}
	});
	$('#abdomen-hunger2').click(function() {
		if (editState == 1) {getAbdomenHunger2();
			$('#abdomenEditFloat').find(".active").removeClass('active');
			$('#abdomen-hunger2').addClass('active');
		clickedSymptom = "Loss of Appetite";}
	});
	$('#abdomen-dehydration2').click(function() {
		if (editState == 1) {getAbdomenDehydration2();
			$('#abdomenEditFloat').find(".active").removeClass('active');
			$('#abdomen-dehydration2').addClass('active');
		clickedSymptom = "Dehydration";}
	});
	$('#abdomen-gas2').click(function() {
		if (editState == 1) {getAbdomenGas2();
			$('#abdomenEditFloat').find(".active").removeClass('active');
			$('#abdomen-gas2').addClass('active');
		clickedSymptom = "Gas";}
	});
	$('#abdomen-tender2').click(function() {
		if (editState == 1) {getAbdomenTender2();
			$('#abdomenEditFloat').find(".active").removeClass('active');
			$('#abdomen-tender2').addClass('active');
		clickedSymptom = "Tender Abdomen";}
	});
	$('#head-normal2').click(function() {
		if (editState == 1) {getHeadNormal2();
			$('#headEditFloat').find(".active").removeClass('active');
			$('#head-normal2').addClass('active');
		clickedSymptom = "Normal";}
	});
	$('#head-dizzy2').click(function() {
		if (editState == 1) {getHeadDizziness2();
			$('#headEditFloat').find(".active").removeClass('active');
			$('#head-dizzy2').addClass('active');
		clickedSymptom = "Dizziness";}
	});
	$('#head-headache2').click(function() {
		if (editState == 1) {getHeadHeadache2();
			$('#headEditFloat').find(".active").removeClass('active');
			$('#head-headache2').addClass('active');
		clickedSymptom = "Headache";}
	});
	$('#head-vision2').click(function() {
		if (editState == 1) {getHeadVision2();
			$('#headEditFloat').find(".active").removeClass('active');
			$('#head-vision2').addClass('active');
		clickedSymptom = "Changes in Vision";}
	});
	$('#head-vomit2').click(function() {
		if (editState == 1) {getHeadVomiting2();
			$('#headEditFloat').find(".active").removeClass('active');
			$('#head-vomit2').addClass('active');
		clickedSymptom = "Vomiting";}
	});
	$('#heart-normal2').click(function() {
		if (editState == 1) {getHeartNormal2();
			$('#heartEditFloat').find(".active").removeClass('active');
			$('#heart-normal2').addClass('active');
		clickedSymptom = "Normal";}
	});
	$('#heart-palpitation2').click(function() {
		if (editState == 1) {getHeartPalpitations2();
			$('#heartEditFloat').find(".active").removeClass('active');
			$('#heart-palpitation2').addClass('active');
		clickedSymptom = "Heart Palpitations";}
	});
	$('#heart-murmur2').click(function() {
		if (editState == 1) {getHeartMurmurs2();
			$('#heartEditFloat').find(".active").removeClass('active');
			$('#heart-murmur2').addClass('active');
		clickedSymptom = "Murmurs";}
	});
	$('#heart-chest2').click(function() {
		if (editState == 1) {getHeartChestPain2();
			$('#heartEditFloat').find(".active").removeClass('active');
			$('#heart-chest2').addClass('active');
		clickedSymptom = "Chest Pain";}
	});
	$('#heart-tightness2').click(function() {
		if (editState == 1) {getHeartTightness2();
			$('#heartEditFloat').find(".active").removeClass('active');
			$('#heart-tightness2').addClass('active');
		clickedSymptom = "Tightness or Pressure";}
	});
});

//history function
$(function () {
    $("#updatebtn").click(function () {        
        var data = [["Date", "Area", "Symptom", "Description"]] //headers
        var hist = store.get('user');
        for (i = hist.history.length-1; i >= 0; i--) {
            var dat = hist.history[i].date;
            var aa = hist.history[i].area;
            var sym = hist.history[i].symptom;
            var desc = hist.history[i].description;
            data.push([dat,aa,sym,desc]);
        }

        var HistoryTable = makeTable($('#historytbl'), data);
    });

    $("#deletebtn").click(function () {        
        var index = $('#historytbl').find(".highlighted").index(); //for history record        
       	if (index != -1) {
       		var retVal = confirm("Are you sure to delete this entry?");
   			if( retVal == true ) {
	            $('#historytbl').find('.highlighted').remove();
	            //console.log(index);
				var hist = store.get('user');
				var l=hist.history.length;
	            hist.history.splice( l-index, 1);
				store.set('user', hist);
				$('#historyMessage').text('Delete Successfully');			
				$('#abdomenEditFloat').css("display", "none");
				$('#heartEditFloat').css("display", "none");
				$('#headEditFloat').css("display", "none");
        	}
       	}
       	else {
       		$('#historyMessage').text('Please select an entry.');
       	}
        
    });

    $("#abdomenSaveBtn").click(function () {
		if (clickedSymptom == 0) alert("Select a symptom");
		else {
        	var d = new Date();
	        var month = d.getMonth()+1;
        	var	day = d.getDate();
        	var dt = d.getFullYear() + '-' +
	            (month<10 ? '0' : '') + month + '-' +
            	(day<10 ? '0' : '') + day;
        	var desp = $('textarea#abdomenDesc').val();
        	var hist = store.get('user');        
        	hist.history.push({ date : dt,
	            area : 'Abdomen',
            	symptom : clickedSymptom,
            	description : desp
        	});
			store.set('user', hist);
		$('#abdomenSaveText').text('Save successfully');

		}
		var data = [["Date", "Area", "Symptom", "Description"]] //headers
        var hist = store.get('user');
        for (i = hist.history.length-1; i >= 0; i--) {
            var dat = hist.history[i].date;
            var aa = hist.history[i].area;
            var sym = hist.history[i].symptom;
            var desc = hist.history[i].description;
            data.push([dat,aa,sym,desc]);
        }

        var HistoryTable = makeTable($('#historytbl'), data);
        //console.log(hist);
	});

	$("#headSaveBtn").click(function () {
		if (clickedSymptom == 0) alert("Select a symptom");
		else {
        	var d = new Date();
	        var month = d.getMonth()+1;
        	var	day = d.getDate();
        	var dt = d.getFullYear() + '-' +
	            (month<10 ? '0' : '') + month + '-' +
            	(day<10 ? '0' : '') + day;
        	var desp = $('textarea#headDesc').val();
        	var hist = store.get('user');        
        	hist.history.push({ date : dt,
	            area : 'Head',
            	symptom : clickedSymptom,
            	description : desp
        	});
			store.set('user', hist);
		$('#headSaveText').text('Save successfully');
			
		}
		var data = [["Date", "Area", "Symptom", "Description"]] //headers
        var hist = store.get('user');
        for (i = hist.history.length-1; i >= 0; i--) {
            var dat = hist.history[i].date;
            var aa = hist.history[i].area;
            var sym = hist.history[i].symptom;
            var desc = hist.history[i].description;
            data.push([dat,aa,sym,desc]);
        }

        var HistoryTable = makeTable($('#historytbl'), data);
        //console.log(hist);
	});

	$("#heartSaveBtn").click(function () {
		if (clickedSymptom == 0) alert("Select a symptom");
		else {
        	var d = new Date();
	        var month = d.getMonth()+1;
        	var	day = d.getDate();
        	var dt = d.getFullYear() + '-' +
	            (month<10 ? '0' : '') + month + '-' +
            	(day<10 ? '0' : '') + day;
        	var desp = $('textarea#heartDesc').val();
        	var hist = store.get('user');        
        	hist.history.push({ date : dt,
	            area : 'Heart',
            	symptom : clickedSymptom,
            	description : desp
        	});
			store.set('user', hist);
		$('#heartSaveText').text('Save successfully');
			
		}
		var data = [["Date", "Area", "Symptom", "Description"]] //headers
        var hist = store.get('user');
        for (i = hist.history.length-1; i >= 0; i--) {
            var dat = hist.history[i].date;
            var aa = hist.history[i].area;
            var sym = hist.history[i].symptom;
            var desc = hist.history[i].description;
            data.push([dat,aa,sym,desc]);
        }

        var HistoryTable = makeTable($('#historytbl'), data);
        //console.log(hist);
	});
	
	$("#editbtn").click(function () {		
		var index = $('#historytbl').find(".highlighted").index();
		if (index != -1) {
			clickShowDiv(this);
			var hist = store.get('user');
			$('#editDate').val(hist.history[index-1].date);
			$('#editArea').val(hist.history[index-1].area);
			$('#editSymptom').val(hist.history[index-1].symptom);
			$('#editDesc').val(hist.history[index-1].description);
			//console.log(hist);
		}
		else {
			alert("select a record");
		}
	});

	$("#abdomenEditBtn").click(function () {		
		if (editState==0) editState = 1;
		$('#abdomenDesc2').prop( "disabled", false );
		$('#search_abdomen2').prop( "disabled", false );
		$('#abdomenText').text('');
	});

	$("#headEditBtn").click(function () {		
		if (editState==0) editState = 1;
		$('#headDesc2').prop( "disabled", false );
		$('#search_head2').prop( "disabled", false );
		$('#headText').text('');
	});

	$("#heartEditBtn").click(function () {		
		if (editState==0) editState = 1;
		$('#heartDesc2').prop( "disabled", false );
		$('#search_heart2').prop( "disabled", false );
		$('#heartText').text('');
	});
	
	$("#abdomenUpdateBtn").click(function () {
		if (editState == 1)  {
		var index = $('#historytbl').find(".highlighted").index();
		var symp = clickedSymptom;
		var d = new Date();
		var month = d.getMonth()+1;
		var	day = d.getDate();
		var dat = d.getFullYear() + '-' +
			(month<10 ? '0' : '') + month + '-' +
			(day<10 ? '0' : '') + day;
		var desp = $('#abdomenDesc2').val();
		var aa = 'Abdomen'
		var hist = store.get('user');
		var l = hist.history.length;
		hist.history.splice( l-index, 1, { date : dat,
            area : aa,
            symptom : symp,
            description : desp
        });
		store.set('user', hist);
		$('#abdomenText').text('Update successfully');
		editState = 0;
		$('#abdomenDesc2').prop( "disabled", true );
		$('#search_abdomen2').prop( "disabled", true );
		var data = [["Date", "Area", "Symptom", "Description"]] //headers
        var hist = store.get('user');
        for (i = hist.history.length-1; i >= 0; i--) {
            var dat = hist.history[i].date;
            var aa = hist.history[i].area;
            var sym = hist.history[i].symptom;
            var desc = hist.history[i].description;
            data.push([dat,aa,sym,desc]);
        }

		var HistoryTable = makeTable($('#historytbl'), data);
		$('#historytbl').find( 'tr' ).eq(index).addClass('highlighted');
		}
        //console.log(hist);
	});

	$("#headUpdateBtn").click(function () {
		if (editState == 1)  {
		var index = $('#historytbl').find(".highlighted").index();
		var symp = clickedSymptom;
		var d = new Date();
		var month = d.getMonth()+1;
		var	day = d.getDate();
		var dat = d.getFullYear() + '-' +
			(month<10 ? '0' : '') + month + '-' +
			(day<10 ? '0' : '') + day;
		var desp = $('#headDesc2').val();
		var aa = 'Head'
		var hist = store.get('user');
		var l = hist.history.length;
		hist.history.splice( l-index, 1, { date : dat,
            area : aa,
            symptom : symp,
            description : desp
        });
		store.set('user', hist);
		$('#headText').text('Update successfully');
		editState = 0;
		$('#headDesc2').prop( "disabled", true );
		$('#search_head2').prop( "disabled", true );
		var data = [["Date", "Area", "Symptom", "Description"]] //headers
        var hist = store.get('user');
        for (i = hist.history.length-1; i >= 0; i--) {
            var dat = hist.history[i].date;
            var aa = hist.history[i].area;
            var sym = hist.history[i].symptom;
            var desc = hist.history[i].description;
            data.push([dat,aa,sym,desc]);
        }

		var HistoryTable = makeTable($('#historytbl'), data);
		$('#historytbl').find( 'tr' ).eq(index).addClass('highlighted');
		}
        //console.log(hist);
	});

	$("#heartUpdateBtn").click(function () {
		if (editState == 1)  {
		var index = $('#historytbl').find(".highlighted").index();
		var symp = clickedSymptom;
		var d = new Date();
		var month = d.getMonth()+1;
		var	day = d.getDate();
		var dat = d.getFullYear() + '-' +
			(month<10 ? '0' : '') + month + '-' +
			(day<10 ? '0' : '') + day;
		var desp = $('#heartDesc2').val();
		var aa = 'Heart'
		var hist = store.get('user');
		var l = hist.history.length;
		hist.history.splice( l-index, 1, { date : dat,
            area : aa,
            symptom : symp,
            description : desp
        });
		store.set('user', hist);
		$('#heartText').text('Update successfully');
		editState = 0;
		$('#heartDesc2').prop( "disabled", true );
		$('#search_heart2').prop( "disabled", true );
		var data = [["Date", "Area", "Symptom", "Description"]] //headers
        var hist = store.get('user');
        for (i = hist.history.length-1; i >= 0; i--) {
            var dat = hist.history[i].date;
            var aa = hist.history[i].area;
            var sym = hist.history[i].symptom;
            var desc = hist.history[i].description;
            data.push([dat,aa,sym,desc]);
        }

		var HistoryTable = makeTable($('#historytbl'), data);
		$('#historytbl').find( 'tr' ).eq(index).addClass('highlighted');
		}
        //console.log(hist);
	});

    $("#historytbl").on("click", "tr", function() {
		var selected = $(this).hasClass("highlighted");
		var index = $(this).index();
        if (index!=0) {
            $('#historytbl').find(".highlighted").removeClass('highlighted');
            if(!selected) {
				$(this).addClass("highlighted");
				hideHistoryPopup();
				hidePopup();
				clickedSymptom = 0;				
				$('#abdomenText').text('');
				$('#headText').text('');
				$('#heartText').text('');
				$('#historyMessage').text('');
				var hist = store.get('user');
				var l = hist.history.length;
				var recordArea = hist.history[l-index].area;
				var recordSymptom = hist.history[l-index].symptom;
				var recordDesc = hist.history[l-index].description;
				if (recordArea == 'Abdomen') {
					var position_x = 850;
   					var position_y = 400;
    				$('#abdomenEditFloat').css("left", position_x);
    				$('#abdomenEditFloat').css("top", position_y);
					$('#abdomenEditFloat').css("display", "block");
					$('#abdomenDesc2').val(recordDesc);
					if (recordSymptom == 'Normal') {
						getNormalAbdomen2();
						$('#abdomenEditFloat').find(".active").removeClass('active');
						$('#abdomen-normal2').addClass('active');
						clickedSymptom = "Normal";
					}
					else if (recordSymptom == 'Loss of Appetite') {
						getAbdomenHunger2();
						$('#abdomenEditFloat').find(".active").removeClass('active');
						$('#abdomen-hunger2').addClass('active');
						clickedSymptom = "Loss of Appetite";
					}
					else if (recordSymptom == 'Dehydration') {
						getAbdomenDehydration2();
						$('#abdomenEditFloat').find(".active").removeClass('active');
						$('#abdomen-dehydration2').addClass('active');
						clickedSymptom = "Dehydration";
					}
					else if (recordSymptom == 'Gas') {
						getAbdomenGas2();
						$('#abdomenEditFloat').find(".active").removeClass('active');
						$('#abdomen-gas2').addClass('active');
						clickedSymptom = "Gas";
					}
					else if (recordSymptom == 'Tender Abdomen') {
						getAbdomenTender2();
						$('#abdomenEditFloat').find(".active").removeClass('active');
						$('#abdomen-tender2').addClass('active');
						clickedSymptom = "Tender Abdomen";
					}
					else {
						clickedSymptom = recordSymptom;
						$('#search_abdomen2').val(recordSymptom);
						searchAbdomen2();									
						$('#abdomenEditFloat').find(".active").removeClass('active');						
					}
				} else if (recordArea == 'Heart') {
					var position_x = 850;
   					var position_y = 260;
    				$('#heartEditFloat').css("left", position_x);
    				$('#heartEditFloat').css("top", position_y);
					$('#heartEditFloat').css("display", "block");					
					$('#heartDesc2').val(recordDesc);
					if (recordSymptom == 'Normal') {
						getHeartNormal2();											
						$('#heartEditFloat').find(".active").removeClass('active');
						$('#heart-normal2').addClass('active');
						clickedSymptom = "Normal";
					}
					else if (recordSymptom == 'Heart Palpitations') {getHeartPalpitations2();											
						$('#heartEditFloat').find(".active").removeClass('active');						
						$('#heart-palpitation2').addClass('active');
						clickedSymptom = "Heart Palpitations";
					}
					else if (recordSymptom == 'Murmurs') {getHeartMurmurs2();											
						$('#heartEditFloat').find(".active").removeClass('active');
						$('#heart-murmur2').addClass('active');
						clickedSymptom = "Murmurs";
					}
					else if (recordSymptom == 'Chest Pain') {getHeartChestPain2();											
						$('#heartEditFloat').find(".active").removeClass('active');
						$('#heart-chest2').addClass('active');
						clickedSymptom = "Chest Pain";
					}
					else if (recordSymptom == 'Tightness or Pressure') {getHeartTightness2();											
						$('#heartEditFloat').find(".active").removeClass('active');
						$('#heart-tightness2').addClass('active');
						clickedSymptom = "Tightness or Pressure";
					}
					else {
						clickedSymptom = recordSymptom;
						$('#search_heart2').val(recordSymptom);
						searchHeart2();								
						$('#heartEditFloat').find(".active").removeClass('active');						
					}
					
				} else if (recordArea == 'Head') {
					var position_x = 800;
   					var position_y = 130;
    				$('#headEditFloat').css("left", position_x);
    				$('#headEditFloat').css("top", position_y);
					$('#headEditFloat').css("display", "block");					
					$('#headDesc2').val(recordDesc);
					if (recordSymptom == 'Normal') {
						getHeadNormal2();											
						$('#headEditFloat').find(".active").removeClass('active');
						$('#head-normal2').addClass('active');
						clickedSymptom = "Normal";
					}
					else if (recordSymptom == 'Dizziness') {
						getHeadDizziness2();											
						$('#headEditFloat').find(".active").removeClass('active');
						$('#head-dizzy2').addClass('active');
						clickedSymptom = "Dizziness";
					}
					else if (recordSymptom == 'Headache') {
						getHeadHeadache2();											
						$('#headEditFloat').find(".active").removeClass('active');
						$('#head-headache2').addClass('active');
						clickedSymptom = "Headache";
					}
					else if (recordSymptom == 'Changes in Vision') {
						getHeadVision2();											
						$('#headEditFloat').find(".active").removeClass('active');
						$('#head-vision2').addClass('active');
						clickedSymptom = "Changes in Vision";
					}
					else if (recordSymptom == 'Vomiting') {
						getHeadVomiting2();											
						$('#headEditFloat').find(".active").removeClass('active');
						$('#head-vomit2').addClass('active');
						clickedSymptom = "Vomiting";
					} 
					else {
						clickedSymptom = recordSymptom;
						$('#search_head2').val(recordSymptom);
						searchHead2();									
						$('#headEditFloat').find(".active").removeClass('active');						
					}

				} else alert("no such area");
			}
            else {
				$(this).removeClass("highlighted");
				hideHistoryPopup();
				$('#abdomenText').text('');
				$('#headText').text('');
				$('#heartText').text('');
			}
        }
		//for update popup menu
		
    });

    $(document).ready(function() {
        var data = [["Date", "Area", "Symptom", "Description"]] //headers
        var hist = store.get('user');
        for (i = hist.history.length-1; i >= 0; i--) {
            var dat = hist.history[i].date;
            var aa = hist.history[i].area;
            var sym = hist.history[i].symptom;
            var desc = hist.history[i].description;
            data.push([dat,aa,sym,desc]);
        }

        var HistoryTable = makeTable($('#historytbl'), data);
    });
});

function makeTable(container, data) {
    var table = $("<table/>").addClass('table');
    $.each(data, function(rowIndex, r) {
        var row = $("<tr/>");
        $.each(r, function(colIndex, c) { 
            if (rowIndex == 0) {
                row.append($("<th/>").text(c));
            } else {
            row.append($("<td/>").text(c));
            }
        });
        table.append(row);
    });
    return container.html(table);
}

function hideDiv(){
	if ($("#abdomenFloat").css("display","block")){
        $("#abdomenFloat").css("display","none");
    }
    if ($("#heartFloat").css("display","block")){
        $("#heartFloat").css("display","none");
    }
    if ($("#headFloat").css("display","block")){
        $("#headFloat").css("display","none");
    }
    hideHistoryPopup();
}

// $("#body_img").mapster({
//     fillOpacity: 0.3,
//     fillColor: 'ff0000',
//     // render_highlight: {
//     //     fillColor: "2aff00",
//     //     stroke: true
//     // },
//     // render_select:{
//     //     fillColor: "ff000c",
//     //     stroke: false
//     // },
//     fadeInterval: 50,
//     mapKey: "data-key",
//     areas: [
//         {
//             key: "head",
//             selected: true
//         },
//         {
//             key: "heart",
//             selected: true
//         },
//         {
//             key: "abdomen",
//             selected: true
//         }
//     ]
// });

function clickShowDivAbdomen(obj){
    // var position_x = obj.getBoundingClientRect().left+document.body.scrollLeft+135;
    // var position_y = obj.getBoundingClientRect().top+document.body.scrollTop;
    var position_x = 850;
    var position_y = 400;
    $('#abdomenFloat').css("left", position_x);
    $('#abdomenFloat').css("top", position_y);
    $('#abdomenFloat').css("display", "block");

    $("#collapseTable").collapse('hide');
    if ($("#heartFloat").css("display","block")){
        $("#heartFloat").css("display","none");
    }
    if ($("#headFloat").css("display","block")){
        $("#headFloat").css("display","none");
    }
}
function clickShowDivHeart(obj){
    // var position_x = obj.getBoundingClientRect().left+document.body.scrollLeft+135;
    // var position_y = obj.getBoundingClientRect().top+document.body.scrollTop;
    var position_x = 850;
    var position_y = 260;
    $('#heartFloat').css("left", position_x);
    $('#heartFloat').css("top", position_y);
    $('#heartFloat').css("display", "block");

    $("#collapseTable").collapse('hide');
    if ($("#abdomenFloat").css("display","block")){
        $("#abdomenFloat").css("display","none");
    }
    if ($("#headFloat").css("display","block")){
        $("#headFloat").css("display","none");
    }

}

function clickShowDivHead(){
    // var position_x = obj.getBoundingClientRect().left+document.body.scrollLeft+135;
    // var position_y = obj.getBoundingClientRect().top+document.body.scrollTop;
    var position_x = 800;
    var position_y = 130;
    $("#headFloat").css("left", position_x);
    $("#headFloat").css("top", position_y);
    $("#headFloat").css("display", "block");

    $("#collapseTable").collapse('hide');
    if ($("#abdomenFloat").css("display","block")){
        $("#abdomenFloat").css("display","none");
    }
    if ($("#heartFloat").css("display","block")){
        $("#heartFloat").css("display","none");
    }

}

function clickHideDiv(obj){
    $(obj).parent().parent().parent().parent().css("display", "none");
    // $("#" + id.toString()).attr("display", "none");
}

function hideHistoryPopup(){
    $('#abdomenEditFloat').css("display", "none");
    $('#headEditFloat').css("display", "none");
	$('#heartEditFloat').css("display", "none");
}
function hidePopup(){
    $('#abdomenFloat').css("display", "none");
    $('#headFloat').css("display", "none");
    $('#heartFloat').css("display", "none");
}