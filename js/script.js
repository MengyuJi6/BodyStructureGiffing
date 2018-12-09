var api_key = "kZN6VfSXRAkZCOVr0G99mH3q84rdRY7T"
var clickedSymptom = 0;

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
		clickedSymptom = "Normal";
	});
	$('#abdomen-hunger').click(function() {
		getAbdomenHunger();
		clickedSymptom = "Loss of Appetite";
	});
	$('#abdomen-dehydration').click(function() {
		getAbdomenDehydration();
		clickedSymptom = "Dehydration";
	});
	$('#abdomen-gas').click(function() {
		getAbdomenGas();
		clickedSymptom = "Gas";
	});
	$('#abdomen-tender').click(function() {
		getAbdomenTender();
		clickedSymptom = "Tender Abdomen";
	});
	$('#head-normal').click(function() {
		getHeadNormal();
		clickedSymptom = "Normal";
	});
	$('#head-dizzy').click(function() {
		getHeadDizziness();
		clickedSymptom = "Dizziness";
	});
	$('#head-headache').click(function() {
		getHeadHeadache();
		clickedSymptom = "Headache";
	});
	$('#head-vision').click(function() {
		getHeadVision();
		clickedSymptom = "Changes in Vision";
	});
	$('#head-vomit').click(function() {
		getHeadVomiting();
		clickedSymptom = "Vomiting";
	});
	$('#heart-normal').click(function() {
		getHeartNormal();
		clickedSymptom = "Normal";
	});
	$('#heart-palpitation').click(function() {
		getHeartPalpitations();
		clickedSymptom = "Heart Palpitations";
	});
	$('#heart-murmur').click(function() {
		getHeartMurmurs();
		clickedSymptom = "Murmurs";
	});
	$('#heart-chest').click(function() {
		getHeartChestPain();
		clickedSymptom = "Chest Pain";
	});
	$('#heart-tightness').click(function() {
		getHeartTightness();
		clickedSymptom = "Tightness or Pressure";
	});
});

//history function
$(function () {
    $("#updatebtn").click(function () {        
        var data = [["Date", "Area", "Symptom", "Description"]] //headers
        var hist = store.get('user');
        for (i = 0; i < hist.history.length; i++) {
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
            $('#historytbl').find('.highlighted').remove();
            //console.log(index);
            var hist = store.get('user');
            hist.history.splice( index-1, 1);
            store.set('user', hist);
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

		}
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
			
		}
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
			
		}
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
	
	$("#saveChangeBtn").click(function () {
		var index = $('#historytbl').find(".highlighted").index();
        var symp = $('#editSymptom').val();
        var dat = $('#editDate').val();
		var desp = $('#editDesc').val();
		var aa = $('#editArea').val();
		var hist = store.get('user');
		hist.history.splice( index-1, 1, { date : dat,
            area : aa,
            symptom : symp,
            description : desp
        });
		store.set('user', hist);
		clickHideDiv(this);
		var data = [["Date", "Area", "Symptom", "Description"]] //headers
        var hist = store.get('user');
        for (i = 0; i < hist.history.length; i++) {
            var dat = hist.history[i].date;
            var aa = hist.history[i].area;
            var sym = hist.history[i].symptom;
            var desc = hist.history[i].description;
            data.push([dat,aa,sym,desc]);
        }

        var HistoryTable = makeTable($('#historytbl'), data);
        //console.log(hist);
	});

    $("#historytbl").on("click", "tr", function() {
        var selected = $(this).hasClass("highlighted");
        if ($(this).index()!=0) {
            $('#historytbl').find(".highlighted").removeClass('highlighted');
            if(!selected) $(this).addClass("highlighted");
            else $(this).removeClass("highlighted");
        }
        //for update popup menu
        
    });

    $(document).ready(function() {
        var data = [["Date", "Area", "Symptom", "Description"]] //headers
        var hist = store.get('user');
        for (i = 0; i < hist.history.length; i++) {
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