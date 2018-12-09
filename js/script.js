var api_key = "kZN6VfSXRAkZCOVr0G99mH3q84rdRY7T"

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

function getHeadNormal(){
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

function getHeadHeadache(){
	var ts = new Date().getTime();
	var hash = md5(ts+api_key).toString();
	var url = 'https://api.giphy.com/v1/gifs';
	var id1 = 'l378aiPPFAGEsetIkp';
	$.getJSON(url,{
		ts:ts,
		apikey:api_key,
		hash:hash,
		ids:id1,
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

$(document).ready(function () {
	$('#abdomen-normal').click(function() {
		getNormalAbdomen();
	});
});