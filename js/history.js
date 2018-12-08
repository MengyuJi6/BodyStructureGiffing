store.set('user', 
{ name:'Marcus',
  password:'123456',
  history: [
      {
          date: '2018-12-5',
          area: 'head',
          symptom: 'trauma',
          description: ''
      }
  ]
});
var hist = store.get('user');
hist.history.push({
    date: '2018-12-6',
    area: 'abdomen',
    symptom: 'gas',
    description: 'whatever'
});
hist.history.push({
    date: '2018-12-7',
    area: 'heart',
    symptom: 'murmurs',
    description: 'whichever'
});
/* console.log(hist.history);
hist.history.splice( 1, 1);
console.log(hist.history); */

store.set('user', hist);
console.log(store.get('user').history[1]);

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
        $('#historytbl').find('.highlighted').remove();
        var hist = store.get('user');
        hist.history.splice( index-1, 1);
        store.set('user', hist);
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
    var table = $("<table/>").addClass('CSSTableGenerator');
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