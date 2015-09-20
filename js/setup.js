var main = function(){
	
};

/*Game setup*/

/*Sign in Sheet*/
var signIn = function(){
	
};

/*Local Storage Functions*/
var load = function(){
	list=JSON.parse(localStorage.getItem('list'));
}
var save = function(){
	localStorage.setItem("list", JSON.stringify(list));
}
var reset = function(){
	localStorage.clear();
	list=[];
	save();
	location.reload();
}

/*Initialize Variables*/
var list=[];
var dayLength;
var pNum;
var pName;
var role;

$(document).ready(main);