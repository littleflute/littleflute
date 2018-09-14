var d 	= bl$("id1234");
d.v2  	= blo0.blDiv(d,d.id + "v2", "v2_t.js_ v0.0.2 ",blGrey[1]);

var v = document.getElementsByTagName("video"); var p = v[0]; 
p.controls = false; 

var b0 		=  blo0.blBtn(d.v2,"idBtn_controls", "controls", "blue");
b0.onclick = function(){  p.controls = ! p.controls; }

var b1		=  blo0.blBtn(d.v2,"idBtn_play","play","blue");
b1.onclick = function(){  p.play(); }

var b2		=  blo0.blBtn( d.v2,"idBtn_pause","pause","gray");
b2.onclick = function(){  p.pause(); }