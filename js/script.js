var api_key = "kZN6VfSXRAkZCOVr0G99mH3q84rdRY7T"

/* var hist = store.get('user');
hist.history.push({
    date: '2018-12-06',
    area: 'abdomen',
    symptom: 'gas',
    description: 'whatever'
});
hist.history.push({
    date: '2018-12-07',
    area: 'heart',
    symptom: 'murmurs',
    description: 'whichever'
}); */
/* console.log(hist.history);
hist.history.splice( 1, 1);
console.log(hist.history); */

//store.set('user', hist);
//console.log(store.get('user').history[1]);

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

    $("#savebtn").click(function () {
        var symp = $('#symptom option:selected').val();
        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();
        var dt = d.getFullYear() + '-' +
            (month<10 ? '0' : '') + month + '-' +
            (day<10 ? '0' : '') + day;
        var desp = $('textarea#desctext').val();
        var hist = store.get('user');        
        hist.history.push({ date : dt,
            area : 'abdomen',
            symptom : symp,
            description : desp
        });
        store.set('user', hist);
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