var main = function(){
	
};

for(var x=0;x<roleData.length;x++){
	if(roleData[x].pName === "Seer"){
		//display description
		if(roleData[x].alive == true){
			//display alive
		} else{
			//display dead
		}
		for(var y=0;y<roleData.length;y++){
			if(roleData[x].alive == true){
				//append Name Target button
			}
			$('#buttonClickID').click(function(){
				//display role team (villager or Werewolf)
			});
		}
	} else if(roleData[x].pName === "P.I."){
		//display description
		if(roleData[x].alive == true){
			//display alive
		} else{
			//display dead
		}
		for(var y=0;y<roleData.length;y++){
			if(roleData[x].alive == true){
				//append Name Target button
			}
			$('#buttonClickID').click(function(){
				//display role team (villager or Werewolf)
			});
		}
	} else if(roleData[x].pName === "Aura Seer"){
		//display description
		if(roleData[x].alive == true){
			//display alive
		} else{
			//display dead
		}
		for(var y=0;y<roleData.length;y++){
			if(roleData[x].alive == true){
				//append Name Target button
			}
			$('#buttonClickID').click(function(){
				if(!(/*Villager || Werewolf*/)){
					//aura present
				}
			});
		}
	} else if(roleData[x].pName === "Sorceress"){
		//display description
		if(roleData[x].alive == true){
			//display alive
		} else{
			//display dead
		}
		for(var y=0;y<roleData.length;y++){
			if(roleData[x].alive == true){
				//append Name Target button
			}
			$('#buttonClickID').click(function(){
				//display role team (villager or Werewolf)
			});
		}
	} else if(roleData[x].pName === "Troublemaker"){
		//display description
		if(roleData[x].alive == true){
			//display alive
		} else{
			//display dead
		}
		for(var y=0;y<roleData.length;y++){
			if(roleData[x].alive == true){
				//append Name Target button
			}
			$('#buttonClickID').click(function(){
				if(/*target is seer*/){
					//display true
				} else{
					//display false
				}
			});
		}
	} else if(roleData[x].pName === "Body Guard"){
		//display description
		if(roleData[x].alive == true){
			//display alive
		} else{
			//display dead
		}
		for(var y=0;y<roleData.length;y++){
			if(roleData[x].alive == true){
				//append Name Target button
			}
			$('#buttonClickID').click(function(){
				//set target to immune
				//protected="name of target"
				//remove all immunities come day time
			});
		}
	} else if(roleData[x].pName === "Wolves"){
		//display description
		if(roleData[x].alive == true){
			//display alive
		} else{
			//display dead
		}
		for(var y=0;y<roleData.length;y++){
			if(roleData[x].alive == true){
				//append Name Target button
			}
			$('#buttonClickID').click(function(){
				if(/*target name != protected || target is vampire*/){
					//wolf-target status = dead
				}
			});
		}
	} else if(roleData[x].pName === "Vampires"){
		//display description
		if(roleData[x].alive == true){
			//display alive
		} else{
			//display dead
		}
		for(var y=0;y<roleData.length;y++){
			if(roleData[x].alive == true){
				//append Name Target button
			}
			$('#buttonClickID').click(function(){
				//mark target as bitten
			});
		}
	} else if(roleData[x].pName === "Witch"){
		//display description
		if(roleData[x].alive == true){
			//display alive
		} else{
			//display dead
		}
		for(var y=0;y<roleData.length;y++){
			if(roleData[x].alive == true){
				//if wolf-target, display save or no buttons
			}
			$('#buttonClickID').click(function(){
				//display role team (villager or Werewolf)
			});
			if(/*button no chosen*/){
				//display options for killing or no
			}
			//need localstorage of witch ammo
		}
	} else if(roleData[x].pName === "Priest"){
		//display description
		if(roleData[x].alive == true){
			//display alive
		} else{
			//display dead
		}
		for(var y=0;y<roleData.length;y++){
			if(roleData[x].alive == true){
				//append Name Target button
			}
			$('#buttonClickID').click(function(){
				//target is protected from both werewolf and nomination
			});
		}
	} else if(roleData[x].pName === "Old Hag"){
		//display description
		if(roleData[x].alive == true){
			//display alive
		} else{
			//display dead
		}
		for(var y=0;y<roleData.length;y++){
			if(roleData[x].alive == true){
				//append Name Target button
			}
			$('#buttonClickID').click(function(){
				//target is marked as must leave
			});
		}
	} else if(roleData[x].pName === "Cult Leader"){
		//display description
		if(roleData[x].alive == true){
			//display alive
		} else{
			//display dead
		}
		for(var y=0;y<roleData.length;y++){
			if(roleData[x].alive == true){
				//append Name Target button
			}
			$('#buttonClickID').click(function(){
				//target joins cult
			});
		}
	}
}


var list=localStorage.getItem('list');
var roleData=[];
$(document).ready(main);