var main = function(){
	//reset();
	//load();
	signIn();
	//save();
};

/*Sign in Sheet*/
var signIn = function(){
	//load();
	$('#playerNameForm').submit(function(){
		load();
		event.preventDefault();
		
		list.push({name:$('input:first').val() , role: ""});
		
		//count+=1;
		save();
		load();
		assignRole();
		console.log(list[count-1].name + " is a " + list[count-1].role);
		
		location.reload();
		save();
		load();
	});
};

/*Assign randomized role to Player*/
var assignRole = function(){
	load();
	randIndex=Math.floor(Math.random()*(roleList.length));
	save();
	list[count].role=roleList[randIndex];
	roleList.splice(randIndex);
	count+=1;
	save();
	load();
}

/*Local Storage Functions*/
var save = function(){
	localStorage.setItem("list", JSON.stringify(list));
	localStorage.setItem("dayLength", JSON.stringify(dayLength));
	localStorage.setItem("pNum", JSON.stringify(pNum));
	localStorage.setItem("pName", JSON.stringify(pName));
	localStorage.setItem("tempRole", JSON.stringify(tempRole));
	localStorage.setItem("quick", JSON.stringify(quick));
	localStorage.setItem("custom", JSON.stringify(custom));
	localStorage.setItem("customResult", JSON.stringify(customResult));
	localStorage.setItem("roleNumList", JSON.stringify(roleNumList));
	localStorage.setItem("tempList", JSON.stringify(tempList));
	localStorage.setItem("tempPerson", JSON.stringify(tempPerson));
	localStorage.setItem("count", JSON.stringify(count));
	localStorage.setItem("roleList", JSON.stringify(roleList));
	localStorage.setItem("randIndex", JSON.stringify(randIndex));
}
var load = function(){
	list=JSON.parse(localStorage.getItem('list'));
	dayLength=parseInt(JSON.parse(localStorage.getItem('dayLength')));
	pNum=parseInt(JSON.parse(localStorage.getItem('pNum')));
	pName=JSON.parse(localStorage.getItem('pName'));
	tempRole=JSON.parse(localStorage.getItem('tempRole'));
	quick=JSON.parse(localStorage.getItem('quick'));
	custom=JSON.parse(localStorage.getItem('custom'));
	customResult=JSON.parse(localStorage.getItem('customResult'));
	roleNumList=JSON.parse(localStorage.getItem('roleNumList'));
	tempList=JSON.parse(localStorage.getItem('tempList'));
	tempPerson=JSON.parse(localStorage.getItem('tempPerson'));
	count=JSON.parse(localStorage.getItem('count'));
	roleList=JSON.parse(localStorage.getItem('roleList'));
	randIndex=parseInt(JSON.parse(localStorage.getItem('randIndex')));
}

var reset = function(){
	localStorage.clear();
	list=[{name:"",role:""}];
	dayLength=0;
	pNum=0;
	pName="";
	tempRole="";
	quick=false;
	custom=true;
	customResult=Object();
	roleNumList=[];
	tempList=[];
	tempPerson = {};
	count=0;
	roleList=[];
	randIndex=0;
	save();
	location.reload();
}

var list=[{name:"",role:""}];
var dayLength=0;
var pNum=0;
var pName="";
var tempRole="";
var quick=false;
var custom=true;
var customResult=Object();
var roleNumList=[];
var tempList=[];
var tempPerson = {};
var count=0;
var roleList=[];
var randIndex=0;

$(document).ready(main);