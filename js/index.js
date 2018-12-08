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

function clickShowDiv(obj){
    var position_x = obj.getBoundingClientRect().left+document.body.scrollLeft+135;
    var position_y = obj.getBoundingClientRect().top+document.body.scrollTop;
    $(obj).next().css("left", position_x);
    $(obj).next().css("top", position_y);
    $(obj).next().css("display", "block");
}
function clickHideDiv(obj){
    $(obj).parent().parent().parent().parent().css("display", "none");
    // $("#" + id.toString()).attr("display", "none");
}