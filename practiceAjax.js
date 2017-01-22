document.addEventListener("DOMContentLoaded", function(){
	console.log("DOM Loaded...");
	
	var position_tab = document.querySelector("#position");
	var friend_tab = document.querySelector("#friend");
	var theme_tab = document.querySelector("#theme");
	var news_tab = document.querySelector("#news");

	position_tab.addEventListener("click", changeTab);
	friend_tab.addEventListener("click", changeTab);
	theme_tab.addEventListener("click", changeTab);
	news_tab.addEventListener("click", changeTab);

	console.log("Page Loading complete : DOM - Complete");
});

function changeTab(){
	document.querySelector(".selectedTab").className = "tab";
	this.className = "tab selectedTab";
	requestAjaxData(this.id);
}

var selectedSection;
var sectionTitle = document.querySelector(".myName");
var sectionBody = document.querySelector(".myDesc");

function requestAjaxData(tab){
	var url;

	switch(tab){
		case "position":
		url = "http://jsonplaceholder.typicode.com/posts/1";
		break;
		case "friend":
		url = "http://jsonplaceholder.typicode.com/posts/2";
		break;
		case "theme":
		url = "http://jsonplaceholder.typicode.com/posts/3";
		break;
		case "news":
		url = "http://jsonplaceholder.typicode.com/posts/4";
		break;
	}

	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
	oReq.open("GET", url);
	oReq.send();
}

function reqListener(){
	var restxt = this.responseText;
		var res = JSON.parse(restxt);
	  	sectionTitle.innerHTML = res.title;
	  	sectionBody.innerHTML = res.body;
}