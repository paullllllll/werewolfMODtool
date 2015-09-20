var main = function(){
	//reset();
	setup();
};

/*Game setup*/
var setup = function(){
	$('#quickSetup').click(function(){
		quick=true;
		custom=false;
	});
	$('#customSetup').click(function(){
		quick=false;
		custom=true;
	});
	
	if(custom){			//custom setup functions-----------------
		load();
		$('#playerNumForm').submit(function(event){
			load();
			pNum=$('input:first').val();
			save();
			//$('#playerNumForm').toggleClass('.hidden');
			load();
			event.preventDefault();
			console.log('player num submitted: '+pNum); //debug player num submission
		});
		
		
		$('#rolesForm').submit(function(){		//compile role list
			load();
			roleNumList=$(this).serializeArray();
			save();
			load();
			for(var i=0; i<roleNumList.length;i++){ //debug role list values
				console.log(roleNumList[i]);
			}
			event.preventDefault();
		});
		
		//$('#)
		
		save();
	}else if(quick){	//quick setup functions-------------------
		
	}
};

/*Sign in Sheet*/
var signIn = function(){
	
};

/*Local Storage Functions*/
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
}
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
}
var reset = function(){
	localStorage.clear();
	list=[];
	save();
	location.reload();
}

/*Initialize Variables*/

var list=[];
var dayLength=0;
var pNum=0;
var pName="";
var tempRole="";
var quick=false;
var custom=true;
var customResult=Object();
var roleNumList=[];

$(document).ready(main);