$(function () {
    var abdomenTags = [
      "Abdominal pain",
      "Bloating",
      "Cramp",
      "Fistula",
      "Hernia",
      "Vomit"
    ];
    $( "#search_abdomen" ).autocomplete({
      source: abdomenTags,
      });

    var headTags = [
       "Bleeding from ear",
       "memory loss",
       "Nausea",
       "Numbness",
       "Paralysis",
       "Speech difficulty",
       "Vomit"
    ];
    $("#search_head").autocomplete({
        source:headTags,
    })

    var heartTags = [
       "Chest discomfort",
       "Dizzy",
       "Exhausted",
       "Heartburn",
       "Indigestion",
       "Nausea",
       "Stomach pain"
    ];
    $("#search_heart").autocomplete({
        source:heartTags,
    })

});

