$("#body_img").mapster({
    fillOpacity: 0.3,
    fillColor: 'ff0000',
    // render_highlight: {
    //     fillColor: "2aff00",
    //     stroke: true
    // },
    // render_select:{
    //     fillColor: "ff000c",
    //     stroke: false
    // },
    fadeInterval: 50,
    mapKey: "data-key",
    areas: [
        {
            key: "head",
            selected: true
        },
        {
            key: "heart",
            selected: true
        },
        {
            key: "abdomen",
            selected: true
        }
    ]
});

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
    var position_x = 900;
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