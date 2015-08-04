//window.current_url = 'http://kmit.in/emagazine/article/class-apart/?json=1';
window.current_url = 'http://kmit.in/emagazine/article/scion-of-ikshvaku-review/?json=1';
$.getJSON(current_url, function(data) {
	window.globalData = data;
	document.getElementById("title").innerHTML=data.post.title;
	document.getElementById("byline").innerHTML='&mdash; '+data.post.author.name;
	document.getElementById("content").innerHTML=data.post.content;
});
function navToPrevious(){
	window.scrollTo(0, 0);
	document.getElementById("content").innerHTML='<p style="font-size:2em;text-align:center;">Loading...<br/>Please wait.</p>';
	current_url = globalData.previous_url+'?json=1';
	$.getJSON(current_url, function(data) {
		window.globalData = data;
		document.getElementById("title").innerHTML=data.post.title;
		document.getElementById("byline").innerHTML='&mdash; '+data.post.author.name;
		document.getElementById("content").innerHTML=data.post.content;
	});
current_url=globalData.previous_url+'?json=1';
}
function navToNext(){
	window.scrollTo(0, 0);
	document.getElementById("content").innerHTML='<p style="font-size:2em;text-align:center;">Loading...<br/>Please wait.</p>';
	current_url = globalData.next_url+'?json=1';
	$.getJSON(current_url, function(data) {
		window.globalData = data;
		document.getElementById("title").innerHTML=data.post.title;
		document.getElementById("byline").innerHTML='&mdash; '+data.post.author.name;
		document.getElementById("content").innerHTML=data.post.content;
	});
	current_url=globalData.next_url+'?json=1';
}

