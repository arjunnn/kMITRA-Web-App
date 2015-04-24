window.current_url = 'http://kmit.in/emagazine/article/periscope-vs-meerkat/?json=1';
$.getJSON(current_url, function(data) {
	window.globalData = data;
	document.getElementById("title").innerHTML=data.post.title;
	document.getElementById("byline").innerHTML='&mdash; '+data.post.author.name;
	document.getElementById("content").innerHTML=data.post.content;
});
function navToPrevious(){
current_url = globalData.previous_url+'?json=1';
$.getJSON(current_url, function(data) {
	window.globalData = data;
	document.getElementById("title").innerHTML=data.post.title;
	document.getElementById("byline").innerHTML='&mdash; '+data.post.author.name;
	document.getElementById("content").innerHTML=data.post.content;
    window.scrollTo(0, 0);
});
current_url=globalData.previous_url+'?json=1';
}
function navToNext(){
if(globalData.next_url){
current_url = globalData.next_url+'?json=1';
$.getJSON(current_url, function(data) {
	window.globalData = data;
	document.getElementById("title").innerHTML=data.post.title;
	document.getElementById("byline").innerHTML='&mdash; '+data.post.author.name;
	document.getElementById("content").innerHTML=data.post.content;
    window.scrollTo(0, 0);

});
current_url=globalData.next_url+'?json=1';
}
else{alert("you have read all the articles!");}
}
