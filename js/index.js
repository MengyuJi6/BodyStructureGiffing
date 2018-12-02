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

function showFloatWindow(organ){
    $("#"+organ).attr("border", "solid");
}
