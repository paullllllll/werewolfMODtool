/*
Werewolf Gameplay Javascript file
Written for WerewolfModTool                         https://api.myjson.com/bins/1rn94
By Team Jacob
*/

function getData(callback){
    var data;
	$.ajax({
        url: "https://api.myjson.com/bins/1rn94",
		dataType: 'json',
		success: function(data){
            //console.log(JSON.stringify(data)); //If not sure whether myjson.com is working, uncomment this line and run the page
            callback(data);}
    });
}

function run(){

    getData(function(data){

        var consolidate = [];
        var i,j;
        var wake, vImpact, desc;

        var list=JSON.parse(localStorage.getItem('list'));
        var pNum = parseInt(JSON.parse(localStorage.getItem('pNum')));
        var dayLength = parseInt(JSON.parse(localStorage.getItem('dayLength')));

        //placeholder list-----
        list = [];
        pNum = 9;
        dayLength = 360;
        list.push({'pName':'jonny', 'role':'Ghost'});
        list.push({'pName':'paul', 'role':'Body Guard'});
        list.push({'pName':'zach', 'role':'Seer'});
        list.push({'pName':'Asdf', 'role':'Werewolf'});
        list.push({'pName':'Qwer', 'role':'Werewolf'});
        //---------------------

        for(i=0; i<list.length; i++){
            for(j=0; j<data.roles.length; j++){
                if(list[i].role == data.roles[j].rName){
                    wake = data.roles[j].wake;
                    vImpact = data.roles[j].villageImpact;
                    desc = data.roles[j].desc;
                }
            }
            consolidate.push({ "pId":i, "pName": list[i].pName, "role": list[i].role, "wake" : wake, "vImpact":vImpact, "desc":desc});
        }

        firstNightStart(consolidate, data);

    });
}

function firstNightStart(data, allRoleData){

    var firstNightOrder =[];
    var i;
    var firstNightPlayers =[];
    var firstNightBool = [false,false,false,false,false,false,false,false];
    var day = false;

    firstNightOrder.push("Ghost");
    firstNightOrder.push("Hoodlum");
    firstNightOrder.push("Doppelgaenger");
    firstNightOrder.push("Cupid");
    firstNightOrder.push("Mason");
    firstNightOrder.push("Seer");
    firstNightOrder.push("Werewolf");
    firstNightOrder.push("Minion");

    for(i=0; i<data.length; i++){
        if(firstNightOrder.indexOf(data[i].role)>=0){
            firstNightPlayers.push(data[i]);
        }
    }
    console.log(JSON.stringify(firstNightPlayers));




    for(i=0; i<firstNightPlayers.length; i++){
        if(firstNightPlayers[i].role == 'Ghost'){
            console.log("\nits a Ghost\n");
            firstNightBool[0]=true;
        }
    }
    for(i=0; i<firstNightPlayers.length; i++){
        if(firstNightPlayers[i].role == 'Hoodlum'){
            console.log("\nits a Hoodlum\n");
            firstNightBool[1]=true;
        }
    }
    for(i=0; i<firstNightPlayers.length; i++){
        if(firstNightPlayers[i].role == 'Doppelgaenger'){
            console.log("\nits a Doppelgaenger\n");
            firstNightBool[2]=true;
        }
    }
    for(i=0; i<firstNightPlayers.length; i++){
        if(firstNightPlayers[i].role == 'Cupid'){
            console.log("\nits a Cupid\n");
            firstNightBool[3]=true;
        }
    }
    for(i=0; i<firstNightPlayers.length; i++){
        if(firstNightPlayers[i].role == 'Mason'){
            console.log("\nits a Mason\n");
            firstNightBool[4]=true;
        }
    }
    for(i=0; i<firstNightPlayers.length; i++){
        if(firstNightPlayers[i].role == 'Seer'){
            console.log("\nits a Seer\n");
            firstNightBool[5]=true;
        }
    }
    for(i=0; i<firstNightPlayers.length; i++){
        if(firstNightPlayers[i].role == 'Werewolf'){
            console.log("\nits a Werewolf\n");
            firstNightBool[6]=true;
        }
    }
    for(i=0; i<firstNightPlayers.length; i++){
        if(firstNightPlayers[i].role == 'Minion'){
            console.log("\nits a Minion\n");
            firstNightBool[7]=true;
        }
    }

    $("#target").click(function(){
        if(firstNightBool !== null){
            $("#target").text("Next Group");
            // console.log("gothere   ");
                if(firstNightBool[0]==true){
                    $("#main").text("Ghost's Turn - Ghost's Description: "+allRoleData.roles[8].desc);
                    firstNightBool[0]=false;
                }
                else if(firstNightBool[1]==true){
                    $("#main").text("Hoodlum's Turn - Ghost's Description: "+allRoleData.roles[8].desc);
                    firstNightBool[1]=false;
                }
                else if(firstNightBool[2]==true){
                    $("#main").text("Doppelgaenger's Turn - Ghost's Description: "+allRoleData.roles[8].desc);
                    firstNightBool[2]=false;
                }
                else if(firstNightBool[3]==true){
                    $("#main").text("Cupid's Turn - Ghost's Description: "+allRoleData.roles[8].desc);
                    firstNightBool[3]=false;
                }
                else if(firstNightBool[4]==true){
                    $("#main").text("Mason's Turn - Ghost's Description: "+allRoleData.roles[8].desc);
                    firstNightBool[4]=false;
                }
                else if(firstNightBool[5]==true){
                    $("#main").text("Seer's Turn - Ghost's Description: "+allRoleData.roles[8].desc);
                    firstNightBool[5]=false;
                }
                else if(firstNightBool[6]==true){
                    $("#main").text("Werewolf's Turn - Ghost's Description: "+allRoleData.roles[8].desc);
                    firstNightBool[6]=false;
                }
                else if(firstNightBool[7]==true){
                    $("#main").text("Minion's Turn - Ghost's Description: "+allRoleData.roles[8].desc);
                    firstNightBool[7]=false;
                }
                else {;}
        }
        else{

            console.log('not loaded');

        }
        

    })


}

run();