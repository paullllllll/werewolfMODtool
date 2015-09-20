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
	$('#reset').click(function(){
		reset();
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
			location.reload();
		});
		
		$('#clockForm').submit(function(){		//retrieve day length
			load();
			dayLength=parseInt($(this).serializeArray()[0].value) * 60 + parseInt($(this).serializeArray()[1].value);	//convert into seconds
			save();
			load();
			console.log(dayLength);
			event.preventDefault();
			location.reload();
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
			location.reload();
		});
		
		compileRoles();
		custom=false;
		save();
	}else if(quick){	//quick setup functions-------------------
		
	}
};

/*Compile list of roles from roleNumList into roleList*/
var compileRoles = function(){
	load();
	for(i=0;i<roleNumList.length;i++){
		if(roleNumList[i].name === 'WwQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Werewolf');}
		} else if(roleNumList[i].name === 'LWQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Lone Wolf');}
		} else if(roleNumList[i].name === 'MinionQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Minion');}
		} else if(roleNumList[i].name === 'SorcQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Sorceress');}
		} else if(roleNumList[i].name === 'WwCubQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Werewolf Cub');}
		} else if(roleNumList[i].name === 'ApSQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Apprentice Seer');}
		} else if(roleNumList[i].name === 'AuSQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Aura Seer');}
		} else if(roleNumList[i].name === 'BGQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Body Guard');}
		} else if(roleNumList[i].name === 'CupidQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Cupid');}
		} else if(roleNumList[i].name === 'DisQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Diseased');}
		} else if(roleNumList[i].name === 'DopQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('DoppleGaenger');}
		} else if(roleNumList[i].name === 'DrunkQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Drunk');}
		} else if(roleNumList[i].name === 'GhostQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Ghost');}
		} else if(roleNumList[i].name === 'HuntQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Hunter');}
		} else if(roleNumList[i].name === 'LycanQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Lycan');}
		} else if(roleNumList[i].name === 'MasonQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Mason');}
		} else if(roleNumList[i].name === 'MayorQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Mayor');}
		} else if(roleNumList[i].name === 'OHQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Old Hag');}
		} else if(roleNumList[i].name === 'PIQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('P.I.');}
		} else if(roleNumList[i].name === 'PacifistQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Pacifist');}
		} else if(roleNumList[i].name === 'PriestQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Priest');}
		} else if(roleNumList[i].name === 'PrinceQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Prince');}
		} else if(roleNumList[i].name === 'SeerQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Seer');}
		} else if(roleNumList[i].name === 'ScQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Spellcaster');}
		} else if(roleNumList[i].name === 'TGQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Tough Guy');}
		} else if(roleNumList[i].name === 'TmQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Troublemaker');}
		} else if(roleNumList[i].name === 'VilIdQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Village Idiot');}
		} else if(roleNumList[i].name === 'VilQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Villager');}
		} else if(roleNumList[i].name === 'WitchQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Witch');}
		} else if(roleNumList[i].name === 'CLQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Cult Leader');}
		} else if(roleNumList[i].name === 'HoodQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Hoodlum');}
		} else if(roleNumList[i].name === 'TanQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Tanner');}
		} else if(roleNumList[i].name === 'VampQuantity'){
			for(var j=0;j<roleNumList[i].value;j++){roleList.push('Vampire');}
		}
	}
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
	list=[];
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
var tempList=[];
var tempPerson = {};
var count=0;
var roleList=[];
var randIndex=0;


$(document).ready(main);