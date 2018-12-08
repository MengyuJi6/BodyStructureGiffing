function clickShowDiv(obj) { 
	var position_x = obj.getBoundingClientRect().left+document.body.scrollLeft+135; 
	var position_y = obj.getBoundingClientRect().top+document.body.scrollTop; 
	$(obj).next().css("left", position_x); 
	$(obj).next().css("top", position_y); 
	$(obj).next().css("display", "block"); 
}
